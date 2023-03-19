// mostrar uma msg com um tipo de entrada
function showMessage(input, message, type) {
    // referenciar a tag small e definir msg
    const msg = input.parentNode.querySelector("small");
    msg.innerText = message;
    // atualizar a class
    input.className = type ? "success" : "error";
    return type;
}

function showError(input, message) {
    return showMessage(input, message, false);
}

function showSuccess(input) {
    return showMessage(input, "", true);
}

function hasValue(input, message) {
    if (input.value.trim() === "") {
        return showError(input, message);
    }
    return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
    // checar se o input não está vazio
    if (!hasValue(input, requiredMsg)) {
        return false;
    }
    // validar formato do email
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const email = input.value.trim();
    if (!emailRegex.test(email)) {
        return showError(input, invalidMsg);
    }
    return true;
}

const form = document.querySelector("#signup");

const NAME_REQUIRED = "Digite seu nome";
const EMAIL_REQUIRED = "Digite seu e-mail";
const EMAIL_INVALID = "Digite endereço de e-mail carreto";
const PASSWORD_REQUIRED = 'Digite sua senha'

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // validar formulario
    let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
    let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
    let passwordValid = hasValue(form.elements["password"], PASSWORD_REQUIRED);
    // se estiver válido, enviar formulario.
    if (nameValid && emailValid) {
        console.log('Definir página')
    }
});

// botao visibilidade senha
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    // alternar tipo attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // alternar icone
    this.classList.toggle("bi-eye");
});

//button toggle mode
const input = document.querySelector('input');
const body = document.querySelector('body')

const toggleThemeMode = () => {
    body.classList.toggle('dark');
}

input.onchange = toggleThemeMode;
