let quantidadeRodadas = 0;
let numeroJogadores = 0;
let listaJogadores = [];
let jogarNovamente = 0;

console.log("---------------------Jogo de Dados--------------------------\n")
quantidadeRodadas = prompt("Olá, vamos começar! Quantas rodadas você quer jogar? ");

numeroJogadores = prompt("Quantos jogadores vão participar?");

for(var contadorJogador = 1; contadorJogador <= numeroJogadores; contadorJogador++){
  var objetoJogadores = new Object ();
  objetoJogadores.nome = prompt("Digite o nome do jogador numero " + contadorJogador + ":"); 
  objetoJogadores.numeroDado = 0;
  objetoJogadores.rodadasGanhas = 0; 

  listaJogadores.push(objetoJogadores);
}

for (var contador = 1; contador <= quantidadeRodadas; contador++){
  console.log('Rodada ' + contador);

  for (var contadorJogador = 0; contadorJogador < listaJogadores.length; contadorJogador++){
    prompt("O jogador " + listaJogadores[contadorJogador].nome + " deve apertar enter para jogar o dado");

    var resuldadoDado = Math.floor(Math.random() * (6 - 1)) + 1;

    listaJogadores[contadorJogador].numeroDado = resuldadoDado;
    console.log(listaJogadores[contadorJogador].nome + " tirou " + resuldadoDado);
  }
  
  listaJogadores.sort(function (x,y){
    return x.numeroDado - y.numeroDado
  }).reverse();

  listaJogadores[0].rodadasGanhas++;
  console.log(listaJogadores[0].nome + " ganhou a rodada " + contador);
}

listaJogadores.sort(function (x,y){
  return x.rodadasGanhas - y.rodadasGanhas
}).reverse();

console.log(listaJogadores[0].nome + " ganhou " + listaJogadores[0].rodadasGanhas + " rodadas e foi o grande campeão");