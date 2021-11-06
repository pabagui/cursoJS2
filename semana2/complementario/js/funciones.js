
/*
Sugerencia: para llevar adelante esta tarea, te sugerimos pensar un proceso complejo, descomponerlo al menos en tres partes, y realizar una función que se encargue de cada una de ellas. 

>> Consigna: codifica al menos tres funciones cuyas instrucciones permitan resolver un problema particular, segmentado en tareas. La información a procesar debe ser ingresada por el usuario, y el resultado del procesamiento visualizado en una salida.
>>Aspectos a incluir en el entregable:
Archivo HTML y archivo JavaScript referenciados, que incluyan la definición y llamada de al menos tres funciones.
>>Ejemplos:
Ejemplo de procesamiento: cálculo de IVA 
1) Ingresar precio de costo - 2) Sumar IVA - 3) Mostrar precio calculado.
Ejemplo de procesamiento: determinar si un número es múltiplo 
1) Ingresar números a verificar - 2) ¿Es múltiplo? - 3) Mostrar resultado.
 ej cálculo del sueldo líquido
 */


 //-----------------------calculadora de nota de examen final---------------------------


 let notaPruebas = parseInt(prompt("Ingresa tu promedio de notas antes del examen final"));

 function notaRequerida(notaPruebas){
     let notaExamen;
     notaExamen = ((4 - 0.7 * notaPruebas) / (0.3));
     return notaExamen;
 }

 let notaNecesitada = notaRequerida(notaPruebas).toFixed(1);
 alert("la nota que necesitas en el examen final para aprobar es " + notaNecesitada);


  //-----------------------calculadora de sueldo líquido---------------------------
 let sueldoBruto = parseInt(prompt("Ingresa tu sueldo bruto"));
 let planSalud = prompt("Ingresa tu plan de salud: A o B");
 const planA = 0.07;
 const planB = 0.05;
 
 function sueldoLiquido(sueldoBruto , planSalud){
     let sueldoFinal;
     if(planSalud == "A"){
         sueldoFinal = (sueldoBruto) * (1 - planA);
         return sueldoFinal;
     } else if(planSalud == "B"){
        sueldoFinal = (sueldoBruto) * (1 - planB);
        return sueldoFinal;
     } else {
         alert("elige un plan de salud")
     }

 }

 let sueldo = sueldoLiquido(sueldoBruto , planSalud).toFixed(0);
 alert("tu sueldo líquido es $" + sueldo);



 //-----------------------precio de paquete turístico---------------------------


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


 