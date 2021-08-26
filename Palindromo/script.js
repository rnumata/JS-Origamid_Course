const digitado = document.querySelector('input');
const resultado = document.querySelector('span');
var pares = 0;
var letrasInicio, letrasFinal;
function entrada(){
  if(digitado.value.length%2 == 0){
    for (let index = 0; index < (digitado.value.length)/2; index++) {
      letrasInicio = digitado.value[index];
      letrasFinal = digitado.value[((digitado.value.length - 1) - index)]; 
      if(letrasInicio === letrasFinal){
        ++pares
      } 
    }
    if(pares == digitado.value.length/2){
      resultado.innerText = 'Palindromo';
    } else {
      resultado.innerText = 'NAO Palindromo';
    }  
  } else {
    for (let index = 0; index < (digitado.value.length - 1)/2; index++) {
      letrasInicio = digitado.value[index];
      letrasFinal = digitado.value[((digitado.value.length - 1) - index)]; 
      if(letrasInicio === letrasFinal){
        ++pares
      } 
    }
    if(pares == ((digitado.value.length-1)/2)){
      resultado.innerText = 'Palindromo';
    } else {
      resultado.innerText = 'NAO Palindromo';
    }
  }
}

