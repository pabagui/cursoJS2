/*

Sugerencia: Si bien, por el momento solo podemos hacer entradas con prompt() y salidas con alert() o console.log(), es suficiente para empezar a pensar el proceso a simular en términos de entradas, variables, estructuras, funciones, métodos y salidas. Verificar Rúbrica


>>Objetivos Generales:
Codificar la funcionalidad inicial del simulador. 
Identificar el flujo de trabajo del script en términos de captura de entradas ingresadas por el usuario, procesamiento esencial del simulador y notificación de resultados en forma de salida.

>>Objetivos Específicos:
Capturar entradas mediante prompt().
Declarar variables necesarias para simular el proceso seleccionado.
Crear funciones y/o métodos para realizar operaciones (suma, resta, concatenación, división, porcentaje, etc).
Efectuar una salida, que es el resultado de los datos procesados, la cual puede hacerse por alert() o console.log().

>>Se debe entregar:
Estructura HTML del proyecto. 
Variables de JS necesarias. 
Funciones esenciales del proceso a simular.


*/


let pasajeros = parseInt(prompt("Ingresa el número de pasajeros (máximo 9)"));

class isla {
    constructor(id , nombre , precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    sumaTasas(){
        this.precio = (this.precio * pasajeros * 1.12).toFixed(0);
    }

}

const islas =[];

islas.push(new isla(1 , "Ibiza y Formentera" , 650));
islas.push(new isla(2 ,"Mallorca" , 900));
islas.push(new isla(3 , "Menorca" , 750));

for (const isla of islas){
    isla.sumaTasas();
}

console.log(islas);

class servicio {
    constructor(id , nombre , precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    sumaIVA(){
        this.precio = (this.precio * pasajeros * 1.19).toFixed(0);
    }
}

const servicios = [];


servicios.push(new servicio(1 , "Pick-up ida y vuelta al aeropuerto" , 50));
servicios.push(new servicio(2 , "Tarde de Buceo" , 120));
servicios.push(new servicio(3 , "Stand up paddle por 2 horas" , 35));

for(const servicio of servicios){
    servicio.sumaIVA();
}

console.log(servicios);


class totalCompra{
    constructor(destino, extra){
        this.destino = destino;
        this.extra = extra;

    }
        
}

const carro = [];
let opcionIsla = parseInt(prompt("Elige el número del destino: \n 1- Ibiza y Formentera \n 2- Mallorca \n 3- Menorca"));
let opcionServicio = parseInt(prompt("Elige el número del servicio extra: \n 1- Pick-up ida y vuelta al aeropuerto: USD$ 50 \n 2- Tarde de buceo: USD$ 120 \n 3- Stand up paddle por 2 horas: USD$ 35"));

console.log(pasajeros);
console.log(opcionIsla);
console.log(opcionServicio);

function cotizar() {

    let encontradoIsla = islas.find(isla => isla.id == opcionIsla);
    let encontradoServicio = servicios.find(servicio => servicio.id == opcionServicio);

    console.log(encontradoIsla.precio); 
    console.log(encontradoServicio.precio);

    
    let precioTotal = parseInt(encontradoIsla.precio) + parseInt(encontradoServicio.precio);

    console.log(precioTotal);
    alert(`Cotizaste un viaje a ${encontradoIsla.nombre} y contratando ${encontradoServicio.nombre} por un total de USD$` + precioTotal + ".\n Para más información llena el formulario de contacto y nos comunicaremos a la brevedad contigo");

    carro.push(encontradoIsla);
    carro.push(encontradoServicio);
}

cotizar();
console.log(carro);