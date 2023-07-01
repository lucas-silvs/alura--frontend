document.querySelector('.tecla_pom').onclick = tocarSomPom;

document.querySelector('.tecla_clap').onclick = tocarSomClap;


function tocarSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

function tocarSomClap() {
    document.querySelector('#som_tecla_clap').play();
}