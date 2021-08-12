const email = document.getElementById('email')
const password = document.getElementById('pwd')
const form = document.getElementById('myForm')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (email.value === '' || email.value == null) {
        messages.push('please enter your email')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')

    }
})