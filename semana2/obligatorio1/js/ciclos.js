
/*
Sugerencia: Usamos la instrucción for para repetir un número fijo de veces. Mientras que usamos while cuando queremos repetir algo hasta que se deje de cumplir una condición.

>> Consigna: Tomando como base los ejemplos anteriores de la estructura for y while, crear un algoritmo que repita un bloque de instrucciones. En cada repetición es necesario efectuar una operación o comparación para obtener una salida por alerta o consola.
>>Ejemplo:
Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado
Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.
Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.
*/


let listaPaises = " ";
let viajes = parseInt(prompt("Ingresa el número de países que has visitado"));

for (let i = 0; i < viajes; i++) {

    listaPaises += prompt("Ingresa nombre de país visitado") + "\n";
}

if((viajes) == 0) {

    alert("Has visitado " + viajes + "% del mundo: ¡Necesitas vacaciones!");

} else {

    alert("Has visitado " + (100*viajes/197).toFixed(0) + "% del mundo:" + "\n" + listaPaises);

} 

let dni = prompt("Participa por un viaje a las Baleares. Escribe tu DNI para continuar o 'ESC' para salir");

while (dni != "ESC") {

    alert("tu DNI es: " + dni);
    dni = prompt("Escribe DNI de un acompañante o 'ESC' para salir");
   
}
