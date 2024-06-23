function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value); //parse int para forçar o numero de entrada como int
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById("ate").value);

    let numero = obterNumerosAleatorios(de, ate);
    alert(numero);
}

function obterNumerosAleatorios(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}   