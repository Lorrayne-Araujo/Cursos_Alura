//Guardando todas as teclas que tem no instrumento
const ListaDeTeclas = document.querySelectorAll('.tecla')

/*Selecionando o som das teclas e verificando se 
elemento ou seletor esta correto e dando resultado*/ 
function TocaSom(seletorAudio) {
  const elemento =  document.querySelector(seletorAudio);

  if (elemento != null && elemento.localName === 'audio') {
    elemento.play()
  }
  else {
    console.log('Elemento não encontrado ou seletor inválido')
  }
  
}

//Verificando qual tecla é e qual som deve tocar
for (let index = 0; index < ListaDeTeclas.length; index++) {
    const tecla = ListaDeTeclas[index];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    tecla.onclick =  function () {
        TocaSom(idAudio)
    };
    //Selecionando qual tecla do teclado deve ser apertada para que saia o som
    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }   
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}