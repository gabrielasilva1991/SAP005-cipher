import cipher from './cipher.js';


console.log(cipher);

let numDeslocamento = parseInt(document.getElementById("numDeslocamento").value) 
let mensagemDigitada = document.getElementById ("mensagemDigitada").value;
let criptografarMensagem = cipher.encodeURIComponent ("mensagemCifrada")
let mensagemRetornada = document.getElementById ("mensagemRetornada").value;
let descriptografarMensagem = cipher.decodeURIComponent ("mensagemDecidrada")



// Copiar mensagem de uma caixa de texto  texto para outra:
//document.getElementById("mensagemDigitada").value = document.getElementById("mensagemRetornada").value;

//Janela 1 : Digite aqui a mensagem que deseja enviar
//Janela 2: Mensagem retornando criptografada
