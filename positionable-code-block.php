<?php

/**
 * Plugin Name: Positionable Code Block
 * Plugin URI: https://github.com/ali-awwad/positionable-code-block
 * Description: A plugin to add custom code to the Gutenberg Block Editor editor.
 * Version: 1.0.0
 * Author: Ali Awwad
 * Author URI: https://github.com/ali-awwad
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// register using block json meta
function positional_code_block_register_block() {
    register_block_type_from_metadata( __DIR__ . '/build' );

}
add_action( 'init', 'positional_code_block_register_block' );