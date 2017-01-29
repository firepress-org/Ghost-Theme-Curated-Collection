/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

        // Calculates Reading Time
        $('.post-content').readingTime({
            readingTimeTarget: '.post-reading-time',
            wordCountTarget: '.post-word-count',
        });

        // Creates Captions from Alt tags
        $(".post-content img").each(function() {
            // Let's put a caption if there is one
            if($(this).attr("alt"))
              $(this).wrap('<figure class="image"></figure>')
              .after('<figcaption>'+$(this).attr("alt")+'</figcaption>');
        });

    });

}(jQuery));

//modification to the way bootstrap dropdowns work.
//this makes them work on hover at normal rez and on click/touch on phone/tablet
$(function () {
  var $win = $(window);
  $win.resize(function () {
      if ($win.width() > 768)
          $(".navbar-nav > .dropdown > a").attr("data-toggle", "");
      else
          $(".navbar-nav > .dropdown > a").attr("data-toggle", "dropdown");
  }).resize();
  $(".dropdown-menu").find("input, button").each(function () {
      $(this).click(function (e) {
          e.stopPropagation();
      });
  });
});