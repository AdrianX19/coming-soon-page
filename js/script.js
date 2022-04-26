const submitBtn = document.querySelector('.notify-me')
const input = document.querySelector('input')
const errorMsg = document.querySelector('.error')

const emptyEmailMsg = 'Whoops! It looks like you forgot to add your email'
const invalidEmailMsg = 'Please provide a valid email address'

function removeError() {
    input.classList.remove('invalid')
    errorMsg.classList.remove('active')
    errorMsg.textContent = ''
}

function showError(errMsg) {
    input.classList.add('invalid')
    errorMsg.classList.add('active')
    errorMsg.textContent = errMsg
}

input.addEventListener('invalid', (indEvent) => {
    indEvent.preventDefault()
})

input.addEventListener('input', () => {
    if (input.checkValidity()) {
        removeError()
    }
})

submitBtn.addEventListener('click', (a) => {
    if (input.value.trim() == '') {
        a.preventDefault()
        showError(emptyEmailMsg)
    } else if (input.validity.typeMismatch) {
        a.preventDefault()
        showError(invalidEmailMsg)
    }
})