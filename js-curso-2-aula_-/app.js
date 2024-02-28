let listaDeNúmerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );

}

function exibirMensagem(){
exibirTexto('h1' , 'Jogo do número secreto');

exibirTexto('p' , 'Escolha um número entre 1 e 10');
}
 exibirMensagem()

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTexto( 'h1' , 'Parabéns, você acertou o número secreto!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTexto('p' , mensagemTentativas );
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else { 
         if(chute > numeroSecreto){
            exibirTexto( 'p' , `o número secreto é menor que ${chute}`);
        } else { 
            exibirTexto( 'p' , `o número secreto é maior que ${chute}`);    
        }
        tentativas++
        limparCampo()    
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()*numeroLimite+1);
    let quantidadeDeElementosNaLista = listaDeNúmerosSorteados.length

    if(quantidadeDeElementosNaLista == numeroLimite ){
        listaDeNúmerosSorteados=[];
    }
    if (listaDeNúmerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
    } else {
        listaDeNúmerosSorteados.push(numeroEscolhido);
        console.log(listaDeNúmerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value= '';
}

function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio()
  limparCampo()
  tentativas=1
  exibirMensagem()
  document.getElementById('reiniciar').setAttribute('diseable', true)
}