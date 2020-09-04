function softScroll(selector, timer) {
    $(selector).click(function(event) {
        event.preventDefault();
        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, timer)
    });
}

softScroll('a[href*=about]', 500);
softScroll('a[href*=staff]', 700);
softScroll('a[href*=form-schedule]', 1000);