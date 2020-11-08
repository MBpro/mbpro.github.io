
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});;
let onJSmenu = document.querySelector('#burger');
onJSmenu.classList.remove('button-burger', 'button-burger--ofJS');

let hiddenMenuOnJs = document.querySelector('.menu__list--header');
hiddenMenuOnJs.classList.add('js-menu__list');

let listLink = document.querySelector('.menu__list');
let bodyLocked = document.querySelector('body');
let nav = document.querySelector('.menu');
let lineHorizontal = document.querySelector('.button-burger__span');

let toggleMenu = function () {
    lineHorizontal.classList.toggle('js-button-burger__span--active');
    onJSmenu.classList.toggle('js-button-burger--active');
    hiddenMenuOnJs.classList.toggle('js-menu__list--active');
    bodyLocked.classList.toggle('locked');
    nav.classList.toggle('js-menu--active');
};

let remoweMenuActive = function (event) {
    if (event.target.classList.contains('menu__link') && hiddenMenuOnJs.classList.contains('js-menu__list--active')) {
        lineHorizontal.classList.toggle('js-button-burger__span--active');
        onJSmenu.classList.toggle('js-button-burger--active');
        hiddenMenuOnJs.classList.toggle('js-menu__list--active');
        bodyLocked.classList.toggle('locked');
        nav.classList.toggle('js-menu--active');
    }
}

onJSmenu.addEventListener('click', toggleMenu);
listLink.addEventListener('click', remoweMenuActive);
;

const controls = document.querySelector('.reviews__controls');
controls.classList.add('js-reviews__controls');

const box = document.querySelector('.reviews__box');
if (box.classList.contains('reviews__box--noJS') === true) {
    box.classList.remove('reviews__box--noJS');
    box.classList.add('js-reviews__box');
}

const item = document.querySelectorAll('.reviews__item');
for (let i = 0; i < item.length; i++) {
    if (item[i].classList.contains('reviews__item--noJS') === true) {
        item[i].classList.remove('reviews__item--noJS');
        item[i].classList.add('js-reviews__item');
    }
}



;
let popup = document.querySelector('.popup');
let buttonCloseModalCart = document.querySelector('.popup__button-close');

let successfully = document.querySelector('.successfully');
let buttonSubmitFormModalCart = document.querySelector('.popup__button-submit');
let buttonReturnAfterSuccessfulSubmit = document.querySelector('.successfully__button');

let backgroundModalCart = document.querySelector('.background-modal');

let courses = document.querySelector('.courses__content'); //parent elements 
let greeting = document.querySelector('.greeting__list'); //parent elements 

let bodyLockedScroll = document.querySelector('body');

let openModalCart = function (event) {
    if (event.target.classList.contains('modal-show')) {
        event.preventDefault();
        popup.classList.add('js-popup');
        backgroundModalCart.classList.add('js-background-modal');
        bodyLockedScroll.classList.add('locked');
    }
};

let closeModalCart = function () {
    if (popup.classList.contains('js-popup') === true) {
        popup.classList.remove('js-popup');
        backgroundModalCart.classList.remove('js-background-modal');
        bodyLockedScroll.classList.remove('locked');
    }
};

let successfullySubmittedModalCart = function () {
    if (popup.classList.contains('js-popup') === true) {
        popup.classList.remove('js-popup');
        successfully.classList.add('js-successfully');
    }
};

let returnToHomePage = function () {
    if (successfully.classList.contains('js-successfully') === true) {
        successfully.classList.remove('js-successfully');
        backgroundModalCart.classList.remove('js-background-modal');
        bodyLockedScroll.classList.remove('locked');
    }
};


window.addEventListener('keydown', function (event) { //close modal cart button "escape"
    if (event.key === 'Escape') {
        if (popup.classList.contains('js-popup') === true) {
            popup.classList.remove('js-popup');
            backgroundModalCart.classList.remove('js-background-modal');
            bodyLockedScroll.classList.remove('locked');
        } else if (successfully.classList.contains('js-successfully') === true) {
            successfully.classList.remove('js-successfully');
            backgroundModalCart.classList.remove('js-background-modal');
            bodyLockedScroll.classList.remove('locked');
        }
    }
})

courses.addEventListener('click', openModalCart);
greeting.addEventListener('click', openModalCart);
buttonCloseModalCart.addEventListener('click', closeModalCart);
buttonSubmitFormModalCart.addEventListener('click', successfullySubmittedModalCart);
buttonReturnAfterSuccessfulSubmit.addEventListener('click', returnToHomePage);



;

