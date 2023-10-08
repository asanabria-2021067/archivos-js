// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// const miFuncionCadena =(cadena="") => {
//     if (!cadena) { 
//         console.warn("No ingresaste ninguna cadena");
//     } else {
//         console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
//     }
// }
// miFuncionCadena("Hola Mundo");


// 2)Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

// const miFuncionTexto =(cadena="", caracteres=0) => {
//     if (!cadena) { 
//         console.warn("No ingresaste ninguna cadena");
//     } else {
//         if (!caracteres) {  
//             console.warn("No ingresaste ninguna cantidad de caracteres");
//     } else {
//         console.info("Los", caracteres, "caracteres seleccionados de la cadena son:", cadena.slice(0,caracteres));
//     }
// }
// }
// miFuncionTexto("Hola Mundo", 4); 

// ------------------------------------------------------
//Se debe poner la cantidad de caracteres que se quiere obtener
//Ejemplo 2 caracteres -> Muestra solamente "Ho"
// ------------------------------------------------------


//3  - Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

// const miFuncionStringArray =(cadena="", caracteres='') => {
//     if (!cadena) { 
//         console.warn("No ingresaste ninguna cadena");
//     } else { 
//         console.info(cadena.split(caracteres)); //MÉTODO SPLIT: Sirve para desglosar un String en arreglo
//     }
// }
// miFuncionStringArray("Hola que tal", ' '); 



//4  - Programa una función para que calcule el precio de un producto aplicando un descuento, pe. miFuncion(1000, 20) devolverá 800.

// const calcularPrecio = (precio=0, descuento=0) => {
//     if (!precio ) {
//         console.warn("No ingresaste el precio del producto");
//     } else if (!descuento) {
//         console.warn("No ingresaste el descuento del producto");
//     } else {
//         let precioFinal = precio - (precio * (descuento / 100));
//         console.info(`El  precio ${precio } con el descuento 0. ${descuento} precio es final es de: $${precioFinal}`);
//     }
// }
// calcularPrecio(1000, 20);


//5  - Calcular la edad de una persona, pe. miFuncion(new Date(1988,09,01)) devolverá 34 años.

// const calcularEdad = (fecha) => {
//     let año = 2023
//     if (!fecha ) {
//         console.warn("No ingresaste la fecha de nacimiento");
//     } else {
//         let edad = año - fecha.getUTCFullYear()
//         console.info("La edad de la persona cuya fecha de nacimiento es: ",fecha, "son: ", edad, " años");
//     }
// }
// calcularEdad(new Date(1988,09,01));

//6  - Programa que convierte decimal a romano hasta el número 1000.  mifuncion(15)  devolver:  el 15 es XV

// const calcularDecimalRomano = (numero) => {
//     let numeroPrincipal = numero;
//     if (numero < 1 || numero > 1000) {
//         return console.error( "El número", numeroPrincipal, "está fuera del rango admitido (1-1000)")
//       }
//       const valoresRomanos = [
//         { valor: 1000, romano: "M" },
//         { valor: 900, romano: "CM" },
//         { valor: 500, romano: "D" },
//         { valor: 400, romano: "CD" },
//         { valor: 100, romano: "C" },
//         { valor: 90, romano: "XC" },
//         { valor: 50, romano: "L" },
//         { valor: 40, romano: "XL" },
//         { valor: 10, romano: "X" },
//         { valor: 9, romano: "IX" },
//         { valor: 5, romano: "V" },
//         { valor: 4, romano: "IV" },
//         { valor: 1, romano: "I" },
//       ];
//       let resultado = "";
//       for (const parValorRomano of valoresRomanos) {
//         while (numero >= parValorRomano.valor) {
//           resultado += parValorRomano.romano;
//           numero -= parValorRomano.valor;
//         }
//       }

//       console.info("El numero romano de:", numeroPrincipal, ", es:", resultado);
// }
// calcularDecimalRomano(15);


//7  - Programa que convierte decimal a binario. ejemplo: 1000 = 1111101000.

// const conversorBinario = (numero) => {
// if (isNaN(numero) || numero < 0 || Math.floor(numero) !== numero) {
//     return console.error("Ingrese un número entero no negativo válido.");
//   }
//   let numeroPrincipal = numero;
//   if (numero === 0) {
//     return "0";
//   }
//   let binario = "";
//   while (numero > 0) {
//     binario = (numero % 2) + binario;
//     numero = Math.floor(numero / 2);
//   }

//   console.info("El binario del numero:", numeroPrincipal, "es:",binario);
// }

// conversorBinario(-14)


//8  - Programa que devuelva el número de vocales de una cadena de texto. Ejemplo: "Hola Mundo" = 4 vocales

// const vocalesTexto = (cadena = "") => {
//     let cadenaPrincipal = cadena
//     cadena = cadena.toLowerCase();
//     const vocales = "aeiou";

//     let contador = 0;

//     for(let i = 0; i < cadena.length; i++){
//         if(vocales.includes(cadena[i])){
//             contador++;
//         }
//     }
//     console.info("Las vocales de la palabra:",cadenaPrincipal,"son:",contador)
// }

// vocalesTexto("Hola Mundo")


//9  - Programa que valide si una palabra es palíndromo o no. Ejemplo: "Salas" = true, "Hola" = false.

// const esPalindromo = (palabra) => {
//     palabra = palabra.toLowerCase().replace(/\s/g, '');
//     const palabraInvertida = palabra.split('').reverse().join('');
//     return console.log(palabra === palabraInvertida);
// }
// esPalindromo("Hola")

//10  - Programa que elimine los espacios de una cadena de texto. Ejemplo: "Hola Mundo" = "HolaMundo".

// const eliminaEspacios = (palabra) => {
//     palabra = palabra.replace(/\s/g, '');
//     return console.log(palabra);
// }
// eliminaEspacios("Hola Mundo")

//11  - Programa que tome la primera letra de cada palabra y lo devuelva en mayúsculas. Ejemplo: "Yoni Escobar". Resultado: "YE".

// const primerasLetrasMayusculas = (cadena) => {
//  // Dividir la cadena en palabras utilizando espacios como separadores.
//  const palabras = cadena.split(' ');
//  // Inicializar una cadena vacía para almacenar las primeras letras en mayúsculas.
//  let resultado = '';
//  // Iterar sobre cada palabra y tomar la primera letra en mayúsculas.
//  for (const palabra of palabras) {
//    if (palabra.length > 0) { // Verificar si la palabra no está vacía.
//      resultado += palabra[0].toUpperCase();
//    }
//  }
//  return console.log(resultado);
// }
// primerasLetrasMayusculas("Yoni Escobar")

//12  - Programa que devuelva la cantidad de palabras de una cadena de texto. Ejemplo: "Hola Mundo" = 2 palabras.

// const contarPalabras=(cadena)=> {
//     // Divide la cadena en palabras utilizando espacios como separadores.
//     const palabras = cadena.split(' ');
//     // Filtra las palabras vacías (por ejemplo, múltiples espacios en blanco).
//     const palabrasFiltradas = palabras.filter(palabra => palabra.trim() !== '');
//     // Retorna la cantidad de palabras encontradas.
//     return console.log("La cadena", cadena, "tiene", palabrasFiltradas.length, "palabras");
//   }
// contarPalabras("Hola Mundo")

//13  - Programa que devuelva el texto con la primera letra de cada palabra en mayúscula. Ejemplo: "hola mundo" = "Hola Mundo".

// const capitalizarPrimerasLetras=(cadena)=> {
//     // Divide la cadena en palabras utilizando espacios como separadores.
//     const palabras = cadena.split(' ');
//     // Itera sobre cada palabra y capitaliza la primera letra.
//     const palabrasCapitalizadas = palabras.map(palabra => {
//       if (palabra.length > 0) { // Verifica si la palabra no está vacía.
//         return palabra[0].toUpperCase() + palabra.slice(1).toLowerCase();
//       } else {
//         return ''; // Si la palabra está vacía, devuelve una cadena vacía.
//       }
//     });
//     // Une las palabras capitalizadas en una sola cadena.
//     return console.log(palabrasCapitalizadas.join(' '));
//   }
//   capitalizarPrimerasLetras("hola mundo")

//14  - Programa que devuelva la cadena de texto invertida. Ejemplo: "Hola Mundo" = "odnuM aloH".

// const invertirCadena = (cadena) => {
//     // Divide la cadena en caracteres individuales.
//     const caracteres = cadena.split('');
//     // Invierte el orden de los caracteres.
//     const caracteresInvertidos = caracteres.reverse();
//     // Une los caracteres invertidos en una sola cadena.
//     return console.log(caracteresInvertidos.join(''));
// }
// invertirCadena("Hola Mundo")

//15  - Programa que pase un arreglo de números y devuelva la suma de todos los números. Ejemplo: suma(10, 20, 30, 40, 50) = "La suma de todos los números es 150".

// const funcionSumatoria =(...numeros) => {
//     // Calcula la suma de todos los números en el arreglo utilizando reduce().
//     const resultado = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
//     return console.log(`La suma de todos los números es ${resultado}.`);
// }
// funcionSumatoria(10, 20, 30, 40, 50)

//16  - Programa que pase un arreglo de edades y devuelva la mayor y la menor. Ejemplo: edades(10, 20, 30, 40, 50) = "La edad mayor es 50 y la edad menor es 10".

// const edades = (...edades) => {
//     // Encuentra la edad mayor utilizando Math.max.apply().
//     const edadMayor = Math.max.apply(null, edades);
//     // Encuentra la edad menor utilizando Math.min.apply().
//     const edadMenor = Math.min.apply(null, edades);
//     return console.log(`La edad mayor es ${edadMayor} y la edad menor es ${edadMenor}.`);
// }

// edades(10, 20, 30, 40, 50); 

//17  - Programa de escala de notas de 0 a 10. Ejemplo: 0-5 = "Pésimo", 6-7 = "Regular", 8-9 = "Bueno", 10 = "Excelente".

// const escalaDeNotas = (nota) => {
//     if (nota >= 0 && nota <= 5) {
//         return console.log("Pésimo");
//     } else if (nota >= 6 && nota <= 7) {
//         return console.log("Regular");
//     } else if (nota >= 8 && nota <= 9) {
//         return console.log("Bueno");
//     } else if (nota === 10) {
//         return console.log("Excelente");
//     } else {
//         return console.log("Nota fuera de rango");
//     }
// }
// escalaDeNotas(8)

//18  - Programa que devuelva el número de cifras de un número entero. Ejemplo: 1234 = 4 cifras.

// const contarCifras=(numero)=> {
//     // Convierte el número en una cadena para contar sus caracteres.
//     const cadenaNumero = numero.toString();
//     // Retorna la longitud de la cadena, que representa el número de cifras.
//     return console.log("El numero", numero, "tiene", cadenaNumero.length, "cifras");
// }

// contarCifras(78901)

//19  - Programa que muestre los numeros primos de 1 a 1000.

// const encontrarYMostrarPrimosEnRango = (inicio, fin) => {
//     const esPrimo = (numero) => {
//         for (let i = 2, raiz = Math.sqrt(numero); i <= raiz; i++)
//             if (numero % i === 0) return false;
//         return numero > 1;
//     }
//     for (let x = inicio; x <= fin; x++) {
//         if (esPrimo(x))
//             console.log("El número " + x + " es primo");
//     }
// }
// encontrarYMostrarPrimosEnRango(1, 1000);

//20  - Programa que realice el juego de piedra, papel o tijera. Ejemplo: "Piedra" > "Tijera", "Tijera" > "Papel", "Papel" > "Piedra".
// const juegoPiedraPapelTijera = (jugador1, jugador2) => {
//     // Convierte las jugadas a minúsculas para que no importe la capitalización.
//     jugador1 = jugador1.toLowerCase();
//     jugador2 = jugador2.toLowerCase();

//     // Define las reglas del juego.
//     const reglas = {
//       piedra: "tijera",
//       tijera: "papel",
//       papel: "piedra"
//     };

//     // Verifica si las jugadas son iguales (empate).
//     if (jugador1 === jugador2) {
//       return "Empate";
//     }

//     // Verifica quién gana según las reglas.
//     if (reglas[jugador1] === jugador2) {
//       return console.log(`${jugador1} le gana a ${jugador2}`);
//     } else {
//       return console.log(`${jugador2} le gana a ${jugador1}`);
//     }
//   }
// juegoPiedraPapelTijera("tijera", "papel");

//21  - Programa con temporizador que muestre un mensaje cada cierto tiempo. Ejemplo: "Hola Mundo" cada 3 segundos.

const mostrarMensaje = (cadena) => {
    const intervaloConLimite = setInterval(() => {
        console.log(cadena)
    }, 3000);
}

mostrarMensaje("hola mundo")