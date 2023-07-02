function tocarSom( seletorSom ) {

    let idsom = `#som_${seletorSom}`

    const som = document.querySelector(idsom);

    if( som != null && som.localName == "audio") {
        som.play();
    }
    else {
        alert("Som não encontrado")
    }
}



const listaTeclas = document.querySelectorAll(".tecla");

for (i=0; i<listaTeclas.length; i++) {
    let tecla = listaTeclas[i]
    let idAudio = tecla.classList[1]
    tecla.onclick = function () {
        tocarSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        console.log(evento.code);
        if(evento.code == "Space" || evento.code == "Enter") {
        tecla.classList.add("ativa");
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove("ativa");
    }
}
