const form = document.querySelector('#notifyForm')
const errorMessage = document.querySelector('.error-message')
const emailField = document.querySelector('#email')
//  this function validates if email is correct format and outputs feedback into DOM
function validateEmail() {
    // if emailField is not empty
    if(emailField.value.length > 0) {
        // using regular expression to check email format
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //  valid email
        if (emailField.value.match(re)){
            console.log(emailField.value);
            errorMessage.style.color = 'var(--very-dark-blue)';
            errorMessage.textContent = 'We will email you with more news before launch!'
        // email did not pass check format 
        } else {
            errorMessage.style.color = 'var(--light-red)';
            errorMessage.textContent = `Please provide a valid email address`

            
        }
    // if email field is empty throw error message
    } else {
        errorMessage.style.color = 'var(--light-red)';
        errorMessage.textContent = `Email field can't be empty`
    }
    // show error message no matter if input is correct or not
    errorMessage.classList.remove('hidden')
}

const isEmailValid = (emailValid) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailValid);
};

form.addEventListener('click', (e) => {
    e.preventDefault();
    validateEmail();
})