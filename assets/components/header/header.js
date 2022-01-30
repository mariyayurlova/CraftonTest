import './header.scss';
import './../../../node_modules/remodal/src/remodal';

let humburger = document.getElementById("humburger");
let menu = document.getElementById("menu");
let header = document.getElementById("header");

humburger.addEventListener('click', event => {
    humburger.classList.toggle('header__humburger_active');
    menu.classList.toggle('header__menu_active');
});

window.addEventListener('scroll', function(e) {
    if(window.scrollY > 172){
        header.classList.add("header_active");
    }
    else{
        header.classList.remove("header_active");
    }
});


