const campo = document.querySelector('#campoDeTexto');
const ul = document.getElementById('lista');

campo.addEventListener('keyup',(e) => {    
    if(e.key === 'Enter'){
        let newLi = document.createElement('li');
        newLi.innerText = campo.value;
        ul.appendChild(newLi);
        campo.value = '';
        console.log('ENTER')
    }
});

