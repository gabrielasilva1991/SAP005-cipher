const cipher = {

  encode: function (numDeslocamento, mensagemDigitada) {
    
    if (!mensagemDigitada || !numDeslocamento) {
      throw new TypeError("Inserir a mensagem e a chave");

    } else {
      let mensagemRetornada = "";
      let tamAlfabeto = 26;
      let codigoAscii = 65;

      for (let i = 0; i < mensagemDigitada.length; i++) {
        let posicaoInicialMensagem = mensagemDigitada.charCodeAt(i);
        let posicaoFinalMensagem = ((posicaoInicialMensagem + codigoAscii + numDeslocamento) % tamAlfabeto) + codigoAscii;
        let mensagemFinal = String.fromCharCode(posicaoFinalMensagem);
  
        mensagemRetornada += mensagemFinal
      }
      return mensagemRetornada;

    }
  },

  decode: function (numDeslocamento, mensagemDigitada) {

    if (!mensagemDigitada || !numDeslocamento) {
      throw new TypeError("Inserir a mensagem e a chave");

    } else {
      let mensagemRetornada = "";
      let tamAlfabeto = 26;
      let codigoAscii = 65;

      for (let i = 0; i < mensagemDigitada.length; i++) {
        let posicaoInicialMensagem = mensagemDigitada.charCodeAt(i);
        let posicaoFinalMensagem = ((posicaoInicialMensagem + codigoAscii - numDeslocamento) % tamAlfabeto) + codigoAscii;
        let mensagemFinal = String.fromCharCode(posicaoFinalMensagem);
  
        mensagemRetornada += mensagemFinal
  
      }
      return mensagemRetornada;

    }

  }
 
};

export default cipher;


//se não digitar mensagem OU deslocamento o codigo não executa ==> if (!mensagemDigitada || !numDeslocamento)

//charCodeAt[i] ==> pega a posição de cada caractere da mensagem em forma de número

//String.fromCharcode ==> retorna a mensagem em forma de texto


//condição inicial // passar pela letra // repete para cada letra
//for (let i = 0; i < mensagemDigitada.length; i++) {}

// ((codigoDaLetraASC - cod1aLetra + desloc) % tamDoAlfabeto) + cod1aLetra
//     65 a 90             -65                        26          65
// codigoAsc ==>     codigo0a25 ==> deslocamento ==> giro ==> codigoASC



  // encode: function (mensagemDigitada, numDeslocamento) {
  //   let mensagemRetornada = "";
  //   let tamAlfabeto = 26;
  //   let codigoAscii = 65;

  //   for (let i = 0; i < mensagemDigitada.length; i++) {
  //     let posicaoInicialMensagem = Number(mensagemDigitada.charCodeAt(i));
  //     let posicaoFinalMensagem = ((posicaoInicialMensagem - codigoAscii + numDeslocamento) % tamAlfabeto) + codigoAscii;
  //     let mensagemFinal = String.fromCharCode(posicaoFinalMensagem);
  
  //     mensagemRetornada += mensagemFinal

  //   }
  //   return mensagemRetornada

  // },

  // decode: function (mensagemDigitada, numDeslocamento) {
  //   let mensagemRetornada = "";
  //   let tamAlfabeto = 26;
  //   let codigoAscii = 65;

  //   for (let i = 0; i < mensagemDigitada.length; i++) {
  //     let posicaoInicialMensagem = Number(mensagemDigitada.charCodeAt(i));
  //     let posicaoFinalMensagem = ((posicaoInicialMensagem + codigoAscii - numDeslocamento) % tamAlfabeto) + codigoAscii;
  //     let mensagemFinal = String.fromCharCode(posicaoFinalMensagem);
  
  //     mensagemRetornada += mensagemFinal
  
  //   }
  //   return mensagemRetornada

  // }
