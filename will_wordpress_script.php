<?php 

function add_jquery() {
	if (!is_admin()) {

		//deregister local copy of jquery 
		wp_deregister_script('jquery');
		//JQuery CDN link
		wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', array(), null, true);
	}

}
add_action('wp_enqueue_scripts', 'add_jquery');

?>