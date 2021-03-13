console.log('Warsztat- walidacja zapisu do formularza ');


let newsletterForm = document.getElementById('newsletter-form');
let allAgreeChx = document.getElementById('all-agree');

const validate = (event) => {

    let txtName = document.getElementById('name');
    let txtEamil = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');
    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    if(txtName.value.trim() ===  '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imię i nazwsiko !';

        errors.appendChild(liError);
    }

    if(txtEamil.value.trim() ===  '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adres email!';

        errors.appendChild(liError);
    }

    if(!txtEamil.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adres email musi zawierać @!';

        errors.appendChild(liError);
    }

    if(!agree1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Nie wyraziłęs zgody 1!';

        errors.appendChild(liError);
    }

 
     if(!agree2.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Nie wyraziłęs zgody 2!';

        errors.appendChild(liError);
    }


    if (errors.children.length > 0) { 
        event.preventDefault();
    }


}

const allAgree = (event) => {
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
}


newsletterForm.addEventListener('submit', validate);
allAgreeChx.addEventListener('change', allAgree);
