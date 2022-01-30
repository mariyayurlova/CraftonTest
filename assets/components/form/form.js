import './form.scss';
import $ from "jquery";

const inputs = document.getElementsByClassName("form__item-input");

for (let i = 0, len = inputs.length; i < len; i++) {
    inputs[i].addEventListener('focus', (event) => {
        let item = event.target;
        console.log(item);
        item.closest(".form__item").classList.add("focused");
    });

    inputs[i].addEventListener('blur', (event) => {
        let item = event.target;
        let value = item.value;

        if(value == ''){
            item.closest(".form__item").classList.remove("focused");
        }
    });
}

const form = document.getElementById('formMain');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const message = document.getElementById('message');

const ajaxForm = () => {
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $("#formMain").serialize()
    }).done(function() {
        $("#formMain").trigger("reset");
    });
    return false;
}

const setError = (element) => {
    const inputControl = element.parentElement;
    inputControl.classList.add('error');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameValue = name.value.trim();
    const surnameValue = surname.value.trim();
    const messageValue = message.value.trim();
    const emailValue = email.value.trim();

    let validName = false;
    let validSurname = false;
    let validMessage = false;
    let validEmail = false;

    if(nameValue === '') {
        setError(name);
        validName = false;
    } else {
        setSuccess(name);
        validName = true;
    }

    if(surnameValue === '') {
        setError(surname);
        validSurname = false;
    } else {
        setSuccess(surname);
        validSurname = true;
    }

    if(messageValue === '') {
        setError(message);
        validMessage = false;
    } else {
        setSuccess(message);
        validMessage = true;
    }

    if(emailValue === '') {
        setError(email);
        validEmail = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email);
        validEmail = false;
    } else {
        setSuccess(email);
        validEmail = true;
    }

    if(validName == true && validSurname == true && validMessage == true && validEmail == true){
        ajaxForm();
    }
};



form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();

});


