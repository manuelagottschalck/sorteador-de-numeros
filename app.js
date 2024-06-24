function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value); //parse int para forçar o numero de entrada como int
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById("ate").value);
    let numero;
    let sorteados = [];

  for(let i = 0; i < quantidade; i++){
    numero = obterNumerosAleatorios(de, ate);

    while (sorteados.includes(numero)){
        numero = obterNumerosAleatorios(de, ate);
    }

    sorteados.push(numero);
  }

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;

  alterarStatusBotao();
}

function obterNumerosAleatorios(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');//como a classe pode ter mais de um elemento, verificamos se a classe tem o que queremos.
    if (botao.classList.contains("container__botao-desabilitado")){
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    }else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById("ate").value = '';
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora </label>`;
    alterarStatusBotao();
}