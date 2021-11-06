
/*
Sugerencia: Algunos criterios a tener en cuenta para seleccionar un proceso a simular por primera vez son: 
“ELEGIR UN PROCESO BIEN CONOCIDO” :  Si conozco una situación que implique adquirir cierta información y estoy bien familiarizado en “cómo se hace” es más fácil traducir la solución a un lenguaje de programación.
“ELEGIR UN PROCESO QUE ME RESULTE INTERESANTE” : Si me siento motivado sobre el tema, es más llevadero enfrentar los retos de desarrollo e interpretación: Antes de programar existe la etapa de relevamiento y análisis que me permite identificar cómo solucionar el proceso.

>> Consigna: Con los conocimientos vistos hasta el momento, empezarás a armar la estructura inicial de tu proyecto integrador. A partir de los ejemplos mostrados la primera clase, deberás:
Pensar el alcance de tu proyecto: ¿usarás un cotizador de seguros? ¿un simulador de créditos? ¿un simulador personalizado?
Armar la estructura HTML del proyecto.
Incorporar al menos un prompt para pedir un dato y luego mostrarlo mediante alert realizando alguna operación.
Utilizar funciones para realizar esas operaciones.
>>Aspectos a incluir en el entregable:
Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que emplee funciones para resolver el procesamiento principal del simulador
>>Ejemplo:
Calcular costo total de productos y/o servicios seleccionados por el usuario.
Calcular pagos en cuotas sobre un monto determinado.
Calcular valor final de un producto seleccionado en función de impuestos y descuentos.
Calcular tiempo de espera promedio en relación a la cantidad de turnos registrados.
Calcular edad promedio de personas registradas.
Calcular nota final de alumnos ingresados.
*/


//precio de paquete turístico


const isla1 = 750;
const isla2 = 600;
const isla3 = 850;
const servicio1 = 80;
const servicio2 = 30;

let isla = parseInt(prompt("ingresa el número de la isla que quieres visitar: \n 1) Mallorca \n 2) Ibiza \n 3) Menorca"));
let servicio = parseInt(prompt("ingresa el número del servicio adicional que deseas: \n 1) buceo \n 2) paseo en kayak"));

function precioTotal(isla , servicio){
    let paquete
    if((isla == 1) && (servicio == 1)){
        paquete = ((isla1 + servicio1)*(1.19)).toFixed(0);
        return paquete;

    } else if((isla == 2) && (servicio == 1)){
        paquete = ((isla2 + servicio1)*(1.19)).toFixed(0);
        return paquete;

    } else if((isla == 3) && (servicio == 1)){
        paquete = ((isla3 + servicio1)*(1.19)).toFixed(0);
        return paquete;

    } else if((isla == 1) && (servicio == 2)){
        paquete = ((isla1 + servicio2)*(1.19)).toFixed(0);
        return paquete;

    } else if((isla == 2) && (servicio == 2)){
        paquete = ((isla2 + servicio2)*(1.19)).toFixed(0);
        return paquete;

    } else if((isla == 3) && (servicio == 2)){
        paquete = ((isla3 + servicio2)*(1.19).toFixed(0));
        return paquete;
    }
}

let precioPaquete = precioTotal(isla , servicio);
alert("el precio de tus vacaciones es USD$" + precioPaquete + " con IVA incluido");