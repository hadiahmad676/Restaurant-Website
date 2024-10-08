
/*Hamburger Start*/
const menu = document.getElementById('menu');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
    navLinks.classList.toggle("active")
})
/*Hamburger End*/

/*Slider Start*/
let scrollContainer = document.querySelector('.slider-main');
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
})

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
})

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
})
/*Slider End*/

/*Form Start*/
const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const number = document.getElementById('number');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const fullnameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();

    if(fullnameValue === '') {
        setError(fullname, 'Full Name is required');
    } else {
        setSuccess(fullname);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(numberValue === '') {
        setError(number, 'Phone Number is required');
    } else {
        setSuccess(number);
    }
};
/*Form End*/


/*Scroll Start*/
const scrollTop = document.getElementById('scrollTop');

scrollTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTop.style.display= 'block'
    }
    else {
        scrollTop.style.display= 'none'
    }
})
/*Scroll End*/
