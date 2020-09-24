/*
 *  Script com a lógica do cronometro.
 *  Ele possui o esqueleto dos método essenciais.
 *  Modifique este arquivo o quanto for necessário.
 * 
 *  DICAS GERAIS:
 * 
 *  Você pode implementar a lógica de um cronômetro de duas formas.
 *  1. Armazenar os milisegundos, segundos, minutos e horas e incrementar
 *     cada uma destas unidades quando necessário. Lembre-se que se milisegundos
 *     exceder 999 você deve incrementar uma unidade em segundos e assim continua.
 *  2. Você pode armazenar somente os milisegundos e incrementá-lo quando necessário.
 *     Após isso, você consegue obter horas minutos e segundos usando simples fórmulas
 *     matemáticas.
 *  
 *  Depois de computar os valores de milisegundos, segundos, minutos e horas, 
 *  atualize o HTML chamando o método updateVisualization(). Para isso, 
 *  finalize a implementação simplesmente colocando os valores dentro dos elementos
 *  usando do atributo innerHTML dos elementos retornados.
 * 
 *  Essa atualização deve ser feita usando o método 'setInterval' a pelo menos 10ms.
 *  Esse método retorna uma referência tal que pode ser usada por 'clearInterval'
 *  para interromper a execução a qualquer momento.
 */

var temporizador = null;
var totalMilisegundos = 0;

// Função que adiciona zeros no inicio
function formataNumero(numero, casas) {
  return ('' + numero).padStart(casas, '0');
}


// Funcao para atualizar o display do cronometro no html.
// Dica: use do método 'setInterval' para executálo a cada 50 milissegundos.
function updateVisualization() {
  // As próximas linhas buscam pelos respectivos espacos de hora, minuto, segundo e milissegundos
  // Basta implementar a lógica e alterar o conteúdo (innerHTML) com os valores
  var hora = document.getElementsByClassName('hora')[0];
  var minuto = document.getElementsByClassName('minuto')[0];
  var segundo = document.getElementsByClassName('segundo')[0];
  var milissegundo = document.getElementsByClassName('milissegundo')[0];


  milissegundo.innerHTML = formataNumero(totalMilisegundos % 1000, 3);
  
  segundo.innerHTML = 
    formataNumero((Math.trunc(totalMilisegundos / 1000) % 60), 2);

  minuto.innerHTML = 
    formataNumero((Math.trunc(totalMilisegundos / (60 * 1000)) % 60), 2);

  hora.innerHTML = 
    formataNumero((Math.trunc(totalMilisegundos / (60 * 60 * 1000)) % 60), 2);

  // TODO (continuar implementacao se necessário) ...
}

// Funcao executada quando o botão 'Inicar' é clicado
// - se o cronometro estiver parado, iniciar contagem.
// - se estiver ativo, reiniciar a contagem
function start() {
  // TODO (implementar)
  
  if (temporizador === null) {
    temporizador = setInterval(function() {
      totalMilisegundos += 10;
      updateVisualization();
    }, 10);
  }
  
}

// Funcao executada quando o botão 'Parar' é clicado
// - se o cronometro estiver ativo, parar na contagem atual
function stop() {
  // TODO (implementar)
  clearInterval(temporizador);
  temporizador = null;
}

// Funcao executada quando o botão 'Reiniciar' é clicado
// - se o cronometro estiver ativo, reiniciar contagem
// - se estiver parado, zerar e permanecer zerado
function reiniciar() {
  // TODO (implementar)
      totalMilisegundos = 0;
      updateVisualization();
}
