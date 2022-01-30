import $ from 'jquery';


const JS_IMG_CLASS = 'js-img';

let $loader = $('.loader');
let $body = $('body');




let loadingImages = document.getElementsByClassName(JS_IMG_CLASS);
let count = loadingImages.length;
$(document).ready(showContent);




for (let i = 0; i < loadingImages.length; i++) {
    loadingImages[i].onload = imageLoaded;
    loadingImages[i].src = $(loadingImages[i]).data('src');
}

function imageLoaded() {
    count--;
    showContent();

}

function showContent() {
    $("body").addClass("body_active");

    if (count === 0) {
        stopLoading();
        $("body").removeClass("body_active");
    }
}

function colorType() {
    $( ".loader__path" ).each(function( i ) {

        setTimeout(function(){
            let name = document.getElementsByClassName("loader__path")[i];
            name.classList.add("loader_active");

            setTimeout(function(){
                name.classList.add("loader_deactive");
            }, 100);

            setTimeout(function(){
                name.classList.remove("loader_active");
            }, 200);


        }, 120*i);

    });
}

$( ".loader__path" ).removeClass("loader_deactive");
colorType();

setInterval(function() {
    $( ".loader__path" ).removeClass("loader_deactive");
    colorType();
}, 800);

export function stopLoading(event) {
    $body.removeClass('body_overflow_hidden');
    $loader.fadeOut(function () {
        $(this).remove();
        if(typeof event === 'function'){
            event();
        }
    });
}



export function startLoading() {
    $body.addClass('body_overflow_hidden');
    $body.prepend($loader);
    $loader.fadeIn();
}