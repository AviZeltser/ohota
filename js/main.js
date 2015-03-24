/**
 * Created by Avi on 24.02.2015.
 */

$(document).ready(function() {
    initMainSlider();
    initTabs();
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

function stub() {

}