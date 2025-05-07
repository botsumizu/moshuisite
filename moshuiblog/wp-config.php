<?php
define( 'WP_CACHE', true );





















/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'fmqtsxgdrm_wod08f8' );

/** Database username */
define( 'DB_USER', 'fmqtsxgdrm_wod08f8' );

/** Database password */
define( 'DB_PASSWORD', 'p5@3-8Sp1]Zm6w]]' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'qvohhjkjctopugr2ajlzsrxzz6nlgey10vwu4nyg3fhykkcghwvef3jfvfxgbtpi' );
define( 'SECURE_AUTH_KEY',  'jbqrobxrgyuelppgoc4b4keehxcv2vr0kvhhzoyknhmfpcovchsbe2nlebvdqxmv' );
define( 'LOGGED_IN_KEY',    'mnf2jrt8hsjzhkccxa3h1sn3sq935xxjxcb5pae1cqr8dt9vrvhygdow3rpayoww' );
define( 'NONCE_KEY',        'p6xrpmible88u9thmfnteq6xawc0kehxgtkk1f1lkuwkocxymkko8p9ja5wbdfhc' );
define( 'AUTH_SALT',        'jgwzdkhhs1f1k1ocfvkmli8rjzeeiv59ziqheeymfmdolgpxb3jxb54dhwvjzvfm' );
define( 'SECURE_AUTH_SALT', 'kmvjzv7usegqc8xlf5xdbcm70qlh731kxbkqqpqzxkl6kczof4mi1dzghvvk91v6' );
define( 'LOGGED_IN_SALT',   'zuexxogoirc1gayekvogveku9awnrywlefwltx22asrrl0u4mgsplniixle6xjhn' );
define( 'NONCE_SALT',       'kzpzbxbpgzar6xdqwsu6cebtcn0rrmb4yjlodq275y56pakix53xrk1q17eojban' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'soft_';

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
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
