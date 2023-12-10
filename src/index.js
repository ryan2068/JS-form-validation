const emailInput = document.querySelector('#email')
const countryInput = document.querySelector('#country')
const zipCodeInput = document.querySelector('#zip-code')
const passwordInput = document.querySelector('#password')
const passwordConfirmationInput = document.querySelector('#password-confirmation')
// spans for errors



emailInput.addEventListener('input', (e) => {
    if (emailInput.validity.valid ) {
        errorSpan1.textContent = ""
    }
    else {
        emptyString(errorSpan1)
    }

})

