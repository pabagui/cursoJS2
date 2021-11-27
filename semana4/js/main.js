/*

Formato: Página HTML y código fuente en JavaScript. Debe identificar el apellido del estudiante en el nombre de archivo comprimido por “claseApellido”. 
Sugerencia: Generalmente, identificamos a un único elemento del DOM con el atributo id y a un conjunto asociado por class. 

>> Consigna:  Traslada al proyecto integrador el concepto de objetos, visto en la clase de hoy. En función del tipo de simulador que hayas elegido, deberás:
Crear elementos manipulando el DOM a partir de la informaciòn de tus objetos.
Modificar etiquetas existentes en función del resultado de operaciones.
>>Aspectos a incluir en el entregable:
Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que opere sobre el DOM, modificando, agregando o eliminado elementos.
>>Ejemplo:
Podemos crear elementos HTML en función del listado de nuestros objetos identificados en la clase 6.
Establecer un mensaje de bienvenida aleatorio usando un array de mensajes.
Capturar una o màs entradas por promp() y mostrarlas en el HTML, modificando el DOM


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

//console.log(islas);

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

//console.log(servicios);


class totalCompra{
    constructor(destino, extra){
        this.destino = destino;
        this.extra = extra;

    }
        
}

const carro = [];
let opcionIsla = parseInt(prompt("Elige el número del destino: \n 1- Ibiza y Formentera \n 2- Mallorca \n 3- Menorca"));
let opcionServicio = parseInt(prompt("Elige el número del servicio extra: \n 1- Pick-up ida y vuelta al aeropuerto: USD$ 50 \n 2- Tarde de buceo: USD$ 120 \n 3- Stand up paddle por 2 horas: USD$ 35"));

//console.log(pasajeros);
//console.log(opcionIsla);
//console.log(opcionServicio);


let encontradoIsla = islas.find(isla => isla.id == opcionIsla);
let encontradoServicio = servicios.find(servicio => servicio.id == opcionServicio);

let precioTotal = parseInt(encontradoIsla.precio) + parseInt(encontradoServicio.precio);

function cotizar() {

    /*
    let encontradoIsla = islas.find(isla => isla.id == opcionIsla);
    let encontradoServicio = servicios.find(servicio => servicio.id == opcionServicio);

    */

    console.log(encontradoIsla.precio); 
    console.log(encontradoServicio.precio);

    
   // let precioTotal = parseInt(encontradoIsla.precio) + parseInt(encontradoServicio.precio);

    console.log(precioTotal);

    /*
    alert(`Cotizaste un viaje a ${encontradoIsla.nombre} y contratando ${encontradoServicio.nombre} por un total de USD$` + precioTotal + ".\n Para más información llena el formulario de contacto y nos comunicaremos a la brevedad contigo");
    */
    carro.push(encontradoIsla);
    carro.push(encontradoServicio);
}

cotizar();
console.log(carro);

/*
function mensajeFinal(){

    let opcion = document.getElementById("otrosservicios");


    let resultado = document.createElement("div");
    
    resultado.innerHTML = `<p>Cotizaste un viaje a ${encontradoIsla.nombre} y contratando ${encontradoServicio.nombre} por un total de USD$ ${precioTotal}  .\n Para más información llena el formulario de contacto y nos comunicaremos a la brevedad contigo</p>`;
    
    opcion.appendChild(resultado);

    let divActual = document.getElementById("mensaje");
    document.body.insertBefore(opcion, divActual);

}
mensajeFinal();
*/

/*
document.body.onload = mensajeFinal;

function mensajeFinal () {
  // crea un nuevo div
  // y añade contenido
  let newDiv = document.createElement("div");
  let newContent = document.createTextNode(`Cotizaste un viaje a ${encontradoIsla.nombre} y contratando ${encontradoServicio.nombre} por un total de USD$ ${precioTotal}  .\n Para más información llena el formulario de contacto y nos comunicaremos a la brevedad contigo`);
  newDiv.appendChild(newContent); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("contacto");
  document.body.insertBefore(newDiv, currentDiv);
}

*/


function mensajeFinal () {
  // crea un nuevo div
  // y añade contenido
  let opcion = document.getElementById("otrosservicios");
  let newDiv = document.createElement("div");
  newDiv.innerHTML = `<p>Cotizaste un viaje a ${encontradoIsla.nombre} y contratando ${encontradoServicio.nombre} por un total de USD$ ${precioTotal}  .\n Para más información llena el formulario de contacto y nos comunicaremos a la brevedad contigo</p>`;
  newDiv.style.color = "blue";
  newDiv.style.fontSize = "1.5rem";
  newDiv.style.padding = "4rem";
  
  opcion.appendChild(newDiv); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("contacto");
  document.body.insertBefore(newDiv, currentDiv);
}

mensajeFinal ();