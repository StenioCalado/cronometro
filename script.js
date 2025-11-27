/*
    setTimeout -> Executa uma vez
    setInterval -> Executa indefinidamente
        clearInterval -> Para o setInterval

*/

let cron;
let ms = 0;
let sec = 0;
let min = 0;

let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let miliseconds = document.querySelector('.miliseconds');

function start() {
  if (!cron) {
    cron = setInterval(() => {
      ms += 10; // contando de 10 em 10ms para evitar sobrecarga

      if (ms >= 1000) {
        ms = 0;
        sec++;
      }

      if (sec >= 60) {
        sec = 0;
        min++;
      }

      // Atualiza o display
      minutes.innerHTML = `${min.toString().padStart(2, '0')}:`;
      seconds.innerHTML = `${sec.toString().padStart(2, '0')}:`;
      miliseconds.innerHTML = ms.toString().padStart(3, '0');
    }, 10); // executa a cada 10ms
  }
}

function stop() {
  clearInterval(cron);
  cron = null;
}

function reset() {
  stop();
  ms = 0;
  sec = 0;
  min = 0;
  minutes.innerHTML = '00:';
  seconds.innerHTML = '00:';
  miliseconds.innerHTML = '000';
}