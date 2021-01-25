;(function() {
//v60
    if( !window.conveythis ) window.conveythis = {};

    var option, languages, cdnUrl,
        languageHeight;
	
    cdnUrl = '//cdn.conveythis.com/images';
    languageHeight = 36;
    languages = {
        703:{'title_en':'English','title':'English','code2':'en','code3':'eng','flag':'R04'},
        704:{'title_en':'Afrikaans','title':'Afrikaans','code2':'af','code3':'afr','flag':'7xS'},
        705:{'title_en':'Albanian','title':'Shqip','code2':'sq','code3':'sqi','flag':'5iM'},
        706:{'title_en':'Amharic','title':'አማርኛ','code2':'am','code3':'amh','flag':'ZH1'},
        707:{'title_en':'Arabic','title':'العربية','code2':'ar','code3':'ara','flag':'J06'},
        708:{'title_en':'Armenian','title':'Հայերեն','code2':'hy','code3':'hye','flag':'q9U'},
        709:{'title_en':'Azerbaijan','title':'Azərbaycanca','code2':'az','code3':'aze','flag':'Wg1'},
        710:{'title_en':'Bashkir','title':'Башҡортса','code2':'ba','code3':'bak','flag':'D1H'},
        711:{'title_en':'Basque','title':'Euskara','code2':'eu','code3':'eus','flag':''},
        712:{'title_en':'Belarusian','title':'Беларуская','code2':'be','code3':'bel','flag':'O8S'},
        713:{'title_en':'Bengali','title':'বাংলা','code2':'bn','code3':'ben','flag':'63A'},
        714:{'title_en':'Bosnian','title':'Bosanski','code2':'bs','code3':'bos','flag':'Z1t'},
        715:{'title_en':'Bulgarian','title':'Български','code2':'bg','code3':'bul','flag':'V3p'},
        716:{'title_en':'Burmese','title':'မြန်မာဘာသာ','code2':'my','code3':'mya','flag':'YB9'},
        717:{'title_en':'Catalan','title':'Català','code2':'ca','code3':'cat','flag':'Pw6'},
        718:{'title_en':'Cebuano','title':'Cebuano','code2':'ceb','code3':'ceb','flag':''},
        719:{'title_en':'Chinese (Simplified)','title':'简体','code2':'zh','code3':'zh-sim','flag':'Z1v'},
		796:{'title_en':'Chinese (Traditional)','title':'繁體','code2':'zh-tw','code3':'zh-tra','flag':'Z1v'},
        720:{'title_en':'Croatian','title':'Hrvatski','code2':'hr','code3':'hrv','flag':'7KQ'},
        721:{'title_en':'Czech','title':'Čeština','code2':'cs','code3':'cze','flag':'1ZY'},
        722:{'title_en':'Danish','title':'Dansk','code2':'da','code3':'dan','flag':'Ro2'},
        723:{'title_en':'Dutch','title':'Nederlands','code2':'nl','code3':'nld','flag':'8jV'},
        724:{'title_en':'Esperanto','title':'Esperanto','code2':'eo','code3':'epo','flag':'Dw0'},
        725:{'title_en':'Estonian','title':'Eesti','code2':'et','code3':'est','flag':'VJ8'},
        726:{'title_en':'Finnish','title':'Suomi','title':'Finnish','code2':'fi','code3':'fin','flag':'nM4'},
        727:{'title_en':'French','title':'Français','code2':'fr','code3':'fre','flag':'E77'},
        728:{'title_en':'Galician','title':'Galego','code2':'gl','code3':'glg','flag':'A5d'},
        729:{'title_en':'Georgian','title':'ქართული','code2':'ka','code3':'kat','flag':'8Ou'},
        730:{'title_en':'German','title':'Deutsch','code2':'de','code3':'ger','flag':'K7e'},
        731:{'title_en':'Greek','title':'Ελληνικά','code2':'el','code3':'ell','flag':'kY8'},
        732:{'title_en':'Gujarati','title':'ગુજરાતી','code2':'gu','code3':'guj','flag':'My6'},
        733:{'title_en':'Haitian','title':'Kreyòl Ayisyen','code2':'ht','code3':'hat','flag':''},
        734:{'title_en':'Hebrew','title':'עברית','code2':'he','code3':'heb','flag':'5KS'},
        735:{'title_en':'Hill Mari','title':'Курыкмарий','code2':'mrj','code3':'mrj','flag':''},
        736:{'title_en':'Hindi','title':'हिन्दी','code2':'hi','code3':'hin','flag':'My6'},
        737:{'title_en':'Hungarian','title':'Magyar','code2':'hu','code3':'hun','flag':'OU2'},
        738:{'title_en':'Icelandic','title':'Íslenska','code2':'is','code3':'isl','flag':'Ho8'},
        739:{'title_en':'Indonesian','title':'Bahasa Indonesia','code2':'id','code3':'ind','flag':'t0X'},
        740:{'title_en':'Irish','title':'Gaeilge','code2':'ga','code3':'gle','flag':'5Tr'},
        741:{'title_en':'Italian','title':'Italiano','code2':'it','code3':'ita','flag':'BW7'},
        742:{'title_en':'Japanese','title':'日本語','code2':'ja','code3':'jpn','flag':'4YX'},
        743:{'title_en':'Javanese','title':'Basa Jawa','code2':'jv','code3':'jav','flag':'C9k'},
        744:{'title_en':'Kannada','title':'ಕನ್ನಡ','code2':'kn','code3':'kan','flag':'My6'},
        745:{'title_en':'Kazakh','title':'Қазақша','code2':'kk','code3':'kaz','flag':'QA5'},
        746:{'title_en':'Khmer','title':'ភាសាខ្មែរ','code2':'km','code3':'khm','flag':'o8B'},
        747:{'title_en':'Korean','title':'한국어','code2':'ko','code3':'kor','flag':'0W3'},
        748:{'title_en':'Kyrgyz','title':'Кыргызча','code2':'ky','code3':'kir','flag':'uP6'},
        749:{'title_en':'Laotian','title':'ພາສາລາວ','code2':'lo','code3':'lao','flag':'Qy5'},
        750:{'title_en':'Latin','title':'Latina','code2':'la','code3':'lat','flag':'BW7'},
        751:{'title_en':'Latvian','title':'Latviešu','code2':'lv','code3':'lav','flag':'j1D'},
        752:{'title_en':'Lithuanian','title':'Lietuvių','code2':'lt','code3':'lit','flag':'uI6'},
        753:{'title_en':'Luxemb','title':'Lëtzebuergesch','code2':'lb','code3':'ltz','flag':'EV8'},
        754:{'title_en':'Macedonian','title':'Македонски','code2':'mk','code3':'mkd','flag':'6GV'},
        755:{'title_en':'Malagasy','title':'Malagasy','code2':'mg','code3':'mlg','flag':'4tE'},
        756:{'title_en':'Malay','title':'Bahasa Melayu','code2':'ms','code3':'msa','flag':'C9k'},
        757:{'title_en':'Malayalam','title':'മലയാളം','code2':'ml','code3':'mal','flag':'My6'},
        758:{'title_en':'Maltese','title':'Malti','code2':'mt','code3':'mlt','flag':'N11'},
        759:{'title_en':'Maori','title':'Māori','code2':'mi','code3':'mri','flag':'0Mi'},
        760:{'title_en':'Marathi','title':'मराठी','code2':'mr','code3':'mar','flag':'My6'},
        761:{'title_en':'Mari','title':'Мари́йский','code2':'mhr','code3':'chm','flag':''},
        762:{'title_en':'Mongolian','title':'Монгол','code2':'mn','code3':'mon','flag':'X8h'},
        763:{'title_en':'Nepali','title':'नेपाली','code2':'ne','code3':'nep','flag':'E0c'},
        764:{'title_en':'Norwegian','title':'Norsk','code2':'no','code3':'nor','flag':'4KE'},
        765:{'title_en':'Papiamento','title':'E Papiamento','code2':'pap','code3':'pap','flag':''},
        766:{'title_en':'Persian','title':'فارسی','code2':'fa','code3':'per','flag':'Vo7'},
        767:{'title_en':'Polish','title':'Polski','code2':'pl','code3':'pol','flag':'j0R'},
        768:{'title_en':'Portuguese','title':'Português','code2':'pt','code3':'por','flag':'1oU'},
        769:{'title_en':'Punjabi','title':'ਪੰਜਾਬੀ','code2':'pa','code3':'pan','flag':'n4T'},
        770:{'title_en':'Romanian','title':'Română','code2':'ro','code3':'rum','flag':'V5u'},
        771:{'title_en':'Russian','title':'Русский','code2':'ru','code3':'rus','flag':'D1H'},
        772:{'title_en':'Scottish','title':'Gàidhlig','code2':'gd','code3':'gla','flag':'9MI'},
        773:{'title_en':'Serbian','title':'Српски','code2':'sr','code3':'srp','flag':'GC6'},
        774:{'title_en':'Sinhala','title':'සිංහල','code2':'si','code3':'sin','flag':'9JL'},
        775:{'title_en':'Slovakian','title':'Slovenčina','code2':'sk','code3':'slk','flag':'Y2i'},
        776:{'title_en':'Slovenian','title':'Slovenščina','code2':'sl','code3':'slv','flag':'ZR1'},
        777:{'title_en':'Spanish','title':'Español','code2':'es','code3':'spa','flag':'A5d'},
        778:{'title_en':'Sundanese','title':'Basa Sunda','code2':'su','code3':'sun','flag':'Wh1'},
        779:{'title_en':'Swahili','title':'Kiswahili','code2':'sw','code3':'swa','flag':'X3y'},
        780:{'title_en':'Swedish','title':'Svenska','code2':'sv','code3':'swe','flag':'oZ3'},
        781:{'title_en':'Tagalog','title':'Tagalog','code2':'tl','code3':'tgl','flag':'2qL'},
        782:{'title_en':'Tajik','title':'Тоҷикӣ','code2':'tg','code3':'tgk','flag':'7Qa'},
        783:{'title_en':'Tamil','title':'தமிழ்','code2':'ta','code3':'tam','flag':'My6'},
        784:{'title_en':'Tatar','title':'Татарча','code2':'tt','code3':'tat','flag':'D1H'},
        785:{'title_en':'Telugu','title':'తెలుగు','code2':'te','code3':'tel','flag':'My6'},
        786:{'title_en':'Thai','title':'ภาษาไทย','code2':'th','code3':'tha','flag':'V6r'},
        787:{'title_en':'Turkish','title':'Türkçe','code2':'tr','code3':'tur','flag':'YZ9'},
        788:{'title_en':'Udmurt','title':'Удму́рт дунне́','code2':'udm','code3':'udm','flag':''},
        789:{'title_en':'Ukrainian','title':'Українська','code2':'uk','code3':'ukr','flag':'2Mg'},
        790:{'title_en':'Urdu','title':'اردو','code2':'ur','code3':'urd','flag':'n4T'},
        791:{'title_en':'Uzbek','title':'O‘zbek','code2':'uz','code3':'uzb','flag':'zJ3'},
        792:{'title_en':'Vietnamese','title':'Tiếng Việt','code2':'vi','code3':'vie','flag':'l2A'},
        793:{'title_en':'Welsh','title':'Cymraeg','code2':'cy','code3':'wel','flag':'D4b'},
        794:{'title_en':'Xhosa','title':'isiXhosa','code2':'xh','code3':'xho','flag':'7xS'},
        795:{'title_en':'Yiddish','title':'ייִדיש','code2':'yi','code3':'yid','flag':'5KS'},	
		//796:{'title_en':'Chinese (Traditional)','title':'繁體','code2':'zh-TW','code3':'zh-tra','flag':'Z1v'},		
		797:{'title_en':'Somali','title':'Soomaali','code2':'so','code3':'som','flag':'3fH'},
		798:{'title_en':'Corsican','title':'Corsu','code2':'co','code3':'cos','flag':'E77'},
		799:{'title_en':'Frisian','title':'Frysk','code2':'fy','code3':'fry','flag':'8jV'},
		800:{'title_en':'Hausa','title':'Hausa','code2':'ha','code3':'hau','flag':'8oM'},
		801:{'title_en':'Hawaiian','title':'Ōlelo Hawaiʻi','code2':'haw','code3':'haw','flag':'00P'},
		802:{'title_en':'Hmong','title':'Hmong','code2':'hmn','code3':'hmn','flag':'Z1v'},
		803:{'title_en':'Igbo','title':'Igbo','code2':'ig','code3':'ibo','flag':'8oM'},
		804:{'title_en':'Kinyarwanda','title':'Kinyarwanda','code2':'rw','code3':'kin','flag':'8UD'},
		805:{'title_en':'Kurdish','title':'Kurdî','code2':'ku','code3':'kur','flag':'YZ9'},
		806:{'title_en':'Chichewa','title':'Chichewa','code2':'ny','code3':'nya','flag':'O9C'},
		807:{'title_en':'Odia','title':'ଓଡିଆ','code2':'or','code3':'ori','flag':'My6'},
		808:{'title_en':'Samoan','title':'Faasamoa','code2':'sm','code3':'smo','flag':'54E'},
		809:{'title_en':'Sesotho','title':'Sesotho','code2':'st','code3':'sot','flag':'7xS'},
		810:{'title_en':'Shona','title':'Shona','code2':'sn','code3':'sna','flag':'80Y'},
		811:{'title_en':'Sindhi','title':'سنڌي','code2':'sd','code3':'snd','flag':'n4T'},
		812:{'title_en':'Turkmen','title':'Türkmenler','code2':'tk','code3':'tuk','flag':'Tm5'},
		813:{'title_en':'Uyghur','title':'ئۇيغۇر','code2':'ug','code3':'uig','flag':'Z1v'},
		814:{'title_en':'Yoruba','title':'Yoruba','code2':'yo','code3':'yor','flag':'8oM'},
		815:{'title_en':'Zulu','title':'Zulu','code2':'zu','code3':'zul','flag':'7xS'},
    }
	
	var rightToLeftLanguages = {
		707:{'title':'Arabic','code2':'ar','code3':'ara','flag':'J06'},
		734:{'title':'Hebrew','code2':'he','code3':'heb','flag':'5KS'},
		766:{'title':'Persian','code2':'fa','code3':'per','flag':'Vo7'},
		790:{'title':'Urdu','code2':'ur','code3':'urd','flag':'n4T'},
	}

    //
	// Select the node that will be observed for mutations
	var targetNode = document.documentElement || document.body;
	var conveyItems = [];
	var conveyItemsDB = [];
	
	// Options for the observer (which mutations to observe)
	var config = { attributes: false, childList: true, subtree: true };

	// Callback function to execute when mutations are observed
	var observerCallback = function(mutationsList, observer) {
		for(var mutation of mutationsList) {
			if (mutation.type == 'childList') {
				// console.log('A child node has been added or removed.');		
				if(mutation.addedNodes.length > 0){
					if(window.conveythis.tree && option.is_prevent_ajax == null){
						// window.conveythis.tree( false );
						recursiveNode(mutation.addedNodes);
						// console.log(mutation.addedNodes);
					}
					
				}
			}
		}
	};

	var ajaxTimeOut = 100;
	function recursiveNode(nodeList) {

		if(nodeList.length > 0){
				
			var target_language_id = localStorage.getItem("conveythis-language-id");
			var source_language_id = window.conveythis.source_language_id;
			if(source_language_id == target_language_id)
				return;
			
			if(target_language_id)
				var target_language = languages[target_language_id].code2;					
			
			if(target_language){
				// console.log(nodeList);
				nodeList.forEach(function(item) {

					if( item.nodeName != "STYLE" && item.nodeName != "SCRIPT" && item.nodeName != "IFRAME" && item.nodeName != "HEAD"  ) 
					{	
						if( (item.parentNode == null) || (item.parentNode.nodeName != "STYLE" && item.parentNode.nodeName != "SCRIPT" && item.parentNode.nodeName != "IFRAME") ) 
						{							
							try{
								if(item.parentNode != null && item.parentNode.closest('.conveythis-no-translate')){ //to prevent transtation
									// console.log("return");
									return;
								}
							}catch(e){
								// console.log(e);
							}													
							
							if(item.nodeType == 3) {
							 
								if(item.textContent) {
									// console.log(item);
									var str = item.textContent.trim();
									str = str.trim();
								 
									if(str.length > 1 && isNaN(str) && !str.includes("<img"))  {	//!str.includes("<img") - shopify fix
									
										if( item.conveythis === undefined ) 
											item.conveythis = {};
										if( item.conveythis["textContent"] === undefined )
											item.conveythis["textContent"] = str;

										setTimeout(function(){
											//chaeck if tranlsation exists
											var translationExists = false;	
											for (let i = 0; i < conveyItemsDB.length; i++){
												var obj = conveyItemsDB[i];
												if(obj.source_text && obj.translate_text && obj.source_text === str && obj.target_language_id == target_language_id){
													item.textContent = obj.translate_text;
													// console.log("break");
													// console.log(obj.source_text + " - "+ obj.translate_text);
													translationExists = true;
													break;
												}		
											}
											//
											
											if(!translationExists){	
											// console.log("translate - "+str);
											// console.log(item);
											
												var referrer = location.href;
												referrer = referrer.replace("/"+target_language+"/","/");
												MysendRequest( 
													'POST', '/website/translate/ajax', {
													'referrer': referrer,
													'target_language': target_language,
													'segment': str,
													'ajax': 1 }, function(data){	
														if (data[0]) {
															
															observer.disconnect();
															data[0].target_language_id = target_language_id;
															if(!conveyItemsDB.some(tranlsation => tranlsation.source_text === data[0].source_text && tranlsation.target_language_id === data[0].target_language_id)){
																conveyItemsDB.push( data[0] );
															}														
															// console.log("conveyItemsDB:");
															// console.log(conveyItemsDB);
															item.textContent = data[0].translate_text;
															
															window.conveythis.translateShopifyCart(target_language_id);	
															
															observer.observe(targetNode, config);	
														}														
													}													
												);	
											}
											
											if(ajaxTimeOut > 100){
												ajaxTimeOut -= 100;
												// console.log("ajaxTimeOut = -"+ ajaxTimeOut);
											}
															
										},ajaxTimeOut);
										ajaxTimeOut += 100;
										// console.log("ajaxTimeOut = "+ ajaxTimeOut);
										
									}			
								}
							}else{
								
								if(item.nodeType == 1){									
									if(option.php_plugin_cur_lang){ // wordpress only
										if(item.nodeName.toUpperCase() == "A"){											
											if(item.attributes.href){
												var conveythis_language_id = localStorage.getItem( "conveythis-language-id" );
												var language_name = languages[conveythis_language_id].code2;
												var currentUrl = item.attributes.href.nodeValue;
												
												if(currentUrl.includes(window.location.hostname) && !currentUrl.includes("/"+language_name+"/")){
													var leftUrl  = currentUrl.substring(0, currentUrl.indexOf(window.location.hostname) + window.location.hostname.length);
													var rightUrl = currentUrl.substring(currentUrl.indexOf(window.location.hostname) + window.location.hostname.length)
													var newUrl = leftUrl + "/"+language_name+rightUrl;
													item.attributes.href.nodeValue = newUrl;
												}else if(currentUrl[0] == "/" && !currentUrl.includes("/"+language_name+"/")){
													var newUrl = "/"+language_name+currentUrl;
													item.attributes.href.nodeValue = newUrl;
												}		
											}												
										}
									}
								}								
							}
						}						

						if((item.childNodes) && (item.childNodes.length > 0)) recursiveNode(item.childNodes);	
					}
				});
			}

		}

	}

		
	function MysendRequest( method, request_uri, query, callback ) {

		if( window.conveythis.api_key ) {

			query.api_key = window.conveythis.api_key;
			query.signature = 'RWRmsLEPtA7hqNMbe6eGFLWtt5gXgQ9r';

			var xhttp = new XMLHttpRequest();

			xhttp.open( method, 'https://api.conveythis.com/25' + request_uri, true );

			xhttp.onreadystatechange = function() {

				if( xhttp.readyState == 4 && xhttp.status == 200 ) {

					var res = {data:{}}; // Fix

					if( xhttp.responseText ) {
						// console.log(xhttp.responseText);
						res = JSON.parse( xhttp.responseText );
					//	console.log(res);
					}

					if( callback ) {

						callback( res.data );						
					}
				}
			}

			xhttp.send( JSON.stringify( query ) );

		} else {

			console.log('ConveyThis: api_key not found');
		}
	}
	// Create an observer instance linked to the callback function
	var observer = new MutationObserver(observerCallback);
	
	function translate(){
		
		if( window.conveythis.translator ) {

            const conveythis_language_id = localStorage.getItem( "conveythis-language-id" );
			
			const params = new URLSearchParams(location.search);
			const localeLanguageCode = params.get('locale');

			
			if( localeLanguageCode ){
				// console.log("search in locale code");
				for (let language of option.languages){
					const globalLanguage = languages[language.id];
					if(globalLanguage.code2 == localeLanguageCode){
						translateLanguageId = language.id;
						break;
					}
				}
				if(translateLanguageId)
					window.conveythis.translator( translateLanguageId );
				
            }else if( conveythis_language_id ) {
				// console.log("search in localStorage");
				var translateLanguageId;
				for (let language of option.languages){
					if(language.id == conveythis_language_id){
						translateLanguageId = conveythis_language_id;
						break;
					}
				}
				if(translateLanguageId)
					window.conveythis.translator( translateLanguageId );
            }else{
				
				if(option.auto_translate){
					// console.log("search in auto_translate");
					var browserLanguageNames = navigator.languages;
					// console.log(browserLanguageNames);
					if(browserLanguageNames){
						var browserLanguageIds = [];
						browserLanguageNames.forEach(function( browserLanguageName ) {
							var id = findLanguageId(browserLanguageName.substring(0,2));
							if(id) browserLanguageIds.push(id);
						});
						// console.log(browserLanguageIds);
						var autoLanguageId;
						for (let browserLanguageId of browserLanguageIds){
							for (let language of option.languages){
								if(language.id == browserLanguageId){
									autoLanguageId = browserLanguageId;
									break;
								}
							}
							if (autoLanguageId) break;
						}
						// console.log("autoLanguageId: "+autoLanguageId);
						if (autoLanguageId){
							window.conveythis.translator( autoLanguageId );
						}
					}
				}
			}
        }
	}

	function rotateElement(element, angleStart, angleEnd){

		try {
			element.style.transform = 'rotate('+angleEnd+'deg)';
			element.animate([
			  // keyframes
			  { transform: 'rotate('+angleStart+'deg)' },
			  { transform: 'rotate('+angleEnd+'deg)' }
			], { 
			  // timing options
			  duration: 400,
			  easing: "ease-out"
			});			
		}
		catch(error) {
			// alert(error);
		}
	}
	
	function drawButton( wrapperId, value ) {
		var el_wrapper, el_custom, el_arrow,  cur_el_arrow, el_button;

        if( option.icon === 'rect' ) {

            var iconWidth = 30;

            if( option.text === 'full-text' ) {

                var buttonWidth = 168;
                var titleWidth = 86;
            }

            if( option.text === 'short-text' ) {

                var buttonWidth = 118;
                var titleWidth = 36;
            }

            if( option.text === 'without-text' ) {

                var buttonWidth = 72;
            }
        }

        if( option.icon === 'sqr' || option.icon === 'cir' ) {

            var iconWidth = 24;

            if( option.text === 'full-text' ) {

                var buttonWidth = 162;
                var titleWidth = 86;
            }

            if( option.text === 'short-text' ) {

                var buttonWidth = 112;
                var titleWidth = 36;
            }

            if( option.text === 'without-text' ) {

                var buttonWidth = 66;
            }
        }

        if( option.icon === 'without-flag' ) {

            var iconWidth = 24;

            if( option.text === 'full-text' ) {

                var buttonWidth = 132;
                var titleWidth = 90;
            }

            if( option.text === 'short-text' ) {

                var buttonWidth = 82;
                var titleWidth = 40;
            }

            if( option.text === 'without-text' ) {

                var buttonWidth = 30;
            }
        }

        //

        if( option.icon === 'rect' ) {

            var iconUrl = 'flags/v3/rectangular';
        }

        if( option.icon === 'sqr' ) {

            var iconUrl = 'flags/v3/square';
        }

        if( option.icon === 'cir' ) {

            var iconUrl = 'flags/v3/round';
        }

        //

        el_button = document.createElement("div");
        el_button.style.cursor = 'pointer';
        el_button.style.backgroundColor = '#fff';
        el_button.style.whiteSpace = 'nowrap';
        el_button.style.border = '1px solid #e0e0e0';        
        el_button.style.borderBottom = '0px';
        el_button.style.padding = "0px";
        el_button.style.margin = "0px";
        el_button.style.width = buttonWidth + 2 + 'px';

        el_wrapper = document.getElementById( wrapperId );
		
		
			
        if( el_wrapper ) {

            el_wrapper.innerHTML = "";

        } else {

            el_wrapper = document.createElement( 'div' );
            el_wrapper.id = wrapperId;
			el_wrapper.classList.add("conveythis-no-translate");
            el_wrapper.style.padding = "0px";
            el_wrapper.style.margin = "0px";
            el_wrapper.style.textAlign = "left";
			el_wrapper.style.zIndex = "2147483647";
			el_wrapper.style.direction = "ltr";
            el_wrapper.convey_translate = false;
	
			if( option.selector ) {
				el_custom = document.getElementById( option.selector );
			}
			
			if( el_custom ) {

				el_wrapper.style.position = "absolute";
				if(option.positionTop != null)
					el_wrapper.style.top = "0px";
				else
					el_wrapper.style.bottom = "0px";
				
				el_wrapper_outer = document.createElement( 'div' );
				el_wrapper_outer.appendChild( el_wrapper );
				el_wrapper_outer.style.position = "relative";
				el_wrapper_outer.style.display = "inline-block";
				el_wrapper_outer.style.height = "36px";
				el_wrapper_outer.style.verticalAlign = "middle";
				el_wrapper_outer.style.cssFloat = "left";
				
				// el_custom.innerHTML = "";
				el_custom.appendChild( el_wrapper_outer );

            } else {

                el_wrapper.style.position = "fixed";				
                // el_wrapper.style.right = "24px";
				
				if( option.positionLeft != null ) {
                    el_wrapper.style.left = option.positionLeft + "px";        
                }else{
					var rightPosition = option.positionRight ? option.positionRight : 0;
					el_wrapper.style.right = rightPosition + "px"; 
				}
				
                if( option.positionTop != null ) {

                    el_wrapper.style.top = option.positionTop + "px";        
                }else{
					var bottomPosition = option.positionBottom ? option.positionBottom : 0;
                    el_wrapper.style.bottom = bottomPosition + "px";
                }

                document.body.appendChild( el_wrapper );
            }
        }

        //

        el_wrapper.appendChild( el_button );

        //

        if( value ) {
			
			var activeLanguageFound = false;
            for( var i = 0; i < option.languages.length; i++ ) { 

                option.languages[i].active = false;

                if( option.languages[i].id == value ) {

                    option.languages[i].active = true;
					activeLanguageFound = true;
                }
            }
			
			if(!activeLanguageFound)
				option.languages[option.languages.length - 1].active = true;

			var isRightToLeft = rightToLeftLanguages[value];
			if(isRightToLeft){
				document.body.style.textAlign = "right";
				setDirection("rtl");
			}
			else{
				if(document.body.style.textAlign == "right")
					document.body.style.textAlign = null;
				setDirection("ltr");

			}
        }

        //

        var el_other = document.createElement("div");
            el_other.style.display = "none";
		

        //~ if( option.languages.length > 5 ) {

            //~ el_other.style.overflowY = 'scroll';
            //~ el_other.style.overflowX = 'hidden';
            //~ el_other.style.maxHeight = '152px';
            //~ el_other.style.whiteSpace = 'nowrap';
        //~ }

        var el_current = document.createElement("div");
            el_current.style.width = buttonWidth + 'px';

        if( option.positionTop != null ) {

            el_button.appendChild( el_current );
            el_button.appendChild( el_other );

        } else {

            el_button.appendChild( el_other );
            el_button.appendChild( el_current );
        }

        //
        option.languages.forEach(function( language ) {

            var lng = languages[language.id];

            var el_language = document.createElement("div");
                el_language.style.height = languageHeight + 'px';
                el_language.style.border = '1px solid #fff';
                el_language.style.borderBottom = '1px solid #e0e0e0';

                el_language.onmouseover = function(){
                    el_language.style.backgroundColor = '#f6f6f6';
                };
                el_language.onmouseout = function(){
                    el_language.style.backgroundColor = '#fff';
                };

            if( option.change && option.change[language.id] ) {

                var flag = option.change[language.id];
            
            } else {

                var flag = lng.flag;
            }

            if( option.icon !== 'without-flag' ) {

                var el_icon = document.createElement("div");
                    el_icon.style.height = languageHeight + 'px';
                    el_icon.style.width = iconWidth + 'px';
					el_icon.style.backgroundSize = 'contain';
                    el_icon.style.backgroundImage = "url('" + cdnUrl + "/" + iconUrl + "/" + flag + ".png')";

                    //

                    el_icon.style.display = 'inline-block';
                    el_icon.style.backgroundPosition = '50% 50%';
                    el_icon.style.backgroundRepeat = 'no-repeat';
                    el_icon.style.backgroundColor = 'transparent';
                    el_icon.style.marginLeft = '10px';
                
                el_language.appendChild( el_icon );
            }

            if( option.text !== 'without-text' ) {

                var el_title = document.createElement("div");
                    el_title.style.lineHeight = languageHeight + 'px';
                    el_title.style.height = languageHeight + 'px';
                    el_title.style.width = titleWidth + 'px';
                    el_title.style.display = 'inline-block';
                    el_title.style.marginLeft = '10px';
                    el_title.style.verticalAlign = 'top';
                    el_title.style.fontSize = '14px';
                    el_title.style.fontFamily = 'Arial';
                    el_title.style.textAlign = 'left';
                    el_title.style.color = '#000';
                    el_title.style.userSelect = 'none';
                    el_title.style.webkitUserSelect = "none";
                    el_title.style.MozUserSelect = "none";

                if( option.text === 'full-text' ) {

                    el_title.innerText = lng.title;
                }

                if( option.text === 'short-text' ) {

                    el_title.innerText = lng.code3;
                    el_title.style.textTransform = 'uppercase';
                }

                el_language.appendChild( el_title );
            }

            el_arrow = document.createElement("div");
            el_arrow.style.padding = "0px";
            el_arrow.style.margin = "0px";

            

            if( language.active ) {

                el_arrow.style.height = languageHeight + 'px';
                el_arrow.style.width = '10px';
                el_arrow.style.marginLeft = '10px';
                el_arrow.style.backgroundImage = "url('" + cdnUrl + "/right-new.png')";
                el_arrow.style.display = 'inline-block';
                el_arrow.style.backgroundPosition = '50% 50%';
                el_arrow.style.backgroundRepeat = 'no-repeat';
                el_arrow.style.backgroundColor = 'transparent';
                el_arrow.style.backgroundSize = 'contain';
                el_arrow.classList.add("conveythis-language-arrow");

                el_language.appendChild( el_arrow );

                el_current.appendChild( el_language );
				cur_el_arrow = el_arrow;
            }

            else {

                if( option.positionTop != null ) {

                    el_other.appendChild( el_language );
                }

                else {

                    el_other.insertBefore( el_language, el_other.childNodes[0] );
                }
            }
			
			el_language.onclick = function() {
				
				var rotateAngle = 0;
                if( el_other.style.display == "none" )    {

                    el_other.style.display = "block";
					el_other.style.maxHeight = null
					var windowHeight = parseInt(window.innerHeight * 0.7);
					var targetLanguagesHeight = el_other.clientHeight;
					
					if(targetLanguagesHeight > windowHeight){
						el_other.style.overflowY = 'auto';
						el_other.style.maxHeight = windowHeight+'px';
					}else{
						el_other.style.overflowY = null;
						el_other.style.maxHeight = targetLanguagesHeight;
					}

                    if( option.positionTop != null ) {
                        // cur_el_arrow.style.backgroundImage = "url('" + cdnUrl + "/down.png')";
						rotateAngle = 450;						
                    }
                    else {
						// cur_el_arrow.style.backgroundImage = "url('" + cdnUrl + "/up.png')";
						el_other.scrollTop = el_other.scrollHeight;						
						rotateAngle = -450;
                    }
					
					rotateElement(cur_el_arrow, 0, rotateAngle);
                }

                else {

                    el_other.style.display = "none";
                    // cur_el_arrow.style.backgroundImage = "url('" + cdnUrl + "/right.png')";
					rotateAngle = option.positionTop ? 450 : -450;
					rotateElement(cur_el_arrow, rotateAngle, 0 );
					
                }

                if( !language.active ) {

					if( language.location ) {
						// console.log(language);
						location.href = language.location;                            
					}
					else{
						if( window.conveythis.translator ) {

							window.conveythis.translator( language.id );
						}
					}
                }
            };
        });
		
		if(!option.hide_conveythis_logo){
			var el_conveythis = document.createElement("div");
			// el_conveythis.style.height = '50px';
			el_conveythis.style.border = '1px solid #fff';
			el_conveythis.style.borderBottom = '1px solid #e0e0e0';
			el_conveythis.style.whiteSpace = 'normal';
			el_conveythis.style.textAlign = 'center';
			el_conveythis.style.fontSize = '12px';
			if( option.text !== 'without-text' ) 
				el_conveythis.style.padding = '10px'; 
			
			el_conveythis.innerHTML = '<span style="color: #8e8e8e;">Powered by </span><a href="https://www.conveythis.com/?utm_source=conveythis_drop_down_btn" alt="conveythis.com" style="color: #489fd2;">ConveyThis</a>';
			
			if( option.positionTop != null ) {
				el_other.appendChild( el_conveythis );
			}else {
				el_other.insertBefore( el_conveythis, el_other.childNodes[0] );
			}
		}
	}
	
	//var cur_el_arrow;
    function render( value ) {
		
		// stop observing
		observer.disconnect();
		
		if(!option.hide_conveythis_button)
			drawButton("conveythis-wrapper", value);
		
		if(option.php_plugin_cur_lang){	// WP only
			let widgets = document.getElementsByClassName("conveythis_widget_placeholder");

			for (var i = 0; i < widgets.length; i++) {				
				option.selector = widgets[i].id;
				// option.positionTop = 0;
				drawButton("conveythis-wrapper"+i, value);
			}
		}
		
		// Start observing the target node for configured mutations
		if(option.source_language_id != localStorage.getItem( "conveythis-language-id")) 
			observer.observe(targetNode, config);
    }
	
	function setDirection(direction){
		
		if(window.conveythis.change_direction){
			let elements = document.querySelectorAll("[dir]");
			// console.log(document.querySelectorAll("[dir]"));
			elements.forEach(function(element, index){
				if(element["dir"])
					element["dir"] = direction;
			});
		}
	}
    //
	function findLanguageId( languageName ) {
		
		for (var key in languages){
			if(languages[key].code2 == languageName){
				return key;
			}
		}
		return null;
	}
	
	function showLoadingAnimation(isShow){

		try{
			var arrows = document.querySelectorAll('.conveythis-language-arrow');
			arrows.forEach(function(arrow){
				// console.log(arrow);
				if (isShow){
					arrow.style.backgroundImage = "url('" + cdnUrl + "/spinner.gif')";				
					arrow.style.width = "30px";
					arrow.style.marginLeft = "0px";
				}else{
					arrow.style.backgroundImage = "url('" + cdnUrl + "/right-new.png')";
					arrow.style.width = "10px";
					arrow.style.marginLeft = "10px";
				}
			});			
		}catch(e){console.log(e)}
	}

	function preventAjaxTranslation(){
		
		try{
			option.is_prevent_ajax = 1;
		}catch(e){}
	}
	
	function appendHrefLangToHead(url, language){
		let link = document.createElement('link');
		link.rel = 'alternate';
		link.href = url;
		link.hreflang = language;
		document.head.appendChild(link);
	}
	
	function setHrefLangs(){
		
		try{
			let hrefLang = document.head.querySelector("link[hreflang]");

			if(!hrefLang){
				window.conveythis.target_languages.forEach(function(language,index){
					
					const targetLanguage = window.conveythis.languages[language.id];			
					let languageUrl;
					
					if(language.id == window.conveythis.source_language_id){
						languageUrl = location.origin+location.pathname;
						appendHrefLangToHead(languageUrl, "x-default");
					}else{
						languageUrl = location.origin+location.pathname+"?locale="+targetLanguage.code2;
					}			
					appendHrefLangToHead(languageUrl, targetLanguage.code2);
				});
			}
		}catch(e){}			
	}
	
	
    window.conveythis.init = function ( temp ) {

		document.body.classList.add("notranslate");
		document.body.setAttribute("translate", "no");
		
        var uri = document.location.href;

        option = temp;

        if( temp.api_key ) {

            window.conveythis.api_key = temp.api_key;
        }

        if( temp.source_language_id ) {

            window.conveythis.source_language_id = temp.source_language_id;
        }

        if( window.conveythis.prepere ) {

            window.conveythis.prepere();
        }

        window.onhashchange = function(e) {

            if( uri != document.location.href ) {

                if( temp.source_language_id ) {

                    // render( temp.source_language_id );
                }
            }
        };
		
		if(temp.is_shopify){
			window.conveythis.is_shopify = true;
		}
		
		if(temp.translate_media){
			window.conveythis.translate_media = true;
		}
		
		if(temp.translate_document){
			window.conveythis.translate_document = true;
		}
		
		if(temp.change_direction){
			window.conveythis.change_direction = true;
		}

		if(temp.php_plugin_cur_lang){
			localStorage.setItem( "conveythis-language-id", temp.php_plugin_cur_lang);
			render(temp.php_plugin_cur_lang);
		}else{
			render();
			translate();
		}
		window.conveythis.target_languages = option.languages;
		
		setHrefLangs();
        
    };
    window.conveythis.render = render;
    window.conveythis.languages = languages;
    window.conveythis.showLoadingAnimation = showLoadingAnimation;
    window.conveythis.preventAjaxTranslation = preventAjaxTranslation;

	
}());

