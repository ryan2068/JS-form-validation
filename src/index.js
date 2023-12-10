const emailInput = document.querySelector('#email')
const countryInput = document.querySelector('#country')
const zipCodeInput = document.querySelector('#zip-code')
const passwordInput = document.querySelector('#password')
const passwordConfirmationInput = document.querySelector('#password-confirmation')
// spans for errors
const emailSpan = document.querySelector('.email-span')
const countrySpan = document.querySelector('.country-span')
const zipCodeSpan = document.querySelector('.zip-code-span')
const passwordSpan = document.querySelector('.password-span')
const passwordConfirmationSpan = document.querySelector('.password-confirmation-span')

// function to add error class to entered span
const emptyString = (span) => {
    span.textContent = 'Please enter in the correct format'
    span.className = "error"
}

emailInput.addEventListener('input', () => {
    if (emailInput.validity.valid ) {
        emailSpan.textContent = ""
    }
    else {
        emptyString(emailSpan)
    }
})

countryInput.addEventListener('input', () => {
    if (countryInput.validity.valid ) {
        countrySpan.textContent = ""
    }
    else {
        emptyString(countrySpan)
    }
})

zipCodeInput.addEventListener('input', () => {
    if (zipCodeInput.validity.valid ) {
        zipCodeSpan.textContent = ""
    }
    else {
        emptyString(zipCodeSpan)
    }
})

passwordInput.addEventListener('input', () => {
    if (passwordInput.validity.valid ) {
        passwordSpan.textContent = ""
    }
    else {
        emptyString(passwordSpan)
    }
})

passwordConfirmationInput.addEventListener('input', () => {
    if (passwordConfirmationInput.validity.valid ) {
        passwordConfirmationSpan.textContent = ""
    }
    else {
        emptyString(passwordConfirmationSpan)
    }
})