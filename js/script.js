var consultaCEP = fetch('https://viacep.com.br/ws/01001250/json/') //fetch é a requisição
.then( resposta => resposta.json()) //realizando a conversão da promessa para json
.then(r=> {
    if(r.erro){ //tratando erro que não cai no 400, numero de cep coerente, porém invalido
       throw Error('Esse cep não existe');
    } else {
    console.log(r)}
    }) // pegando conversão e demonstrando na tela
.catch(erro => console.log(erro)); //criando erro para demonstrar na tela, (erro padrao), erro 400 bad request



console.log(consultaCEP)

