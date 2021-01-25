;(function() {

	if( !window.conveythis ) window.conveythis = {};

	var translations, segments;

	var documentExt = [
		'pdf'
	];

	function translator( target_language_id ) {

		const targetLanguage = window.conveythis.languages[target_language_id];
		
		tree( false );
		
		if( target_language_id == window.conveythis.source_language_id ) {

			translations = null;

			tree( true );

			window.conveythis.render( target_language_id );
			
			removeUrlLocale();
			
			languageChangedEvent(targetLanguage);
			
		} else {

			sendRequest( 'POST', '/website/translate/', {
				'referrer': location.href,
				'target_language': targetLanguage.code2,
				'segments': segments,
			}, function( data ) {

				translations = data;

				tree( true );

				window.conveythis.render( target_language_id );
				
				languageChangedEvent(targetLanguage);
			});
			
			setUrlLocale(targetLanguage.code2);
		}
		
		if( localStorage ) localStorage.setItem( "conveythis-language-id", target_language_id );
	
		
		window.conveythis.translateShopifyCart(target_language_id);
		
	}

	function translateShopifyCart(target_language_id){
		
		if(typeof window.conveythis.is_shopify !== 'undefined' && window.conveythis.is_shopify){
			var target_language = window.conveythis.languages[target_language_id].code2;
			var forms = document.querySelectorAll('form[method="post"][action^="/checkout"], form[method="post"][action^="/cart"]');
			// console.log(forms);
			
			setLocaleUrl = function(url, param_name, target_language) {
				var localeUrl = new URL(url, location.href);
				localeUrl.searchParams.set(param_name, target_language);
				return localeUrl.pathname + localeUrl.search
			};	

			for (var i = 0; i < forms.length; i++) {
				var form = forms[i];
				form.setAttribute("action", setLocaleUrl(form.getAttribute("action"), "locale", target_language));
			}
		}
	}
	
	function apply( el, name ) {

		var segment;

		try {
			if( el[name] && el[name].replace(/[\u200B-\u200D\uFEFF]/g, '').trim() ) {

				if( el.conveythis === undefined ) el.conveythis = {};

				segment = el[name];
				segment = segment.replace(/\<!--(.*?)\-->/g, "");
				segment = segment.trim();
				
				if( el.conveythis[name] === undefined ){
					el.conveythis[name] = segment;
				}else{
					segment = el.conveythis[name];
				}

				if( segments === undefined ) segments = [];

				if( segments.indexOf( segment ) === -1 ) segments.push( segment );
			}
		}
		catch(error) {
			// console.error(error);
		}

		return function( translate ) {

			var flag, source_text;

			if( translate && el.conveythis !== undefined && el.conveythis[name] !== undefined ) {

				source_text = el.conveythis[name].trim();

				if( translations && source_text ) {

					translations.forEach( function( translation ) {

						if( translation.translate_text && translation.source_text == source_text ) {

							flag = true;
							el[name] = el.conveythis[name].replace( translation.source_text, translation.translate_text );
							
							if(el.nodeName.toUpperCase() == 'IMG'){

								if(el["srcset"] && el["src"] == translation.translate_text && translation.source_text != translation.translate_text){
									el["convey-image-srcset"] = el["srcset"];
									el["srcset"] = el["src"];
								}else if(el["convey-image-srcset"] && el["src"] == translation.source_text){
									el["srcset"] = el["convey-image-srcset"];
								}
							}
							
							return;
						}
					});
				}
				
				if( flag === undefined ){
					
					el[name] = el.conveythis[name];	
					
					if(el["convey-image-srcset"]){
						el["srcset"] = el["convey-image-srcset"];
					}
				}
			}
		};
	}
	
    var siblingsAllowArray = ["A", "ABBR", "ACRONYM", "BDO", "BDI", "STRONG","BR","SPAN", "EM", "I", "B", "CITE", "DEL", "DFN", "INS", "MARK", "Q", "BIG", "SMALL", "SUB", "SUP", "U", "FONT"];
    var siblingsAvoidArray = ["P", "DIV", "SVG"];
	
	function shouldTranslateWholeTag(element){
		for(var i=0; i<element.childNodes.length; i++){
			var child = element.childNodes[i];
			
			if(siblingsAvoidArray.includes(child.nodeName.toUpperCase())){
				// console.log("break");
				return false;
			}
		}
		return true;
	}

	function allowTranslateWholeTag(element){
		for(var i=0; i<element.childNodes.length; i++){
			var child = element.childNodes[i];
			
			if(siblingsAllowArray.includes(child.nodeName.toUpperCase())){
				// console.log(child);
				// console.log(child.outerHTML);
				if(child.outerHTML.match(/>(\s*[^<>\s]+[\s\S]*?)</g)){
					return true;
				}else if(child.nodeName.toUpperCase() == "BR"){
					if(element.innerHTML.match(/\s*[^<>\s]+\s*<br>\s*[^<>\s]+/gi)){
						return true;
					}
				}
			}
		}
		return false;
	}

	function isTextNodeExists(element) {
		for(var i=0; i<element.childNodes.length; i++){
			var child = element.childNodes[i];
			
			if(child.nodeName == "#text" && child.textContent.replace(/[\u200B-\u200D\uFEFF]/g, '').trim()){ // [\u200B-\u200D\uFEFF] - zero width space
				return true;
			}
		}
		return false;
	}
	
	function tree( translate ) {

		walk( document.documentElement );

		function walk( el ) {

			var childs = el.childNodes,
				i = childs.length;
			
			if(el.classList && el.classList.contains("conveythis-no-translate")){ //to prevent transtation
				return;
			}
			
			if( el.nodeType === 3 ) {

				if(	el.textContent.replace(/[\u200B-\u200D\uFEFF]/g, '').trim() && ( el.nextSibling || el.previousSibling ) ){
					
					if(el.parentElement && allowTranslateWholeTag(el.parentElement) && shouldTranslateWholeTag(el.parentElement))
						apply( el.parentElement, 'innerHTML' )( translate );
					else
						apply( el, 'textContent' )( translate );
				}
				else
					apply( el, 'textContent' )( translate );

			} else {

				if( el.nodeType === 1 ) {

					if( el.nodeName.toUpperCase() !== 'SCRIPT' && el.nodeName.toUpperCase() !== 'STYLE' && el.nodeName.toUpperCase() !== 'NOSCRIPT' && el.nodeName.toUpperCase() !== 'IFRAME' ) {
						
						if( (el.parentNode == null) || (el.parentNode.nodeName.toUpperCase() != "STYLE" && el.parentNode.nodeName.toUpperCase() != "SCRIPT" && el.parentNode.nodeName.toUpperCase() != "IFRAME") ) {

							if( el.type && el.type == 'submit' ) {

								apply( el, 'value' )( translate );
							}

							if(!el.closest('head')){
								// console.log(el);
								apply( el, 'title' )( translate );

								apply( el, 'alt' )( translate );

								apply( el, 'placeholder' )( translate );
							}
							
							
							if(el.nodeName.toUpperCase() == 'IMG'){
								if(window.conveythis.translate_media){
									// console.log(el["src"]);
									apply( el, 'src' )( translate );
								}
							}
							
							if(el.nodeName.toUpperCase() == 'META'){
								if(el.name && (el.name == 'keywords' || el.name == 'description')){
									// console.log(el["content"]);
									apply( el, 'content' )( translate );
								}
							}

							if(window.conveythis.translate_document){
								if(el.nodeName.toUpperCase() == 'A' && el.getAttribute('href')){
									var href = el.getAttribute('href');
									var extension = href.split('.').pop(); 

									if(documentExt.includes(extension)){
										// console.log(href + " - "+extension);	
										apply( el, 'href' )( translate );
									}
								}
							}
					
							if( siblingsAllowArray.includes(el.nodeName.toUpperCase()) ){
										
								if(el.parentElement){

									if(isTextNodeExists(el.parentElement) && allowTranslateWholeTag(el.parentElement) && shouldTranslateWholeTag(el.parentElement)){
										// no need to walk inside
										return;										
									}
								}
							}
						}
					}
				}
			}

			while( i-- ) {

				if( el.nodeType === 1 ) {

					
					
					if(el.nodeName.toUpperCase() !== 'SCRIPT' && el.nodeName.toUpperCase() !== 'STYLE' && el.nodeName.toUpperCase() !== 'NOSCRIPT' && el.nodeName.toUpperCase() !== 'IFRAME' ) {

						if( el.convey_translate || el.convey_translate === undefined ) {
							try{
								walk( childs[i] );
							}catch(e){
								// console.log(e);
							}
						}
					}
				}
			}
		}
	}

	//

	function prepere() {

		var temp = localStorage.getItem( "conveythis-check" );

		if( !temp )
		{
			sendRequest( 'POST', '/website/check/', {
				'referrer': location.href,
			}, function( data ) {

				localStorage.setItem( "conveythis-check", "1" );

				if( !data.length ) {

					tree( false );

					sendRequest( 'POST', '/website/translate/', {
						'referrer': location.href,
						'segments': segments,
					});
				}
			});
		}
	}
	
	function setUrlLocale(languageCode){
		
		try{
			if( !location.href.includes("conveythis.com/dashboard/translation/visual") ){
				const params = new URLSearchParams(location.search);
				params.set('locale', languageCode);

				window.history.replaceState({}, '', `${location.pathname}?${params}${location.hash}`);
			}

		}catch(e){
			console.log(e);
		}
	}
	
	function removeUrlLocale(){
		
		try{
			if( !location.href.includes("conveythis.com/dashboard/translation/visual") ){
				const params = new URLSearchParams(location.search);
				params.delete('locale');
				
				const paramSize = Array.from(params).length
				if(paramSize > 0)
					window.history.replaceState({}, '', `${location.pathname}?${params}${location.hash}`);
				else
					window.history.replaceState({}, '', `${location.pathname}${location.hash}`);
			}

		}catch(e){
			console.log(e);
		}
	}
	
	function languageChangedEvent(language){
				
		try{
			var event = new CustomEvent("conveythis-language-changed", { "detail": {"language": language } });
			document.dispatchEvent(event);
		}catch(e){
			console.log(e);
		}
		
	}
	
	function sendRequest( method, request_uri, query, callback ) {

		if( window.conveythis.api_key ) {

			query.api_key = window.conveythis.api_key;
			query.signature = 'RWRmsLEPtA7hqNMbe6eGFLWtt5gXgQ9r';

			var xhttp = new XMLHttpRequest();

			xhttp.open( method, 'https://api.conveythis.com/25' + request_uri, true );

			xhttp.onreadystatechange = function() {

				if( xhttp.readyState == 4 && xhttp.status == 200 ) {

					var res = {data:{}}; // Fix

					if( xhttp.responseText ) {

						res = JSON.parse( xhttp.responseText );
					}

					if( callback ) {

						callback( res.data );						
					}
				}else if(xhttp.readyState == 4 && xhttp.status == 426){
					if(xhttp.response){
						let response = JSON.parse(xhttp.response);
						console.log(response);
						alert(response.message);
					}
				}

				window.conveythis.showLoadingAnimation(0);
			}

			window.conveythis.showLoadingAnimation(1);
			xhttp.send( JSON.stringify( query ) );

		} else {

			console.log('ConveyThis: api_key not found');
		}
	}

	window.conveythis.translator = translator;
	window.conveythis.prepere = prepere;
	window.conveythis.tree = tree;
	window.conveythis.translateShopifyCart = translateShopifyCart;

}());
