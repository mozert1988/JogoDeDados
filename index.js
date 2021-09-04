let quantidadeRodadas = 0;
let numeroJogadores = 0;
let listaJogadores = [];

console.log("---------------------Jogo de Dados--------------------------\n")
quantidadeRodadas = prompt("Olá, vamos começar! Quantas rodadas você quer jogar? ");

numeroJogadores = prompt("Quantos jogadores vão participar?");

// Criação de objetos dos jogadores
for(var contadorJogador = 1; contadorJogador <= numeroJogadores; contadorJogador++){
  var objetoJogadores = new Object ();
  objetoJogadores.nome = prompt("Digite o nome do jogador numero " + contadorJogador + ":"); 
  objetoJogadores.numeroDado = 0;
  objetoJogadores.rodadasGanhas = 0; 
  
  // Adicionando cada objeto na lista
  listaJogadores.push(objetoJogadores);
}

//Iterando a quandidade de jogadas definidas no inicio
for (var contador = 1; contador <= quantidadeRodadas; contador++){
  console.log('Rodada ' + contador);

  for (var contadorJogador = 0; contadorJogador < listaJogadores.length; contadorJogador++){
    prompt("O jogador " + listaJogadores[contadorJogador].nome + " deve apertar enter para jogar o dado");

    listaJogadores[contadorJogador].numeroDado =  Math.floor(Math.random() * (6 - 1)) + 1;
    
    console.log(listaJogadores[contadorJogador].nome + " tirou " + listaJogadores[contadorJogador].numeroDado);
  }
  
  // Ordenandoa lista de jogadores por quem tirou o maior numero no dado
  listaJogadores.sort(function (x,y){
    return x.numeroDado - y.numeroDado
  }).reverse();

  listaJogadores[0].rodadasGanhas++;
  console.log(listaJogadores[0].nome + " ganhou a rodada " + contador);
}

//Ordenando a lista de jogadores por quem ganhou mais rodadas. 
listaJogadores.sort(function (x,y){
  return x.rodadasGanhas - y.rodadasGanhas
}).reverse();

//Apresentando o resultado final de quem foi o ganhador. 
console.log(listaJogadores[0].nome + " ganhou " + listaJogadores[0].rodadasGanhas + " rodadas e foi o grande campeão");