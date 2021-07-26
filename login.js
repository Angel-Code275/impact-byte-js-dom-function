const username = document.getElementById('username');
const password = document.getElementById('password');
const submit = document.getElementById('login');

const submitForm = () => {
    let user = username.value;
    let pass = password.value;
    alert(`
        Username: ${user}
        Password: ${pass}
    `);
}

submit.addEventListener('click', submitForm)