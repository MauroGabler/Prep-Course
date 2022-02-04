// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var primerElemento;
  primerElemento = array[0];
  return primerElemento;
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var ultimoElemento;
  ultimoElemento =  array[array.length-1];
  return ultimoElemento;
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var largoArreglo;
  largoArreglo = array.length;
  return largoArreglo;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    array[i]++;
    
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var nuevoArray;
  array.push(elemento);
  nuevoArray = array;
  return nuevoArray;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  var nuevoArray;
  array.unshift(elemento);
  nuevoArray = array;
  return nuevoArray;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase;
  frase = palabras.join(" ");
  return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var bandera = false;
  for (var i = 0; i < array.length; i++) {
    if(elemento === array[i]) {
      bandera = true;
    }
  }
  return bandera;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for (var i = 0; i < numeros.length; i++) {
    suma+= numeros[i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promedio = 0;
  var suma = 0;
  for (var i = 0; i < resultadosTest.length; i++) {
    suma+= resultadosTest[i];
  }
  promedio = suma / resultadosTest.length;

  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var vMayor;
  vMayor = Math.max.apply(null,numeros);
  return vMayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var multiplicacion = 1;
  if (arguments.length === 0) {
    multiplicacion = 0;
  }
  else if (arguments.length === 1) {
    multiplicacion = arguments[0];
  }
  else {
    for (var i = 0; i < arguments.length; i++) {
      multiplicacion*=arguments[i];
    }
  }
  return multiplicacion;
  
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  arregloMayor18 = [];
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      arregloMayor18.push(arreglo[i]);
    }
  }
  return arregloMayor18.length;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  var mensaje;
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    mensaje = "Es fin de semana";
  }    
  else {
    mensaje = "Es dia Laboral";
  }
  return mensaje;
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var bandera = false;
  var numeroStr =  String(n);
  if (numeroStr[0] === "9") {
    bandera = true;
  }

  return bandera;
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  var bandera = false;
  
  for (var i = 0; i < arreglo.length; i++) {
    if (i >= 1) {
      var iguales = arreglo[i] === arreglo[i-1];
      if (iguales) {
        bandera = true;
      }
      else {
        bandera = false;
        break;
      }
    }
  }
  return bandera;
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  arregloMeses = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] === "Enero") {
      arregloMeses.push(array[i]);
    }
    else if (array[i] === "Marzo") {
      arregloMeses.push(array[i]);
    }
    else if (array[i] === "Noviembre") {
      arregloMeses.push(array[i]);
    }
  }

  if (arregloMeses.length === 3) {
    return arregloMeses;
  }
  else {
    return "No se encontraron los meses pedidos"
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  var nuevoArray = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var mensaje;
  var array = [];
  var aumentado = numero;
  for (var i = 1; i <= 10; i++) {
    aumentado += 2; 
    array.push(aumentado);
    if (aumentado === i) {
      mensaje = "Se interrumpió la ejecución";
      break;
    }
    else {
      mensaje = array;
    }
  }
  return mensaje;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var aumentado = numero;
  for (var i = 1; i <= 10; i++) {
    if (i === 5) {
      continue;
    }
    aumentado += 2; 
    array.push(aumentado);
    
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
