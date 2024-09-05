/*Podemos pedir para o usuario digitar o valor de parcelas e contador contar ate o valor do usuario e imprimir a quantidade de vezes de parcela */



const valorTotal = 1000


const parcelas = 6

let contador = 1
let contadorComJuros = 6

if(parcelas <= 5){
    
  while(contador <= 2){
    let valorParcela= valorTotal / parcelas
    console.log(`O valor de parcelas do seu produto é ${valorParcela.toFixed(2).replace('.',',')}`)
    contador++
  }
  
}else if (parcelas > 5 && parcelas <= 10){
  
  while(contadorComJuros <= 7){
    
    let valorComJuros = (valorTotal / parcelas) * 1.10
    console.log(` Valores acima de 5 parcelas acréscimo de 10% ${valorComJuros.toFixed(2)}`)
    contadorComJuros++
  }
  
}else{
  console.log('Numero de parcelas invalida.')
}