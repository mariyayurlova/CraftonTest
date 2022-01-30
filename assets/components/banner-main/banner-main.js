import './banner-main.scss';
import Swiper from "swiper";

let swiper = new Swiper('.banner-main__container', {
    pagination: {
        el: '.banner-main__pagination',
        type: 'bullets',
        clickable: 'true',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 600,
});

