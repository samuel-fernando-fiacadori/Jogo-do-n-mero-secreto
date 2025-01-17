let listaDeNumerosSorteados = [];
let numeroLmite = 10
let numero_secreto = gerar_numero_aleatorio();
let tentativas = 1;


function exibir_texto_na_tela(tag, texto) {
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
   if ('speechSynthesis' in window) {
    let utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR'; 
    utterance.rate = 1.2; 
    window.speechSynthesis.speak(utterance); 
} else {
    console.log("Web Speech API não suportada neste navegador.");
}
}

function exibir_mensagem_inicial() {
    
let mensagem_de_paragrafo = `escolha um numero de 1 a ${numeroLmite}`;
exibir_texto_na_tela("h1", "jogo do número secreto");
exibir_texto_na_tela("p", mensagem_de_paragrafo);



}

exibir_mensagem_inicial();


function verificarChute() {
    let chute = document.querySelector("input").value;

    
    if (chute == numero_secreto) {

        let palavra_tentativa = tentativas == 1 ? "tentativa" : "tentativas";

     document.getElementById("reiniciar").removeAttribute("disabled");
      


       let mensagem  = `você descobriu o numero secreto com ${tentativas} ${palavra_tentativa}`;
        exibir_texto_na_tela("h1", "parabéns!");
        exibir_texto_na_tela("p", mensagem);
        
     

    } else {

        let palavra_maior_ou_menor = chute > numero_secreto ? "maior" : "menor";
        exibir_texto_na_tela("h1","continue tentando");
        exibir_texto_na_tela("p", `o numero ${chute} é ${palavra_maior_ou_menor} que o numero secreto :c`);
        tentativas = tentativas + 1;
        limparCampo();
    }
}
function gerar_numero_aleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLmite + 1);

    let quantidadeDeElementosdaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosdaLista == numeroLmite) {
       listaDeNumerosSorteados = [];
    } 

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerar_numero_aleatorio();
    } else {
        console.log(listaDeNumerosSorteados)
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    campo = document.querySelector("input");
    campo.value = "";
}

function reiniciarJogo() {
   limparCampo()
   tentativas = 1
   exibir_mensagem_inicial()
   numero_secreto = gerar_numero_aleatorio()
  
   document.getElementById("reiniciar").setAttribute("disabled", false)

}