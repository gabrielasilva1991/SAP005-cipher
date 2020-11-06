import cipher from './cipher.js';



document.getElementById("Criptografar").addEventListener ("click", criptografarMensagem);

function criptografarMensagem () {
    
    let mensagemDigitada = String(document.getElementById ("mensagemDigitada").value).toUpperCase(); 
    
    let numDeslocamento = Number(document.getElementById("numDeslocamento").value); 
      
    let criptografar = cipher.encode(mensagemDigitada, numDeslocamento); 

    document.getElementById("mensagemRetornada").value = criptografar

}



document.getElementById("Descriptografar").addEventListener ("click", descriptografarMensagem);

function descriptografarMensagem () {

    let mensagemDigitada = String(document.getElementById ("mensagemDigitada").value).toUpperCase(); 
    
    let numDeslocamento = Number(document.getElementById("numDeslocamento").value); 
    
    let descriptografar = cipher.decode(mensagemDigitada, numDeslocamento); 

    document.getElementById("mensagemRetornada").value = descriptografar

}



// document.getElementById("Criptografar").addEventListener ("click", function(event) {
//     event.preventDefault()
//     criptografar();

// const btnCriptografar //mensagem retornada criptografada
// let mensagemDigitada //mensagem digitada deve retornar em forma de texto com as letras maiusculas
// let numDeslocamento //numero do deslocamento para ser escolhido no formato de número
// let criptografar //criptografar mensagem e disponibilizar para o html
