

const burgerOpen = document.querySelector('#burger-open');
const burgerClose = document.querySelector('#burger-close');
const lineDecoration = document.querySelector('.burger__line');
const navigation = document.querySelector('.main-header__nav');
const backgroundMenu = document.querySelector('.background-mobile-menu');
const lockScroll = document.querySelector('body');
const MenuList = document.querySelector('#main-menu');

function openMenu(){
    burgerOpen.classList.add('js-burger__button--active');
    lineDecoration.classList.add('js-burger__line--active');
    navigation.classList.add('js-main-header__nav--active');
    backgroundMenu.classList.add('js-background-mobile-menu');
    lockScroll.classList.add('js-lock-scroll');
}

function closeMenu(){
    burgerOpen.classList.remove('js-burger__button--active');
    lineDecoration.classList.remove('js-burger__line--active');
    navigation.classList.remove('js-main-header__nav--active');
    backgroundMenu.classList.remove('js-background-mobile-menu');
    lockScroll.classList.remove('js-lock-scroll');
}

let remoweMenuActiveAfterClickLink = function (event) {
    if (event.target.classList.contains('menu-list__link') && navigation.classList.contains('js-main-header__nav--active')) {
        burgerOpen.classList.remove('js-burger__button--active');
        lineDecoration.classList.remove('js-burger__line--active');
        navigation.classList.remove('js-main-header__nav--active');
        backgroundMenu.classList.remove('js-background-mobile-menu');
        lockScroll.classList.remove('js-lock-scroll');
       
    }
}

burgerOpen.addEventListener('click', openMenu);
burgerClose.addEventListener('click', closeMenu);
MenuList.addEventListener('click', remoweMenuActiveAfterClickLink);








const payMethod = document.querySelector('#pay-method');
const deliveryMethod = document.querySelector('#delivery-method');
const buttonAddQuantity = document.querySelector('#button-add-quantity');
const buttonSubstractQuantity = document.querySelector('#button-subtract-quantity');
const quantityInput = document.querySelector('#quantity');
const ukrPochta = document.querySelector('#ukr-pochta');
const novaPocta = document.querySelector('#nova-pocta');
const deliveryСompany = document.querySelector('#delivery-company');
const requisites = document.querySelector('#requisites-for-pay');
const buttonOrderConfirm = document.querySelector('#button-order-confirm');
const infoPay = document.querySelector('#info-pay');
const popup = document.querySelector('#popup');
const buttonPay = document.querySelector('#link-pay');
const buttonClosePopup =  document.querySelector('#button-close-popup');
const buttonCloseSuccessfulOrderPopup =  document.querySelector('#button-close-successful-order-popup');
const confirm = document.querySelector('#confirmed');

//const textIfCashOnDelivery = document.querySelector('#cash-on-delivery');
//const textIfPayBeforedelivery = document.querySelector('#pay-before-delivery');

const outputMethodPay = document.querySelector('#output-method-pay');
const outputMethodDelivery = document.querySelector('#output-method-delivery');
const formPopup = document.querySelector('#form-popup');
const payBeforeDeliveryUkrpochta = ' "Укрпочта"';
const payBeforeDeliveryNovapochta = ' "Новая почта"';
const payPrivatBank = ' Оплата на карту "Приват Банк"'
const cashOnDeliveryNovaPochta = ' Наложеный платеж "Новая почта"';
const cashOnDeliveryUkrpochta = ' Наложеный платеж "Укрпочта"'; 
let price = 190;
const outMainPrice = document.querySelector('#out-main-price');
const outPrice = document.querySelector('#out-price');
let outFirstSum = document.querySelector('#out-first-sum');
let outSecondSum = document.querySelector('#out-second-sum');
//Personal Information
const namePopup = document.querySelector('#name')
const phoneNumberPopup = document.querySelector('#phone');
const surnamePopup = document.querySelector('#surname');
const emailPopup = document.querySelector('#email');
//Nova pochta
const cityNovapochtaPopup = document.querySelector('#city-novapochta');
const departmentNovapochtaPopup = document.querySelector('#department');
//Ukr pochta
const streetUkrpochtaPopup = document.querySelector('#street');
const houseUkrpochtaPopup = document.querySelector('#house');
const flatUkrpochtaPopup = document.querySelector('#flat');
const cityUkrpochtaPopup = document.querySelector('#city-ukrpochta');
const regionUkrpochtaPopup = document.querySelector('#region');
const indexUkrpochtaPopup = document.querySelector('#index'); 
const inputPhone = document.querySelector('#phone');
const copyButton = document.querySelector('#copy-button');
const scrollToTopBtn = document.querySelector('#scroll-to-top-btn');

//variables for google form select elements
const novapochta = 'Наложенный НП';
const privat = 'На карту';
const ukrpochta = 'Наложенный УП';
const deliveryCompanyNovapocta = 'НП';
const deliveryCompanyUkrpochta = 'УП';
const optiondNovapochta = document.querySelector('#option-novapochta');




if (inputPhone.value === "+380") {
    inputPhone.classList.remove('validate');
}

if (flatUkrpochtaPopup.value === '') {
    flatUkrpochtaPopup.classList.remove('validate');
}

function AddClassInputPhone(){
    if (inputPhone.value != "+380" && !inputPhone.classList.contains('validate')) {
        inputPhone.classList.add('validate');
    }
}

function AddClassInputFlat(){
    if (flatUkrpochtaPopup.value != '' && !flatUkrpochtaPopup.classList.contains('validate')) {
        flatUkrpochtaPopup.classList.add('validate');
    }else{
        flatUkrpochtaPopup.classList.remove('validate');
    }
}

outPrice.textContent = price + ' грн';
outMainPrice.textContent = price; 

if(quantityInput.value === '1'){
    outFirstSum.textContent = price + ' грн';
    outSecondSum.textContent = price + ' грн';
}

const quantityAdd = function(){
    quantityInput.value++;
    if (quantityInput.value > 100) quantityInput.value = 1;
    let sum = quantityInput.value * price;
    outFirstSum.textContent = sum + ' грн';
    outSecondSum.textContent = sum + ' грн'; 
}

const quantitySubstract = function(){
    quantityInput.value--;
    if (quantityInput.value < 1) quantityInput.value = 100;
    quantityInput.value * price
    let sum = quantityInput.value * price;
    outFirstSum.textContent = sum + ' грн';
    outSecondSum.textContent = sum + ' грн';
}

const defaultForm = function(){
    if ( payMethod.value === novapochta){
        deliveryСompany.style.display = 'none';
        ukrPochta.style.display = 'none';
        requisites.style.display = 'none';
        buttonOrderConfirm.textContent = 'Заказ подтверждаю';
        infoPay.style.display = 'none';
        //textIfCashOnDelivery.style.display = 'block';
        //textIfPayBeforedelivery.style.display = 'none';
        outputMethodPay.textContent = cashOnDeliveryNovaPochta;
        outputMethodDelivery.textContent = payBeforeDeliveryNovapochta;

        if (!departmentNovapochtaPopup.hasAttribute('required')) {    
            cityNovapochtaPopup.setAttribute('required','');
            departmentNovapochtaPopup.setAttribute('required','');
        }

        if (streetUkrpochtaPopup.hasAttribute('required')) {
            streetUkrpochtaPopup.removeAttribute('required');
            houseUkrpochtaPopup.removeAttribute('required');
            cityUkrpochtaPopup.removeAttribute('required');
            regionUkrpochtaPopup.removeAttribute('required');
            indexUkrpochtaPopup.removeAttribute('required');
        }
    } 
}

defaultForm();


const choiceOfPaymentMethod = function (){
    if ( payMethod.value === novapochta){
        deliveryСompany.style.display = 'none';
        ukrPochta.style.display = 'none';
        novaPocta.style.display = 'block';
        requisites.style.display = 'none';
        buttonOrderConfirm.textContent = 'Заказ подтверждаю';
        infoPay.style.display = 'none';
        outputMethodPay.textContent = cashOnDeliveryNovaPochta;
        outputMethodDelivery.textContent = payBeforeDeliveryNovapochta;

        if (!departmentNovapochtaPopup.hasAttribute('required')) {    
            cityNovapochtaPopup.setAttribute('required','');
            departmentNovapochtaPopup.setAttribute('required','');
        }

        if (streetUkrpochtaPopup.hasAttribute('required')) {
            streetUkrpochtaPopup.removeAttribute('required');
            houseUkrpochtaPopup.removeAttribute('required');
            cityUkrpochtaPopup.removeAttribute('required');
            regionUkrpochtaPopup.removeAttribute('required');
            indexUkrpochtaPopup.removeAttribute('required');
        }
        
        return 
    }

    if ( payMethod.value === privat){
        deliveryСompany.style.display = 'block';
        ukrPochta.style.display = 'none';
        novaPocta.style.display = 'block';
        requisites.style.display = 'block';
        buttonOrderConfirm.textContent = 'Оплачено';
        infoPay.style.display = 'block';
        outputMethodPay.textContent = payPrivatBank;
        outputMethodDelivery.textContent = payBeforeDeliveryNovapochta;
    }

   if ( payMethod.value === ukrpochta){
        deliveryСompany.style.display = 'none';
        novaPocta.style.display = 'none';
        ukrPochta.style.display = 'block';
        requisites.style.display = 'none';
        buttonOrderConfirm.textContent = 'Заказ подтверждаю';
        infoPay.style.display = 'none';
        outputMethodPay.textContent = cashOnDeliveryUkrpochta;
        outputMethodDelivery.textContent = payBeforeDeliveryUkrpochta;
          
        if (departmentNovapochtaPopup.hasAttribute('required')) {    
            cityNovapochtaPopup.removeAttribute('required');
            departmentNovapochtaPopup.removeAttribute('required');
        }
        
        if (!streetUkrpochtaPopup.hasAttribute('required')) {
            streetUkrpochtaPopup.setAttribute('required', '');
            houseUkrpochtaPopup.setAttribute('required', '');
            cityUkrpochtaPopup.setAttribute('required', '');
            regionUkrpochtaPopup.setAttribute('required', '');
            indexUkrpochtaPopup.setAttribute('required', '');
        }

        return  
    } 

   if ( payMethod.value === privat && deliveryMethod.value === deliveryCompanyUkrpochta){
        deliveryСompany.style.display = 'block';
        ukrPochta.style.display = 'block';
        novaPocta.style.display = 'none';
        requisites.style.display = 'block';
        buttonOrderConfirm.textContent = 'Оплачено';
        infoPay.style.display = 'block';
        outputMethodPay.textContent = payPrivatBank;
        outputMethodDelivery.textContent = payBeforeDeliveryUkrpochta;

        if (departmentNovapochtaPopup.hasAttribute('required')) {    
            cityNovapochtaPopup.removeAttribute('required');
            departmentNovapochtaPopup.removeAttribute('required');
        }

        if (!streetUkrpochtaPopup.hasAttribute('required')) {
            streetUkrpochtaPopup.setAttribute('required', '');
            houseUkrpochtaPopup.setAttribute('required', '');
            cityUkrpochtaPopup.setAttribute('required', '');
            regionUkrpochtaPopup.setAttribute('required', '');
            indexUkrpochtaPopup.setAttribute('required', '');
        }
        return   
    }

    if ( payMethod.value === privat && deliveryMethod.value === deliveryCompanyNovapocta){
        deliveryСompany.style.display = 'block';
        ukrPochta.style.display = 'none';
        novaPocta.style.display = 'block';
        requisites.style.display = 'block';
        buttonOrderConfirm.textContent = 'Оплачено';
        infoPay.style.display = 'block';
        outputMethodPay.textContent = payPrivatBank;
        outputMethodDelivery.textContent = payBeforeDeliveryNovapochta;

        if (!departmentNovapochtaPopup.hasAttribute('required','')) {    
            cityNovapochtaPopup.setAttribute('required','');
            departmentNovapochtaPopup.setAttribute('required','');
        }

        if (streetUkrpochtaPopup.hasAttribute('required')) {
            streetUkrpochtaPopup.removeAttribute('required');
            houseUkrpochtaPopup.removeAttribute('required');
            cityUkrpochtaPopup.removeAttribute('required');
            regionUkrpochtaPopup.removeAttribute('required');
            indexUkrpochtaPopup.removeAttribute('required');
        }
        return   
    }
}

const onPopup = function(event){
    event.preventDefault();
    popup.classList.add('js-purchase');
    lockScroll.classList.add('js-lock-scroll');
    if ( !scrollToTopBtn.classList.contains('hidden')) {
        scrollToTopBtn.classList.add('hidden');
    }
    
   
}

const offPopup = function(){
    popup.classList.remove('js-purchase');
    lockScroll.classList.remove('js-lock-scroll');
    scrollToTopBtn.classList.remove('hidden');
}

/*const onSuccessfulOrderPopup = function(){
    popup.classList.remove('js-purchase');
    confirm.classList.add('js-confirmed-purchase');
    lockScroll.classList.add('js-lock-scroll'); 
}*/

const offSuccessfulOrderPopup = function(){
    popup.classList.remove('js-purchase');
    confirm.classList.remove('js-confirmed-purchase');
    lockScroll.classList.remove('js-lock-scroll');
}

window.addEventListener('keydown', function (event) { //close popup pressed button "escape" 
    if (event.key === 'Escape') {
        if (popup.classList.contains('js-purchase') || confirm.classList.contains('js-confirmed-purchase')) {
            popup.classList.remove('js-purchase');
            confirm.classList.remove('js-confirmed-purchase');
            lockScroll.classList.remove('js-lock-scroll');
        }
    }
})

function copy(){
    const copyText = document.querySelector('#copy-text');
    navigator.clipboard.writeText(copyText.textContent);
}

payMethod.addEventListener('change', defaultForm);
payMethod.addEventListener('change', choiceOfPaymentMethod);
deliveryMethod.addEventListener('change', choiceOfPaymentMethod);
buttonPay.addEventListener('click', onPopup);
buttonClosePopup.addEventListener('click', offPopup);
buttonCloseSuccessfulOrderPopup.addEventListener('click', offSuccessfulOrderPopup);
buttonAddQuantity.addEventListener('click', quantityAdd);
buttonSubstractQuantity.addEventListener('click', quantitySubstract);
quantityInput.addEventListener('change', quantityAdd);
quantityInput.addEventListener('change', quantitySubstract);
inputPhone.addEventListener('blur', AddClassInputPhone);  
flatUkrpochtaPopup.addEventListener('blur', AddClassInputFlat); 
copyButton.addEventListener('click', copy);




const inputTheme = document.querySelector('#theme');

if (inputTheme.value === '') {
    inputTheme.classList.remove('validate');
}

function AddClassInputTheme(){
     
    if (inputTheme.value !== '' && !inputTheme.classList.contains('validate')) {
        inputTheme.classList.add('validate');
    }else{
        inputTheme.classList.remove('validate');
    }
}

inputTheme.addEventListener('blur',  AddClassInputTheme);





const formQuestion = document.querySelector('#form-question');
const formComment = document.querySelector('#form-comments');
const textOut1 = document.querySelector('#text-out1'); 
const textOut2 = document.querySelector('#text-out2');
const text1 = 'Вы успешно оформили заказ';
const text2 = 'Спасибо за покупку, товар будет отправлен на указаный адрес.';
const text3 = 'Спасибо за покупку, товар будет отправлен на указаный адрес сразу после зачисления денежных средств.';
const text4 = 'Ваше сообщение успешно отправлено.';
const text5 = 'Ваш комментарий успешно отправлен и появится через некоторое время.'




async function sendFormQuestion(event){
    event.preventDefault();
    fetch('send_question.php', {
        method: 'POST',
        body: new FormData(formQuestion)
    });
    confirm.classList.add('js-confirmed-purchase');
    if ( !scrollToTopBtn.classList.contains('hidden')) {
        scrollToTopBtn.classList.add('hidden');
    }
    lockScroll.classList.add('js-lock-scroll');
    textOut1.style.display = 'none';
    textOut2.textContent = text4;
    formQuestion.reset();
   
}

async function sendFormComment(event){
    event.preventDefault();
    fetch('send_comments.php', {
        method: 'POST',
        body: new FormData(formComment)
    });
    confirm.classList.add('js-confirmed-purchase');
    if ( !scrollToTopBtn.classList.contains('hidden')) {
        scrollToTopBtn.classList.add('hidden');
    }
    lockScroll.classList.add('js-lock-scroll');
    textOut1.style.display = 'none';
    textOut2.textContent = text5;
    formComment.reset();
    
}

async function sendFormPopup(event){
    event.preventDefault();
    fetch('send_data_client.php', {
        method: 'POST',
        body: new FormData(formPopup)
    });
    confirm.classList.add('js-confirmed-purchase');
    if ( !scrollToTopBtn.classList.contains('hidden')) {
        scrollToTopBtn.classList.add('hidden');
    }
    textOut1.style.display = 'block';
    textOut1.textContent = text1;
    lockScroll.classList.add('js-lock-scroll');
    if ( payMethod.value === novapochta || payMethod.value === ukrpochta){
        textOut2.textContent = text2;
    }
    if ( payMethod.value === privat){
        textOut2.textContent = text3;
    }
    formPopup.reset();
}

formQuestion.addEventListener('submit', sendFormQuestion);
formComment.addEventListener('submit', sendFormComment);
formPopup.addEventListener('submit', sendFormPopup);
//formPopup.addEventListener('submit', choiceOfPaymentMethod);
formPopup.addEventListener('submit', defaultForm);








const body = document.querySelector('body');

function showButton(){
  if (window.pageYOffset > body.clientWidth) { //если значение прокрутки больше чем высота экрана то удаляем класс hidden в которм в css установлено display="none"
    scrollToTopBtn.classList.remove('hidden');
  }else if(window.pageYOffset < body.clientWidth && !scrollToTopBtn.classList.contains('hidden')){ //если значение прокрутки меньше чем высота экрана и отсутствует класс hidden то добавляем класс hidden в которм в css установлено display="none"
    scrollToTopBtn.classList.add('hidden');
  }
}

function scrollToTop(){
  window.scrollTo(0, 0);
}

window.addEventListener('scroll',showButton);
scrollToTopBtn.addEventListener('click',scrollToTop); 











