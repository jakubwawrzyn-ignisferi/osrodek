<?php
/**
 * Plugin Name: MOS - WordPress tylko jako panel treści
 * Description: WordPress służy wyłącznie do edycji treści dla strony Astro. Publiczna część WP przekierowuje na stronę główną, lista użytkowników w API i XML-RPC są wyłączone.
 * Version: 1.0
 *
 * Instalacja: wgraj ten plik do public_html/cms/wp-content/mu-plugins/ (folder mu-plugins
 * utwórz, jeśli go nie ma). Wtyczki z mu-plugins działają zawsze - nie trzeba ich włączać
 * i nie da się ich przypadkiem wyłączyć w panelu. Usunięcie pliku wyłącza wtyczkę.
 *
 * Nie zmienia: panelu (wp-admin), logowania, REST API dla treści (strony, wpisy, media)
 * ani plików z wp-content/uploads - z nich korzysta strona Astro.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Adres strony Astro: ten sam protokół i domena co WordPress, bez /cms.
 * Np. WP pod https://mos.tiu.pl/cms -> https://mos.tiu.pl/
 * Po zmianie domeny WordPressa adres dopasuje się sam.
 */
function mos_frontend_url() {
	$parts = wp_parse_url( home_url() );
	return $parts['scheme'] . '://' . $parts['host'] . '/';
}

/**
 * 1. Publiczna część WordPressa (motyw) przekierowuje na stronę Astro.
 * Hak template_redirect działa tylko przy wyświetlaniu stron motywu, więc panel, logowanie,
 * REST API i pliki z uploads działają normalnie. Przekierowanie tymczasowe (302), żeby
 * przeglądarki i wyszukiwarki go nie zapamiętywały na stałe.
 */
add_action(
	'template_redirect',
	function () {
		header( 'X-Robots-Tag: noindex, nofollow', true );
		wp_redirect( mos_frontend_url(), 302 );
		exit;
	},
	0
);

/**
 * 2. Lista użytkowników w REST API tylko dla zalogowanych.
 * Bez tego każdy może odczytać loginy kont (/wp-json/wp/v2/users), co ułatwia zgadywanie haseł.
 * Edytor bloków (zalogowany) nadal ma do niej dostęp.
 */
add_filter(
	'rest_endpoints',
	function ( $endpoints ) {
		if ( is_user_logged_in() ) {
			return $endpoints;
		}
		foreach ( array_keys( $endpoints ) as $route ) {
			if ( str_starts_with( $route, '/wp/v2/users' ) ) {
				unset( $endpoints[ $route ] );
			}
		}
		return $endpoints;
	}
);

/**
 * 3. Bez wbudowanej mapy strony WordPressa (/wp-sitemap.xml) - wymienia m.in. konta autorów.
 * Mapę strony dla Google tworzy strona Astro.
 */
add_filter( 'wp_sitemaps_enabled', '__return_false' );

/**
 * 4. XML-RPC wyłączony. Strona go nie używa, a jest częstym celem ataków na hasła.
 */
add_filter( 'xmlrpc_enabled', '__return_false' );
add_filter(
	'wp_headers',
	function ( $headers ) {
		unset( $headers['X-Pingback'] );
		return $headers;
	}
);
if ( defined( 'XMLRPC_REQUEST' ) && XMLRPC_REQUEST ) {
	status_header( 403 );
	exit( 'XML-RPC jest wyłączony.' );
}
