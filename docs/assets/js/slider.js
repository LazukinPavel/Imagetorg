


var slideNow = 1;
var slideCount = jQuery('#slidewrapper').children().length;
var slideInterval = 500000;
var navBtnId = 0;
var translateWidth = 0;

jQuery(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval);

    jQuery('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    jQuery('#next-btn').click(function() {
        nextSlide();
    });

    jQuery('#prev-btn').click(function() {
        prevSlide();
    });

    jQuery('.slide-nav-btn').click(function() {
        navBtnId = jQuery(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -jQuery('#viewport').width() * (navBtnId);
            jQuery('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        jQuery('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -jQuery('#viewport').width() * (slideNow);
        jQuery('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -jQuery('#viewport').width() * (slideCount - 1);
        jQuery('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -jQuery('#viewport').width() * (slideNow - 2);
        jQuery('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}