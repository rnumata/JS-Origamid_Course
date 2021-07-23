export default function initFuncionamento() {
  /**
   * !!! Importante:
   *  const funcionamento => <li data-semana="1,2,3,4,5" data-horario="8,18">Seg à Sex 8 às 18</li>
   *  funcionamento.dataset.semana => 1,2,3,4,5
   *  funcionamento.dataset.semana.split(',') => ["1","2","3","4","5"]
   *  funcionamento.dataset.semana.split(',').map(Number) => [1,2,3,4,5]
   */
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horaAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horaAberto =
    horaAgora >= horarioSemana[0] && horaAgora < horarioSemana[1];

  if (semanaAberto && horaAberto) {
    funcionamento.classList.add("ativo");
  }
}
