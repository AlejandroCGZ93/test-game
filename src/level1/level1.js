
// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

export function devolverString(str) {
  // Tu código:
  return str.toString() 
}

export function suma(x,y) {
 // Tu código:

  return x+y
}

export function resta(x,y) {
 // Tu código:

  return x-y
}

export function multiplica(x,y) {
  // Tu código:

  return x*y;
}

export function divide(x,y) { 
  // Tu código:

  return x/y;
}

export function sonIguales(x,y) {  
  // Tu código:

  return x === y;  
}

export function tienenMismaLongitud(str1, str2) {  
  // Tu código:

  return str1.length === str2.length;
}

export function menosQueNoventa(num) {  
  // Tu código:

  return num<90;
}

export function mayorQueCincuenta(num) {  
  // Tu código:

  return num>50;
}

export function obtenerResto(x, y) {  
  // Tu código:

  return x%y;
}

export function esPar(num) {
  // Tu código:

  if (num%2==0){
    return(true)
  }else {
    return(false)
  }
  
}




export function esImpar(num) {  
  // Tu código:
  if(num%2 == 1){
    return(true);
  }else{

    return(false);
  }
}


export function elevarAlCuadrado(num) {  
  // Tu código:

  return num**2
}

export function elevarAlCubo(num) { 
  // Tu código:

  return num**3
}

export function elevar(num, exponent) {  
  // Tu código:

  return num**exponent
}

export function redondearNumero(num) {  
  // Tu código:

  return Math.round(num)
}

export function redondearHaciaArriba(num) { 
  // Tu código:

  return Math.ceil(num)
}

export function numeroRandom() {  
  // Tu código:

  return Math.random()
}

export function esPositivo(numero) {
  // Tu código:
 if (Math.sign(numero) === 1) {
  return "Es positivo";
} if (Math.sign(numero) === -1) {
    return "Es negativo";
} else return false;
}





export function agregarSimboloExclamacion(str) {  
  // Tu código:

  return str+"!"
}

export function combinarNombres(firstName, lastName) {
  // Tu código:

  return firstName+" "+lastName
}

export function obtenerSaludo(name) {
  // Tu código:

  return "Hola"+" "+name+"!"
 }

export function obtenerAreaRectangulo(alto, ancho) {  
  // Tu código:

    let area = alto*ancho

  return area
}


export function retornarPerimetro(lado){
  // Tu código:

  let perimetro = lado*4

  return perimetro
}


export function areaDelTriangulo(base, altura){
  // Tu código:

  let area = (base*altura)/2;
  return area
}


export function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares.
  // Tu código:

  return euro * 1.20
}


export function esVocal(letra){
  // Tu código:

  const array = ["a","e","i","o","u"];

if(
  letra === "a" ||
  letra === "e" ||
  letra === "i" ||
  letra === "o" ||
  letra === "u" 
  ) {
  return "Es vocal"

}else{
  return "Dato incorrecto"
}
}
