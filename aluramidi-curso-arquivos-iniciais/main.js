function tocarSom( som ) {

    let idsom = `#som_${som}`

    document.querySelector(idsom).play()
}



const listaTeclas = document.querySelectorAll(".tecla");

for (i=0; i<listaTeclas.length; i++) {
    let tecla = listaTeclas[i]
    let idAudio = tecla.classList[1]
    tecla.onclick = function () {
        tocarSom(idAudio)
    }

    tecla.onKeydown = function () {
        tecla.classList.add("ativa")
    }
}
