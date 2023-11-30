var input = document.querySelector("#text");

function maiusc(){
    var texto = input.value;
    input.value = texto.toUpperCase()
}

function minusc(){
    var texto = input.value;
    input.value = texto.toLowerCase()
}