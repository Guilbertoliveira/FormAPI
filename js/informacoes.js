let campoCEP = document.getElementById('cep'); 
let endereco;
let bairro = document.getElementById('bairro');
let cidade;
let estado;

campoCEP.addEventListener('blur', () => {
    buscaEndereco(campoCEP.value);
})

