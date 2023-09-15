const botoes = document.querySelectorAll('.btn');

function filtrarLivros(event){
    let categoria = event.target.value
    let livrosFiltrados = livros.filter((livro) => {
        if(categoria){
            if(categoria == 'disponivel'){
                return livro.quantidade > 0;
            }else{
                return livro.categoria == categoria;
            }
        }
    })
    exibirLivros(livrosFiltrados);

    if(categoria == 'disponivel'){
        const valorTotal = calcularSomaLivrosDisponiveis(livrosFiltrados);
        exibirValorSomaDisponiveis(valorTotal);
    }

}

botoes.forEach(btn => {
    btn.addEventListener('click', event => filtrarLivros(event))
})

function exibirValorSomaDisponiveis(valor){
    elementoValorTotalDosLivrosDisponveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
        </div>
    `
}
