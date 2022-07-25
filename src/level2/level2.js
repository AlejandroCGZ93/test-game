// No cambies los nombres de las funciones.

export function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Tu código:
if(x>y){
    return x
}else if(x<y){
    return y
}else if(x === y){
    return x&y
}
}


export function mayoriaDeEdad(edad) {
  // Tu código:

  return edad >= 18 ? "Allowed" : "Not allowed"
}


  
export function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  // Tu código:
if(status === 1){
  return("Online")
}else if(status === 2){
  return("Away")
}else if(status === 3 ){
  return("Offline")
}else if(status === undefined){
return("Offline")}

}

export function saludo(idioma) {  
  // Tu código:
     
    switch (idioma) {
        case 'aleman':
            return 'Guten Tag!'
            break;
        case 'ingles':
            return 'Hello!'
            break;
        case 'mandarin':
            return 'Ni Hao!'
            break;
        default:
            return "Hola!"
        

    }
}

export function colors(color) {  
  //Usar el statement Switch.
  // Tu código:
switch(color){
  case "blue":
    return "This is blue"
    break;
  case "red":
    return "This is red"
    break;
  case "green":
    return "This is green"
    break;
  case "orange":
    return "This is orange"
    break;
  default:
    return "Color not found"
 
}
}

export function esDiezOCinco(num) {
  // Tu código:

  if (num === 10 || num === 5){
    return(true)
  }else{
    return(false)
  }



}

export function estaEnRango(numero) {  
  // Tu código:

   if (numero < 50 & numero > 20){
  return(true)
    }else{
  return(false)
}
}

export function esEntero(numero) {
  // Tu código:

  if (numero - Math.floor(numero) == 0){
    return(true)
  }else{
    return(false)

  }

}


export function fizzBuzz(numero) {
  // Tu código:
 
   if (numero % 3 === 0 && numero % 5 === 0) {
  return "fizzbuzz";
} else if (numero % 5 === 0) {
    return "buzz";
} else if (numero % 3 === 0) {
  return "fizz";
} else {
return numero;
}
}

// export function operadoresLogicos(num1, num2, num3) {
//   //La función recibe tres números distintos. 
//   // Tu código:

//   if(num1>num2||num1 > num3 || num1>0){
//     return 'Número 1 es mayor y positivo'
//   }else if(num1 < 0 || num2<0 || num3<0){
//     return 'Hay negativos'
//   }else if(num3 > num1 && num3 > num2){
//     num3+1
//     return num3
//   }else if(num1 === 0 || num2 === 0 || num3 === 0)  {
//     return "Error"

//   }else {
//     return false
//   }


// }

export function esPrimo(num) {
  /// Tu código:

  let divisores = 1; 
  let index = 1;
  while(divisores <= 2 && index <= num/2){ 
    if (num % index === 0) { 
      divisores++;
    }
    index ++;
  }
  return divisores == 2;
}

export function esVerdadero(valor){
  // Tu código:


if(valor === true){
  return("Soy verdadero")
}else if(valor === false){
  return("Soy falso") 
}

}

export function tablaDelSeis(){
  // Tu código:

  let tablaDelSeis = [0 , 6, 12, 18, 24, 30, 36, 42, 48, 54, 60]
  return tablaDelSeis

}

export function tieneTresDigitos(numero){
  // Tu código:
if( numero > 99 && numero < 1000){
  return true
}else{
  return false
}
}

// export function doWhile(numero){  
//   //Usar el bucle do ... while.
  
  
//   let numero = 5
 
//     do {
//       numero+=numero+5
//       numero++
        
//     }while(numero<8)

// }
