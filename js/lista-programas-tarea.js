// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const miFuncionCadena = (cadena = "") => {
    if (!cadena) {
        console.warn("No ingresaste ninguna cadena");
    } else {
        return (cadena.length);
    }
}
const form = document.getElementById('form1');
const textInput = document.getElementById('textinput');

form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const textoIngresado = textInput?.value;
    const cantidadCaracteres = miFuncionCadena(textoIngresado);
    document.getElementById('respuestaForm').textContent = `La cadena "${textoIngresado}" tiene ${cantidadCaracteres} caracteres`;
});

// 2)Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const miFuncionTexto = (cadena = "", caracteres = 0) => {
    if (!cadena) {
        console.warn("No ingresaste ninguna cadena");
    } else {
        if (!caracteres) {
            console.warn("No ingresaste ninguna cantidad de caracteres");
        } else {
            return (cadena.slice(0, caracteres));
        }
    }
}
const form2 = document.getElementById('form2');
const textInput2 = document.getElementById('textinput');
const caracteres2 = document.getElementById('caracteres');


form2?.addEventListener('submit', (event) => {
    event.preventDefault();
    const textoIngresado = textInput2?.value;
    const caracteres = caracteres2?.value
    const cantidadCaracteres = miFuncionTexto(textoIngresado, caracteres);
    document.getElementById('respuestaForm').textContent = `${cantidadCaracteres}`;
});


//3  - Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const miFuncionStringArray = (cadena = "", caracteres = ' ') => {
    if (!cadena) {
        console.warn("No ingresaste ninguna cadena");
    } else {
        return (cadena.split(caracteres)); //MÉTODO SPLIT: Sirve para desglosar un String en arreglo
    }
}

const form3 = document.getElementById('form3');
const textInput3 = document.getElementById('textinput');

form3?.addEventListener('submit', (event) => {
    event.preventDefault();
    const textoIngresado = textInput3?.value;
    const array = miFuncionStringArray(textoIngresado);
    document.getElementById('respuestaForm').textContent = `[${array}]`;
});


//4  - Programa una función para que calcule el precio de un producto aplicando un descuento, pe. miFuncion(1000, 20) devolverá 800.

const calcularPrecio = (precio = 0, descuento = 0) => {
    if (!precio) {
        console.warn("No ingresaste el precio del producto");
    } else if (!descuento) {
        console.warn("No ingresaste el descuento del producto");
    } else {
        let precioFinal = precio - (precio * (descuento / 100));
        return (`El  precio ${precio} con el descuento 0. ${descuento} precio es final es de: $${precioFinal}`);
    }
}
const form4 = document.getElementById('form4');
const textInput4 = document.getElementById('precio');
const descuento = document.getElementById('descuento');


form4?.addEventListener('submit', (event) => {
    event.preventDefault();
    const textoIngresado = textInput4?.value;
    const caracteres = descuento?.value
    const response = calcularPrecio(textoIngresado, caracteres);
    document.getElementById('respuestaForm').textContent = `${response}`;
});



//5  - Calcular la edad de una persona, pe. miFuncion(new Date(1988,09,01)) devolverá 34 años.

const calcularEdad = (fecha) => {
    let año = 2023
    if (!fecha) {
        console.warn("No ingresaste la fecha de nacimiento");
    } else {
        let edad = año - fecha.getUTCFullYear()
        console.log(edad);
        return (edad);
    }
}
const form5 = document.getElementById('form5');
const textInput5 = document.getElementById('fecha');

form5?.addEventListener('submit', (event) => {
    event.preventDefault();
    const textoIngresado = new Date(textInput5?.value);
    const resultado = calcularEdad(textoIngresado);
    document.getElementById('respuestaForm').textContent = `${resultado} años`;
});

//6  - Programa que convierte decimal a romano hasta el número 1000.  mifuncion(15)  devolver:  el 15 es XV

const calcularDecimalRomano = (numero) => {
    let numeroPrincipal = numero;
    if (numero < 1 || numero > 1000) {
        return console.error("El número", numeroPrincipal, "está fuera del rango admitido (1-1000)")
    }
    const valoresRomanos = [
        { valor: 1000, romano: "M" },
        { valor: 900, romano: "CM" },
        { valor: 500, romano: "D" },
        { valor: 400, romano: "CD" },
        { valor: 100, romano: "C" },
        { valor: 90, romano: "XC" },
        { valor: 50, romano: "L" },
        { valor: 40, romano: "XL" },
        { valor: 10, romano: "X" },
        { valor: 9, romano: "IX" },
        { valor: 5, romano: "V" },
        { valor: 4, romano: "IV" },
        { valor: 1, romano: "I" },
    ];
    let resultado = "";
    for (const parValorRomano of valoresRomanos) {
        while (numero >= parValorRomano.valor) {
            resultado += parValorRomano.romano;
            numero -= parValorRomano.valor;
        }
    }

    return (resultado);
}
const form6 = document.getElementById('form6');
const textInput6 = document.getElementById('numeroDecimal');

form6?.addEventListener('submit', (event) => {
    event.preventDefault();
    const textoIngresado = textInput6?.value
    const resultado = calcularDecimalRomano(textoIngresado);
    document.getElementById('respuestaForm').textContent = `El numero romano de ${textoIngresado} es ${resultado}`;
});


//7  - Programa que convierte decimal a binario. ejemplo: 1000 = 1111101000.

const conversorBinario = (numero) => {
    console.log(numero);
    let numeroPrincipal = numero;
    if (numero === 0) {
        return "0";
    }
    let binario = "";
    while (numero > 0) {
        binario = (numero % 2) + binario;
        numero = Math.floor(numero / 2);
    }
    console.log(binario);
    return (binario);
}
const form7 = document.getElementById('form7');
const textInput7 = document.getElementById('numeroDecimal2');

form7?.addEventListener('submit', (event) => {
    event.preventDefault();
    const textoIngresado = textInput7?.value
    const resultado2 = conversorBinario(textoIngresado);
    document.getElementById('respuestaForm').textContent = `El numero binario de ${textoIngresado} es ${resultado2}`;
});


//8  - Programa que devuelva el número de vocales de una cadena de texto. Ejemplo: "Hola Mundo" = 4 vocales

const vocalesTexto = (cadena = "") => {
    let cadenaPrincipal = cadena
    cadena = cadena.toLowerCase();
    const vocales = "aeiou";

    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            contador++;
        }
    }
    return (contador)
}

const form8 = document.getElementById('form8');
const textInput8 = document.getElementById('inputText');

form8?.addEventListener('submit', (event) => {
    event.preventDefault();
    const textoIngresado = textInput8?.value
    const resultado = vocalesTexto(textoIngresado);
    document.getElementById('respuestaForm').textContent = `Las vocales de ${textoIngresado} son ${resultado}`;
});


//9  - Programa que valide si una palabra es palíndromo o no. Ejemplo: "Salas" = true, "Hola" = false.

const esPalindromo = (palabra) => {
    palabra = palabra.toLowerCase().replace(/\s/g, '');
    const palabraInvertida = palabra.split('').reverse().join('');
    return (palabra === palabraInvertida);
}
const form9 = document.getElementById('form9');
const textInput9 = document.getElementById('inputText');

form9?.addEventListener('submit', (event) => {
    event.preventDefault();
    const textoIngresado = textInput9?.value
    const resultado = esPalindromo(textoIngresado);
    document.getElementById('respuestaForm').textContent = `${resultado}`;
});

//10  - Programa que elimine los espacios de una cadena de texto. Ejemplo: "Hola Mundo" = "HolaMundo".

const eliminaEspacios = (palabra) => {
    palabra = palabra.replace(/\s/g, '');
    return (palabra);
}
const form10 = document.getElementById('form10');
const textInput10 = document.getElementById('inputText');

form10?.addEventListener('submit', (event) => {
    event.preventDefault();
    const textoIngresado = textInput10?.value
    const resultado = eliminaEspacios(textoIngresado);
    document.getElementById('respuestaForm').textContent = `${resultado}`;
});

//11  - Programa que tome la primera letra de cada palabra y lo devuelva en mayúsculas. Ejemplo: "Yoni Escobar". Resultado: "YE".

const primerasLetrasMayusculas = (cadena) => {
    const palabras = cadena.split(' ');
    let resultado = '';
    for (const palabra of palabras) {
        if (palabra.length > 0) {
            resultado += palabra[0].toUpperCase();
        }
    }
    return (resultado);
}
const form11 = document.getElementById('form11');
const textInput11 = document.getElementById('inputText');

form11?.addEventListener('submit', (event) => {
    event.preventDefault();
    const textoIngresado = textInput11?.value
    const resultado = primerasLetrasMayusculas(textoIngresado);
    document.getElementById('respuestaForm').textContent = `${resultado}`;
});

//12  - Programa que devuelva la cantidad de palabras de una cadena de texto. Ejemplo: "Hola Mundo" = 2 palabras.

const contarPalabras = (cadena) => {
    const palabras = cadena.split(' ');
    const palabrasFiltradas = palabras.filter(palabra => palabra.trim() !== '');
    return (palabrasFiltradas.length);
}
const form12 = document.getElementById('form12');
const textInput12 = document.getElementById('inputText');

form12?.addEventListener('submit', (event) => {
    event.preventDefault();
    const textoIngresado = textInput12?.value
    const resultado = contarPalabras(textoIngresado);
    document.getElementById('respuestaForm').textContent = `La cadena "${textoIngresado}" tiene ${resultado} palabras`;
});

//13  - Programa que devuelva el texto con la primera letra de cada palabra en mayúscula. Ejemplo: "hola mundo" = "Hola Mundo".

const capitalizarPrimerasLetras = (cadena) => {
    const palabras = cadena.split(' ');
    const palabrasCapitalizadas = palabras.map(palabra => {
        if (palabra.length > 0) {
            return palabra[0].toUpperCase() + palabra.slice(1).toLowerCase();
        } else {
            return '';
        }
    });
    return (palabrasCapitalizadas.join(' '));
}
const form13 = document.getElementById('form13');
const textInput13 = document.getElementById('inputText');

form13?.addEventListener('submit', (event) => {
    event.preventDefault();
    const textoIngresado = textInput13?.value
    const resultado = capitalizarPrimerasLetras(textoIngresado);
    document.getElementById('respuestaForm').textContent = `${resultado}`;
});

//14  - Programa que devuelva la cadena de texto invertida. Ejemplo: "Hola Mundo" = "odnuM aloH".

const invertirCadena = (cadena) => {
    const caracteres = cadena.split('');
    const caracteresInvertidos = caracteres.reverse();
    return(caracteresInvertidos.join(''));
}
const form14 = document.getElementById('form14');
const textInput14 = document.getElementById('inputText');

form14?.addEventListener('submit', (event) => {
    event.preventDefault();
    const textoIngresado = textInput14?.value
    const resultado = invertirCadena(textoIngresado);
    document.getElementById('respuestaForm').textContent = `${resultado}`;
});

//15  - Programa que pase un arreglo de números y devuelva la suma de todos los números. Ejemplo: suma(10, 20, 30, 40, 50) = "La suma de todos los números es 150".

const sumForm = document.getElementById('sumForm');
sumForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const numbersInput = document.getElementById('numbers').value;
    const numbersArray = numbersInput.split(',').map(num => parseInt(num, 10));
    const suma = numbersArray.reduce((total, num) => total + num, 0);
    const resultElement = document.getElementById('result');
    resultElement.textContent = `La suma de todos los números es ${suma}`;
});

//16  - Programa que pase un arreglo de edades y devuelva la mayor y la menor. Ejemplo: edades(10, 20, 30, 40, 50) = "La edad mayor es 50 y la edad menor es 10".

const edadform = document.getElementById('edadform');
edadform?.addEventListener('submit', (event) => {
    event.preventDefault();
    const edadesInput = document.getElementById('edades').value;
    const edadesArray = edadesInput.split(',').map(age => parseInt(age, 10));
    const resultElement = document.getElementById('result');
    const mayor = Math.max(...edadesArray);
    const menor = Math.min(...edadesArray);
    resultElement.textContent = `La edad mayor es ${mayor} y la edad menor es ${menor}`;
});

//17  - Programa de escala de notas de 0 a 10. Ejemplo: 0-5 = "Pésimo", 6-7 = "Regular", 8-9 = "Bueno", 10 = "Excelente".

const escalaDeNotas = (nota) => {
    if (nota >= 0 && nota <= 5) {
        return("Pésimo");
    } else if (nota >= 6 && nota <= 7) {
        return ("Regular");
    } else if (nota >= 8 && nota <= 9) {
        return ("Bueno");
    } else if (nota == 10) {
        return ("Excelente");
    } else {
        return ("Nota fuera de rango solo de 1 a 10 es permitido");
    }
}
const form17 = document.getElementById('form17');
const textInput17 = document.getElementById('inputText');

form17?.addEventListener('submit', (event) => {
    event.preventDefault();
    const textoIngresado = textInput17?.value
    const resultado = escalaDeNotas(textoIngresado);
    document.getElementById('respuestaForm').textContent = `${resultado}`;
});


//18  - Programa que devuelva el número de cifras de un número entero. Ejemplo: 1234 = 4 cifras.

const contarCifras=(numero)=> {
    const cadenaNumero = numero.toString();
    return(cadenaNumero.length);
}

const form18 = document.getElementById('form18');
const textInput18 = document.getElementById('inputText');

form18?.addEventListener('submit', (event) => {
    event.preventDefault();
    const textoIngresado = textInput18?.value
    const resultado = contarCifras(textoIngresado);
    document.getElementById('respuestaForm').textContent = `El numero ${textoIngresado} tiene ${resultado} cifras`;
});


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

// const mostrarMensaje = (cadena) => {
//     const intervaloConLimite = setInterval(() => {
//         console.log(cadena)
//     }, 3000);
// }

// mostrarMensaje("hola mundo")