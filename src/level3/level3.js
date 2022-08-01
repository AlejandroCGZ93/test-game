// No cambies los nombres de las funciones.

export function devolverPrimerElemento(array) {
  // Tu código:
 if(array){
  return array.shift();
 }
}


export function devolverUltimoElemento(array) {
  // Tu código:
 return array.pop()

}


export function obtenerLargoDelArray(array) {
  // Tu código:
 return array.length
}


export function incrementarPorUno(array) {
  // Tu código:

  
  
  return array.map(num => (num + 1))
}


export function agregarItemAlFinalDelArray(array, elemento) {
  // Tu código:
  
 array.push(elemento)
  return array
}


export function agregarItemAlComienzoDelArray(array, elemento) {
  /// Tu código:

  array.unshift(elemento)
 
  return array
}


export function dePalabrasAFrase(palabras) {
  // Tu código:
 
  let oracion = ""; 
   for (let i = 0; i < palabras.length; i++) {
      oracion += ' ' + palabras[i];
   }
   return oracion.trim();
}


export function arrayContiene(array, elemento) {
  // Tu código:
  return array.includes(elemento)
}


export function agregarNumeros(numeros) {
  // Tu código:
  
  let sum = 0

  for(let i = 0; i < numeros.length; i++){
    sum += numeros[i]
  }

  return sum
  
}


export function promedioResultadosTest(resultadosTest) {
  // Tu código:
 let i = 0, summ = 0, arrayLen = resultadosTest.length
 while(i < arrayLen){
  summ = summ + resultadosTest[i++]
 }
 return summ / arrayLen;
}


export function numeroMasGrande(numeros) {
 // Tu código:
 
 let numeroGrande = Math.max(...numeros)

 return numeroGrande
}


export function cuentoElementos(arreglo){
 // Tu código:
  let numerosMayores = arreglo.filter(value => value > 18)

  return numerosMayores.length


}


export function diaDeLaSemana(numeroDeDia) {
  // Tu código:
 if(numeroDeDia > 1 & numeroDeDia < 5){
  return "Es dia Laboral"
 }else{
  return "Es fin de semana"
 }

  
} 


export function empiezaConNueve(n) {
 // Tu código:
    
  if(n>=9){
    return true
  }else{
    return false
  }
}


// export function todosIguales(arreglo) {
//  // Tu código:


// } 


export function mesesDelAño(array) {  
  // Tu código:
 const newArray = ["Marzo", "Noviembre", "Enero"];
 let contains =  array.includes(newArray[0]) && array.includes(newArray[1]) && array.includes(newArray[2])

 return contains ? newArray : "No se encontraron los meses pedidos"
}


export function mayorACien(array) {
  // Tu código:


let mayorACien = array.filter(arreglo => arreglo > 100)

return mayorACien
}


// export function breakStatement(numero) {
//   // Tu código:

//   return;
// }


// export function continueStatement(numero) {
//   // Tu código:

//   return;
// }

