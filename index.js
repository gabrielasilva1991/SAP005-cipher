import cipher from './cipher.js';



document.getElementById("Criptografar").addEventListener ("click", encodeCipher);

function encodeCipher () {
    
    let mensagemDigitada = String(document.getElementById ("mensagemDigitada").value).toUpperCase(); 
    
    let numDeslocamento = Number(document.getElementById("numDeslocamento").value); 
      
    let criptografar = cipher.encode(numDeslocamento, mensagemDigitada); 

    document.getElementById("mensagemRetornada").value = criptografar

}



document.getElementById("Descriptografar").addEventListener ("click", decodeCipher);

function decodeCipher () {

    let mensagemDigitada = String(document.getElementById ("mensagemDigitada").value).toUpperCase(); 
    
    let numDeslocamento = Number(document.getElementById("numDeslocamento").value); 
    
    let descriptografar = cipher.decode(numDeslocamento, mensagemDigitada); 

    document.getElementById("mensagemRetornada").value = descriptografar

}



// document.getElementById("Criptografar").addEventListener ("click", function(event) {
//     event.preventDefault()
//     criptografar();

// const btnCriptografar //mensagem retornada criptografada
// let mensagemDigitada //mensagem digitada deve retornar em forma de texto com as letras maiusculas
// let numDeslocamento //numero do deslocamento para ser escolhido no formato de número
// let criptografar //criptografar mensagem e disponibilizar para o html
