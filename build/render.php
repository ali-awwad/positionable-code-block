<?php

$priority = $attributes['priority'];
$location = $attributes['location'];

if($location == 'head') {
    add_action('wp_head', function() use($content) {
        echo ($content);
    }, $priority);
}
else if($location == 'footer') {
    add_action('wp_footer', function() use($content) {
        echo sanitize_textarea_field($content);
    }, $priority);
}
else {
    echo sanitize_textarea_field($content);
}
