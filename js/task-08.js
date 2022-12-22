const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value
    const password = event.currentTarget.elements.password.value

    if (!email || !password) {
        return alert('Please, fill in all fields!')
    }

    const formData = {
        email,
        password,
    }

    console.log(formData);
    form.reset();
}
