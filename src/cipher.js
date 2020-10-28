const cipher = function encrypt (mensagem, deslocamento) {
  let codigoDaLetraASC = 65
  let cod1aLetra = -65
  let desloc = 4
  let tamDoAlfabeto = 26


  if (mensagem == ((codigoDaLetraASC - cod1aLetra + desloc) % tamDoAlfabeto) + cod1aLetra)
  return mensagem.fromCharCode();

}
 
   // ((codigoDaLetraASC - cod1aLetra + desloc) % tamDoAlfabeto) + cod1aLetra
   // return string.fromCharCode();



export default cipher;



 // function (decrypt) {
   // ((codigoDaLetraASC - cod1aLetra - desloc) % tamDoAlfabeto) + cod1aLetra
   // return string.fromCharCode();

//};







// ((codigoDaLetraASC - cod1aLetra + desloc) % tamDoAlfabeto) + cod1aLetra
//     65 a 90             -65          4             26          65
// codigoAsc ==>     codigo0a25 ==> deslocamento ==> giro ==> codigoASC

// ((codigoDaLetraASC - cod1aLetra - desloc) % tamDoAlfabeto) + cod1aLetra