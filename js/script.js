async function buscaEndereco(cep){ //async codigos assincrono, definindo 
    try{ //tente requisitar
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`) //fetch é a requisição, só pode usar await se tiver async definido
        var consultaCEPConvertida = await consultaCEP.json() //espera (await) a conversão (json) ser retornada
        if (consultaCEPConvertida.erro){ //erro tratado conforme documentação da API
            throw Error('CEP não existente');
        }
         console.log(consultaCEPConvertida);
         console.log(consultaCEPConvertida.bairro)
         return consultaCEPConvertida;
    }
    catch(erro) { //erro padrao da API sem tratamento, se nao conseguiu requisitar
            console.log(erro)
        }
}




