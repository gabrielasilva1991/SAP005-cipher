const cipher = 

function criptografarMensagem (mensagem, deslocamento) {
  let mensagemDigitada = []
  let numDeslocamento;

  for (let i = 0; i < mensagem.length; i++) {
    numDeslocamento = mensagem.charCodeAt([i]);
  }

}
  return encodeURIComponent("mensagemCifrada")

function descriptografarMensagem (mensagem, deslocamento) {
  for (let i = 0; i < mensagem.length; i++) {
    numDeslocamento = mensagem.charCodeAt([i]);
  }


}
return decodeURIComponent("mensagemDecifrada")



export default cipher;


// let codigoDaLetraASC = 65
// let cod1aLetra = -65
// let desloc = [4]
// let Alfabeto = [26]

// function (decrypt)
// return string.fromCharCode();



// ((codigoDaLetraASC - cod1aLetra + desloc) % tamDoAlfabeto) + cod1aLetra
//     65 a 90             -65          4             26          65
// codigoAsc ==>     codigo0a25 ==> deslocamento ==> giro ==> codigoASC

// ((codigoDaLetraASC - cod1aLetra - desloc) % tamDoAlfabeto) + cod1aLetra