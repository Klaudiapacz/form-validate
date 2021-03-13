console.log('Warsztat- walidacja zapisu do formularza ');


let newsletterForm = document.getElementById('newsletter-form');
let allAgreeChx = document.getElementById('all-agree');

const validate = (event) => {

    event.preventDefault();

    console.log(`validate()`);
}

const allAgree = () => {
    console.log('allAgree()');
}


newsletterForm.addEventListener('submit', validate);
allAgreeChx.addEventListener('change', allAgree);
