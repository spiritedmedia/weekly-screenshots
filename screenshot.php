<?php
/**
 * Download an offline-ready version of the URL
 *
 * @param  string $url The URL to download
 * @param  string $dir The directory to where the downloaded files should go
 */
function capture_html( $url = '', $dir = '' ) {
	$wget_arg_parts = array(
		'--page-requisites' => '',
		'--convert-links' => '',
		'--span-hosts' => '',
		'--directory-prefix' => $dir,
		'-e' => '',
		'robots' => 'off',
	);
	$wget_args = array();

	// Construct the arguments for wget command
	foreach ( $wget_arg_parts as $key => $arg ) {
		if ( $arg ) {
			$key .= '=' . escapeshellarg( $arg );
		}
		$wget_args[] = $key;
	}
	$wget_args = implode( ' ', $wget_args );
	exec( "wget $wget_args " . escapeshellarg( $url ), $output, $return );
}

/**
 * Capture a full page screenshot of a given URL
 * at a desktop size and a mobile size
 *
 * @param  string $url  The URL to download
 * @param  string $path The path where the screenshot should be saved
 */
function capture_screenshot( $url = '', $path = '' ) {
	$args = array_map( 'escapeshellarg', [
		$url,
		$path,
	] );
	exec( 'sudo node screenshot.js ' . implode( ' ', $args ), $output, $return );
}

$screenshots = [
	'billy-penn' => [
		'homepage' => 'https://billypenn.com/',
		'article'  => 'https://billypenn.com/2017/09/18/phillys-holocaust-memorial-is-getting-a-7-million-overhaul/',
	],
	'the-incline' => [
		'homepage' => 'https://theincline.com/',
		'article'  => 'https://theincline.com/2017/09/18/which-pittsburgh-neighborhoods-claim-the-most-sidewalk-parking-tickets/',
	],
	'denverite' => [
		'homepage' => 'https://www.denverite.com/',
		'article'  => 'https://www.denverite.com/the-broncos-42775/',
	],
];

$root = dirname( __FILE__ );
foreach ( $screenshots as $site => $data ) {
	foreach ( $data as $page_type => $url ) {
		$dir = 'screenshots/' . date( 'Y-m-d' ) . '/';
		if ( ! file_exists( $dir ) ) {
			mkdir( $root . '/' . $dir, $mode = 0755, $recursive = true );
		}
		$filename = $site . '-' . $page_type . '-' . date( 'Y-m-d' );
		$path = $dir . $filename;

		echo '-----------------------' . PHP_EOL;
		echo  $site . ' ' . $page_type . PHP_EOL;
		echo '-----------------------' . PHP_EOL;

		capture_screenshot( $url, $path );

		$dir = 'captures/' . '/' . $site . '-' . $page_type . '/' . date( 'Y-m-d' ) . '/';
		if ( ! file_exists( $dir ) ) {
			mkdir( $root . '/' . $dir, $mode = 0755, $recursive = true );
		}
		capture_html( $url, $dir );
	}
}
