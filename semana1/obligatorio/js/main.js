let encuesta = parseInt(prompt("¿Cuántas horas dedicas al día a estudiar?"));
if (encuesta == 0) {
    alert("Tenemos el curso que necesitas para aumentar tus conocimientos");
} 
else if (encuesta <= 5) {
     alert("Nuestros workshops de 3 horas de duración te permitirán profundizar temas para tu carrera")
}
else if (encuesta <= 10) {
      alert("Infórmate sobre nuestros webinars de 1 hora disponibles para ti")
}
else {
    alert("Premiamos tu esfuerzo con becas para todos nuestros cursos")
}
let interes = prompt("¿Quieres saber más sobre nosotros?")
if ((interes == "si") || (interes !="no")) {
    alert("Puedes llenar el formulario de contacto para enviarte más información sobre nuestros cursos")
}
else {
    console.log("sigue navegando")
}


/*
>> Consigna: Crea un algoritmo que solicite al usuario uno o más valores ingresados por prompt(), compare las entradas y, en función de ciertas condiciones, muestre por consola o alert() el resultado según los valores ingresados y las condiciones cumplidas.
>>Aspectos a incluir en el entregable:
Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que emplee instrucciones condicionales.
>>Ejemplo:
Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.
Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.
Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.
-->

*/