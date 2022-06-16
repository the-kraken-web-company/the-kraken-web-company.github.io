(function ($) {

    "use strict";

    $('.profile').on('click', function() {
        let el = $(this);
        let clone = el.clone();
        clone.toggleClass('col-6 col-md-4', false);
        clone.css({
            'background': '#f8f9fa',
            'position': 'absolute',
            'top': el.position().top,
            'left': el.position().left,
            'width': el.outerWidth(true),
            'height': el.outerHeight(true),
            'overflow': 'hidden',
        });
        clone.appendTo('#profiles-row');
        clone.find(".profile-description").toggleClass('hidden');
        clone.find(".x-close").toggleClass('hidden');
        clone.click(() => {
            clone.animate({
                'width': el.outerWidth(true),
                'height': el.outerHeight(true),
                'top': el.position().top,
                'left': el.position().left,
            }, 200, () => {
                setTimeout(() => {clone.remove()}, 350)
            });
        })
        console.log($('#profiles-row').outerWidth(true))
        clone.animate({
            'width': $('#profiles-row').outerWidth(true),
            'height': $('#profiles-row').outerHeight(true),
            'top': $('#profiles-row').position().top,
            'left': $('#profiles-row').position().left,
        }, 200);
    });
})(jQuery)