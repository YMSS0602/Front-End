function gerarTabuada() {
const num= document.getElementById('numero').value;
const resultado = document.getElementById('resultado');
resultado.innerHTML = '' ;

if(num==='') {
resultado.innerHTML = '<p>Digite um número válido !</p>';
return;
}

for(let i=1; i <= 10; i++) {
  resultado.innerHTML +=  `${num} x ${i} = ${num * i} <br>`;
 }
}