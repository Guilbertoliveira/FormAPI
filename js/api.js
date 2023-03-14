
function atualizaDados (obj) {
    bairro.value = obj.bairro;
    endereco.value = obj.logradouro;
    cidade.value = obj.localidade;
    estado.value = obj.uf;
    complemento.value = obj.complemento;
}

function limpaCampos () {
    bairro.value = "";
    endereco.value = "";
    cidade.value = "";
    estado.value = "";
    complemento.value = "";
}


async function buscaEndereco(cep){ //async codigos assincrono, definindo 
    try{ //tente requisitar
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`) //fetch é a requisição, só pode usar await se tiver async definido
        var consultaCEPConvertida = await consultaCEP.json() //espera (await) a conversão (json) ser retornada
        if (consultaCEPConvertida.erro){ //erro tratado conforme documentação da API
   
            throw Error('CEP não encontrado');

        }
 
        errocep.classList.remove('erro__cep');
        errocep.textContent = '';

        atualizaDados(consultaCEPConvertida);
         console.log(consultaCEPConvertida);
         console.log(consultaCEPConvertida.bairro)
         return consultaCEPConvertida;
    }
    catch(erro) { //erro padrao da API sem tratamento, se nao conseguiu requisitar
        errocep.textContent = 'Cep não encontrado';
        errocep.classList.add('erro__cep');
        limpaCampos();
        console.log('cep nao existente')

        }
}





