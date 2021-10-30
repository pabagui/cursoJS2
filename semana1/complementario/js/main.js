let nombre = prompt("Ingresa tu nombre");
let saludo  = "Hola " + nombre + ", bienvenido al curso de Javascript";
alert(saludo);
let edad = prompt("ingresa tu edad");
let edad2022 = parseInt(edad) + 1;
console.log(parseInt(edad2022));
let ciudad = prompt("Ingresa tu ciudad");
let pais = prompt("Ingresa tu país");
let ofertas  = "¿Sabías que tenemos ofertas especiales para alumnos de " + ciudad + ", " + pais + "?";
alert(ofertas);

/*    

>>Ejemplo:
Pedir nombre mediante prompt y mostrarlo en consola junto con algún texto de saludo. Ejemplo:  ¡Hola, Juan!
Pedir un número mediante prompt, parsearlo, sumarlo a otro que se encuentre almacenado en una variable y luego mostrar el resultado en consola.
Pedir un texto mediante prompt, luego otro, concatenarlos y mostrarlo en un alerta.

Usamos prompt() para solicitar datos al usuario y console.log() o alert() para mostrar el resultado de las operaciones realizadas con esos datos. Si vas a sumar una entrada tene en cuenta que tenes que parsearla antes. Usando parseInt() o parseFloat() 

Consigna: Crea un script en JS que le solicite al usuario ingresar uno o más datos. Luego, con JavaScript, realiza operaciones matemáticas o de concatenación sobre las entradas teniendo en cuenta el tipo de dato. Al finalizar mostrar el resultados con alert() o console.log()


*/