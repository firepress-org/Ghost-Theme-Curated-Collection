/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down").arctic_scroll();

        $(".menu-button, .nav-cover, .nav-close").on("click", function(e){
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });

        // Stop main header from resizing when scrolling on tablets:
        // Not all browsers support screen.orientation
        try {
            var md = new MobileDetect(window.navigator.userAgent);

            if (md.tablet()) {
                var headerHeightLandscape;
                var headerHeightPortrait;

                // If orientation is landscape:
                if (screen.orientation.angle === 0 || screen.orientation.angle === 180) {
                    headerHeightLandscape = $('.main-header').css('height');
                    $('.main-header').css('height', headerHeightLandscape);
                }
                // If orientation is portrait:
                else {
                    headerHeightPortrait = $('.main-header').css('height');
                    $('.main-header').css('height', headerHeightPortrait);
                }
            }
        } catch (e) {}

        // Fade-in main header background image:
        $('.main-header').imagesLoaded( { background: true }, function() {
            $('.main-header-background-square').css('background-color', 'transparent');
        });

        // Show main header's title and description when background image is visible:
        $(".home-template .main-header-background-square")
            .on("transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd", function(e) {
                $('.home-template .page-title, .home-template .page-description').css('display', 'inherit');
            });

        // When window is resized make sure title and description are visible:
        $(window).resize(function () {
            $('.home-template .page-title, .home-template .page-description').css('display', 'inherit');
        });

        // Fade-in logo when image is loaded:
        $('.blog-logo img').imagesLoaded(function() {
            $('.blog-logo img').css('display', 'inherit');
        });

        // Remove animation from menu when visible for first time:
        $('.nav-closed .menu-button').click(function() {
            $(this).css('animation', 'none');
        });

        // Show author image when image is loaded:
        $('.author-image .img').imagesLoaded( { background: true }, function() {
            $('.author-image').css('visibility', 'visible');
        });

        // Open/close navigation menu with ESC key:
        window.document.onkeydown = function(event) {
            if (event.repeat === false && event.code === 'Escape') {
                $("body").toggleClass("nav-opened nav-closed");
            }
        };

    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };
})(jQuery);

