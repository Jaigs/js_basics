console.log("1.datatypes: 👋 Bienvenidos, en este fichero se harán ejercicios sobre los tipos de datos");

/* Datos primitivos y no primitivos*/
//crear dos variables con el mismo contenido y comparar si ambas son iguales
var variable = 1;
var variable2= 1;
if (variable==variable2) {
    console.log("Son iguales");
} else {
    console.log("No son iguales"); 
}

//crear dos variables con el distinto contenido y comparar si ambas son iguales
var variable1 = 1;
var variable_2= 2;
if (variable1==variable_2) {
    console.log("Son iguales");
} else {
    console.log("No son iguales"); 
}

//crear una variable de tipo string y otra de tipo int, ambas con el mismo valor numérico. Compararlas para ver si contienen el mismo valor

var v1= 5;
var v2= 5;
if (v1==v2) {
    console.log("Son iguales");
}else{
    console.log("No son iguales");
}

//utilizar las mismas variables del ejercicio anterior y realizar una comparación estricta

let v1= "5";
var v2= 5;
if (v1==v2) {
    console.log("Son iguales");
}else{
    console.log("No son iguales");
}
//crear dos arrays con el mismo contenido y comparar con "==" si ambos arrays son iguales

//ahora comparar el contenido de dichos arrays utilizando un bucle

//crear dos arrays con el mismo contenido y comparar si ambos arrays son iguales
    let val_1=[3, 4, 5];
    let val_2=[3, 4, 5];
    if (val_1 == val_2) {
        console.log("Son iguales");
    }else{
        console.log("No son iguales");
    }
// crear un objeto "usuario", con tres propiedades
var var_2={nombre:"Jaime", apellido:"García", codigo_postal:"33011"}

/* Operaciones con números */
//crear una constante para la gravedad y redondearla con el método Math.round
const grav = 9.8;
Math.round(grav);

//incrementar una variable con otra variable con el operador  =+
var a;
var b;
a += b;
console.log(a);
//incrementar una variable con otra variable o número con el operador  +=, mostrar por pantalla la primera variable (la incrementada)

//eleva un número a otro utilizando **
var a = 6;
console.log(a ** 3);

//eleva un número a otro utilizando un bucle
const base = 6;
const exponente = 3;
let r = 1;

for(let i = 0; i<exponente; i++){
    r = r * base;
}

console.log(r)

// generar un número aleatorio del 0 al 100
var min= 0;
var max= 100;
Math.random(0, 100);

// genera un array de 10 números aleatorios del 0 al 100 y muestra el máximo y mínimo
var min= 0;
var max= 100;
console.log(min);
console.log(max);
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}
// lo mismo que el anterior, pero usando las funciones Math.min y Math.max
Math.min= 0;
Math.max= 100;
Math.random(Math.min,Math.Math)


/* Operaciones con strings */
//crear una cadena de caracteres y convertirla a mayúsculas y minúsculas con los métodos predeterminados destinados para ello
 let = "Hola"
 console.log(Hola.toLowerCase());
 console.log(Hola.toUpperCase());

//reemplazar Pascal por Javascript en la frase "Pascal es un lenguaje de programación moderno"
var Pascal= "Pascal es un lenguaje de programación moderno"
var Javascript = Pascal.replace("Pascal", "Javascript")
console.log(Javascript);

//crear una variable con frase/cadena de caracteres y comprobar la longitud
let browserType = 'Kylian Mbappé madridista ';
var long = browserType.long();
console.log(long);

//eliminar "script" de la palabra Javascript con el método substr
let cadena= Javascript;
cadena.substr(inicio[ Javascript, longitud])

//comprueba si la frase "Espero que esto me sirva para algo" contiene la palabra "algo"
let browserType = 'Espero que esto me sirva para algo';
browserType[browserType.length-1];