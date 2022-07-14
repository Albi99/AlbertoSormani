jQuery(document).ready(function() {

    function resize_section_height() {
        jQuery(".max_height").css({'height':jQuery(window).height()});
    }

    resize_section_height();
    jQuery(window).resize(function() {
        resize_section_height();
    });

});