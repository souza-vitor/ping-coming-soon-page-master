const inputEmail = document.querySelector('.form__input');
const btn = document.querySelector('button');


btn.addEventListener('click', (e) => {
    e.preventDefault();
    emailValidation();
});

function emailValidation() {
    const email = inputEmail.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const content = document.querySelector('.content');
    const message = 'Please provide a valid email address';
    
    if (emailRegex.test(email)) {
        inputEmail.value = '';
        inputEmail.classList.remove('invalid');
        content.removeChild(content.lastChild);
        content.innerHTML += `<p class="valid-text">Thank you! Your email address ${email} has been added to our mailing list!</p>`;
    } else {
        inputEmail.classList.add('invalid');
        content.innerHTML += `<p class="invalid-text">${message}</p>`;
    }
}