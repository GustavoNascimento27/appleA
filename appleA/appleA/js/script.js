const imagemVisualizacao = document.getElementById('imagem-visualizacao')
const tituloproduto = document.getElementById('titulo-produto')


let imagemSelecionada = 1
let tamanhoSelecionado = 1
let corSelecionada = 1


const verdeCipreste = {
    nome: 'verde-cipreste',
    pasta: 'imagens-verde-cipreste'
}


const azulInverno = {
    nome: 'azul-inverno',
    pasta: 'imagens-azul-cipreste'
}


const meiaNoite = {
    nome: 'meia-noite',
    pasta: 'imagens-meia-noite'


}

const estelar = {
    nome:'estelar ',
    pasta:'imagens-estelar'
}

const rosaClaro ={
    nome:'rosa-claro',
    pasta:'imagens-rosa-claro'
}

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro]
const opcoesTamanho = ["41 mm","45 mm"]


function trocarImagem(){
    // pegando o id da opção selecionada
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id
    //função charAt() vai pegar o elemento do índice informado
    imagemSelecionada = idOpcaoSelecionada.charAt(0)
    imagemVisualizacao.src = `./imagens/opcoes-cores/imagens-azul-inverno/imagem-${imagemSelecionada}.jpeg`
}

function trocarTamanho(
){
    //atualizar variavel de controle do tamanho da caixa
    const idTamanhoSelecionado = document.querySelector('[name="opcao-tamanho"]:checked').id
    
    //função charAt() vai pegar o elemento do índice informado
    tamanhoSelecionado = idTamanhoSelecionado.charAt(0)
    
    //alterar o titulo do produto
    tituloproduto.innerText = `Pulseira loop esportiva azul-inverno para caixa de ${opcoesTamanho[tamanhoSelecionado]}`
    
    //Mudar o tamanho da imagem conforme opção selecionada
    if(opcoesTamanho[tamanhoSelecionado] === '41 mm'){
        imagemVisualizacao.classList.add('caixa-pequena')
    }
    else{
        imagemVisualizacao.classList.remove('caixa-pequena')
    }
}

function trocarCor(){
    //atualizar variável de controle que contém a cor selecionada
    const idCorSelecionada = document.querySelector('[name="opcao-cor"]:checked').id
    corSelecionada = idCorSelecionada.charAt(0)
  
    //trocar o título da página
    tituloproduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`

    //trocar o nome da cor
    //trocar a imagem das miniaturas
    //trocar a imagem da vizualização
}