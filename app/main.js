var livros = [];
const endpointAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getLivrosAPI();

const elementoLivros = document.getElementById('livros');

async function getLivrosAPI(){
    try{
        const resposta = await fetch(endpointAPI);
        livros = await resposta.json();
        const livrosComDesconto = aplicarDesconto(livros);
        exibirLivros(livrosComDesconto);
    }catch(erro){
        console.log(erro);
    }finally{
        console.log("Requisição finalizada");
    }
}
