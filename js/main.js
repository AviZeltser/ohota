/**
 * Created by Avi on 24.02.2015.
 */

$(document).ready(function() {
    initMainSlider();
})

function initMainSlider() {
    $('.js-promo-slides').flexslider({
        animation: "slide"
    });
}