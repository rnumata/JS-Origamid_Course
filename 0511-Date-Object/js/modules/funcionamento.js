export default function initFuncionamento() {
  
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);
  
  /**
   * !!! Importante: Resgatar valores do dataset, splitar o array e usar o map para retornar um array de numeros
   
   *  const funcionamento => <li data-semana="1,2,3,4,5" data-horario="8,18">Seg à Sex 8 às 18</li>
   *  funcionamento.dataset.semana => 1,2,3,4,5
   *  funcionamento.dataset.semana.split(',') => ["1","2","3","4","5"]
   *  funcionamento.dataset.semana.split(',').map(Number) => [1,2,3,4,5]
   */

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horaAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;//se o diaAgora nao estiver no []diasSemana,retorna -1(false) ou index(true 
  const horaAberto = horaAgora >= horarioSemana[0] && horaAgora < horarioSemana[1]; //false ou true

  if (semanaAberto && horaAberto) {
    funcionamento.classList.add("ativo");
  }
}



// Exercicios
const agora = new Date(); //Ex: Thu Aug 26 2021 19:31:02 GMT-0300 (Horário Padrão de Brasília)
const natal = new Date('Dec 25 2022 22:00:00 GMT-0300'); //Sat Dec 25 2021 22:00:00 GMT-0300 (Horário Padrão de Brasília)

//Calculo de Dias até o Natal
function converterMilisegundoEmdias(tempo){
  return tempo / (24 * 60 * 60 * 1000);
}
const diasAgora = converterMilisegundoEmdias(agora.getTime());
const diasNatal = converterMilisegundoEmdias(natal.getTime());

console.log('De hoje até o Natal são: ' + Math.floor(diasNatal - diasAgora) + ' dias');