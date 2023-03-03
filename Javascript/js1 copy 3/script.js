document.querySelector('.botao').addEventListener("click", () => {
    console.log("clicou");
});

function clicou() {
    const passwordInput = document.querySelector('.password');
    const showOrHiddenPassword = document.querySelector('.button');
    if(passwordInput.getAttribute('type')==='text') {
        passwordInput.setAttribute('type', 'password');
        showOrHiddenPassword.setAttribute('value', 'Mostrar senha');
    }else {
        passwordInput.setAttribute('type', 'text');
        showOrHiddenPassword.setAttribute('value', 'Ocultar senha');
    }
    
}


