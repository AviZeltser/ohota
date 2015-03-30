$(document).ready(function() {
    initMainSlider();
    initTabs();
    callForm();
    xClick();
    initFancy();
    $( window ).load(function() {
        console.log('load');
        stickySide();
    });
})


function initMainSlider() {
    $('.js-promo-slides').flexslider({
        animation: "slide"
    });
}

function initTabs() {

    $('.b-tab__item').on('click', function() {
        $('.b-tab__item').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
        var iindex = $(this).data('index');
        $('.b-tabs__body').each(function () {
            $(this).removeClass('visible');
            if($(this).data('parent') == iindex) {
                $(this).addClass('visible');
            }
        })
        console.log($(this).data('index'));
    })
}


function stickySide() {
    console.log('load 2');
    $('.b-promo__inner').stick_in_parent({
        parent:'.container'
    });
    /*if (!!$('.b-image__desc').offset()) {
        var stickyTop = $('.b-image__desc').offset().top;
        $(window).scroll(function(){
            var windowTop = $(window).scrollTop();
            if (stickyTop < windowTop){
                $('.b-image__desc').addClass('fixed');
            }
            else {
                $('.b-image__desc').removeClass('fixed');
            }
        });*/
}

function stub() {


}

function callForm(e) {
    $('.js-call-form').on('click', function() {

        if(!$('.tour-form').hasClass('show')) {
            clearForm();
            $('.tour-form').addClass('show');
        }
    })
}

function xClick() {
    $('.x-form').on('click', function() {
        closeForm();
    })
}

function closeForm() {
    $('.tour-form').removeClass('show');
    clearForm();
}

function clearForm() {
    $(".js-tour-form")[0].reset();
}

function initFancy() {
    console.log("initFancy");
    $(".gal-thumb").fancybox({
        prevEffect	: 'none',
        nextEffect	: 'none',
        helpers	: {
            title	: {
                type: 'outside'
            },
            thumbs	: {
                width	: 50,
                height	: 50
            }
        }

    });
}