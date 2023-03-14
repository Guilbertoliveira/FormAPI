const campoCEP = document.getElementById('cep'); 
const bairro = document.getElementById('bairro');
const endereco = document.getElementById('endereco');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');
const complemento = document.getElementById('complemento');
const errocep = document.getElementById('errocep');


campoCEP.addEventListener('blur', () => {
    buscaEndereco(campoCEP.value);
})

