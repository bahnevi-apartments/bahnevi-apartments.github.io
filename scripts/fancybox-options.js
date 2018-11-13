$(function () {
    $('[data-fancybox = "images"],.savaRadulov').fancybox({
        // Default » "zoom"
        animationEffect: "circular",
        // Default » "fade"
        transitionEffect: "circular",
        buttons : [
            // Default
            'slideShow',
            'fullScreen',
            'thumbs',
            'share',
            'close',
            // Activation
            'download',
            'zoom'
        ],
        protect: true
    });
});

$(function () {
    $('[data-fancybox = "gallery"]').fancybox({
        // Default » "zoom"
        animationEffect: "",
        // Default » "fade"
        transitionEffect: "circular",
        buttons : [
            // Default
            'slideShow',
            'fullScreen',
            'thumbs',
            'share',
            'close',
            // Activation
            'download',
            'zoom'
        ],
        protect: true
    });
});
