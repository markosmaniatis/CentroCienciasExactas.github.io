<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'oviwebcl_ubb1120' );

/** MySQL database username */
define( 'DB_USER', 'oviwebcl_ubb1120' );

/** MySQL database password */
define( 'DB_PASSWORD', '0@S0[Sgpo4' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ko4jxiclqfnjnb2ycp8hjcg1hzqjbovhstm9pupudnmu2t5ciavoykyo3ufzkkey' );
define( 'SECURE_AUTH_KEY',  'r7dntp04ogxxt4jdm8kramnmmatpqy5njtp1wrzn2f5uttdgo7tbcroth8d9kjyf' );
define( 'LOGGED_IN_KEY',    'eur0p5xx3q8bn7lohdunh071amoj8hhkov8fhiloymnhohgoad2umgtu16fs4me7' );
define( 'NONCE_KEY',        'iqyg1x7rqox5nbwl9sgedyzdyqjw6rrjimd2a8cdgrrssayiffw490qkmwm0ocgh' );
define( 'AUTH_SALT',        'wcmgkxtpyfr37osaqbrhyjxbnlnr97yagxpfkyuezmworkfatt2ydrt2txo4z11s' );
define( 'SECURE_AUTH_SALT', 'gzckec5lcc2wnh4xok1xlmdfrc9j6cfpqecq1edz09daao5rufqpolckilpqrmsn' );
define( 'LOGGED_IN_SALT',   'zjojirrbqj1z36yeewqhvqgu96dn1odqz5wpirj4i3j3hzxiuzezgnavlccpvila' );
define( 'NONCE_SALT',       'ymcwozsh7ezqpt4aiye18u4ojbtnn08kcyporl9o29xgpcrbcrdesv3iey5n7qfy' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'ubbdb_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
