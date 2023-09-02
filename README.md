# Positionable Code Block

[![License](https://img.shields.io/badge/license-GPL--2.0%2B-green.svg)](https://github.com/ali-awwad/block-editor-custom-code/blob/main/LICENSE.txt) ![WordPress Plugin Active Installs](https://img.shields.io/wordpress/plugin/installs/positionable-code-block?color=%23007cba&label=Active%20Installs&logo=wordpress&style=flat-square)

This plugin registers a custom block for the WordPress Block Editor. The block is called "Positionable Code Block" and allows you to add custom HTML, CSS and JavaScript to your posts and pages.

This came as simple need to add a custom script to a page, but I didn't want to add it to the theme's header.php file. I wanted to be able to add it to a specific page, and I wanted to be able to add it to the page's footer.

## Requirements

- PHP 7.0 or higher
- WordPress 6.0 or higher

## How to Use

When "Positionable Code Block" inserted, it will be having a standard child core custom html block.

add your custom code, or styles. then select the parent block "Positionable Code Block" and select the location and priority.

## NOTE

This does not support PHP, this plugin is very simple, and it should be used to add Google Tag Manager, Google Analytics and other pixel codes.

You can also using to add inline css and javascript, or link to external CDNs.
