/*

Sugerencia: Reconocer elementos en el simulador cuya información está compuesta por más de un valor y existen operaciones comunes (funciones) para todos los elementos de este tipo y sus propiedades. 

>> Consigna: A partir de los ejemplos mostrados la primera clase, y en función del tipo de simulador que hayas elegido, deberás:
Crear al menos un objeto para controlar el funcionamiento de tu simulador.
Incorporarle sus propiedades y su constructor.
Invocar a ese objeto en algún momento donde el usuario realice alguna acción.
Utilizar sus mètodos.
>>Aspectos a incluir en el entregable: Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que emplee objetos para elementos con propiedades y mètodos comunes.
>>Ejemplo:
Algunos objetos a identificar que forman parte del simulador pueden ser: Producto, Persona,Libro, Auto, Comida, Bebida, Tarea, etc.


*/

//prompt que pida el número de pasajeros para interactuar y agregar método con el prompt
let pasajeros = parseInt(prompt("Ingresa el número de pasajeros (máximo 9)"));
let programa = parseInt(prompt("Elige el número de la isla: \n 1- Ibiza y Formentera \n 2- Mallorca \n 3- Menorca"));
let servicioAdicional = parseInt(prompt("Elige el número del servicio adicional: \n 1- Pick-up ida y vuelta al aeropuerto \n 2- Tarde de buceo \n 3- Stand up paddle por 2 horas"));

class isla {
    constructor(nombre , precio , duracion) {
        this.nombre = nombre;
        this.precio = precio;
        this.duracion = duracion;
    }


    sumaTasas(){
        this.precio = (this.precio * pasajeros * 1.12).toFixed(0);
    }
    mostrarPrecio(){
        console.log("El precio con tasas incluidas para " + this.nombre + " por " + this.duracion + " días es " + this.precio);
    }
}

let isla1 = new isla("Ibiza y Formentera" , 650 , 8);
let isla2 = new isla("Mallorca" , 900 , 12);
let isla3 = new isla("Menorca" , 750 , 8);
    
isla1.sumaTasas();
isla1.mostrarPrecio();
console.log(isla1);

isla2.sumaTasas();
isla2.mostrarPrecio();
console.log(isla2);


isla3.sumaTasas();
isla3.mostrarPrecio();
console.log(isla3);


class servicio {
    constructor(nombre , precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    sumaIVA(){
        this.precio = (this.precio * pasajeros * 1.19).toFixed(0);
    }
    mostrarPrecioServicio(){
        console.log("El precio con IVA de " + this.nombre + " es " + this.precio);
    }
}

let servicio1 = new servicio("Pick-up ida y vuelta al aeropuerto" , 50);
let servicio2 = new servicio("Tarde de Buceo" , 120);
let servicio3 = new servicio("Stand up paddle por 2 horas" , 35);
//let servicio4 = new servicio("Comida romántica para 2" , 90);

servicio1.sumaIVA();
servicio1.mostrarPrecioServicio();
console.log(servicio1);



//¿cómo sumar todos los servicios para que elija másde 1?

let pack11 = parseInt(isla1.precio) + parseInt(servicio1.precio);
let pack12 = parseInt(isla1.precio) + parseInt(servicio2.precio);
let pack13 = parseInt(isla1.precio) + parseInt(servicio3.precio);
let pack21 = parseInt(isla2.precio) + parseInt(servicio1.precio);
let pack22 = parseInt(isla2.precio) + parseInt(servicio2.precio);
let pack23 = parseInt(isla2.precio) + parseInt(servicio3.precio);
let pack31 = parseInt(isla3.precio) + parseInt(servicio1.precio);
let pack32 = parseInt(isla3.precio) + parseInt(servicio2.precio);
let pack33 = parseInt(isla3.precio) + parseInt(servicio3.precio);



if((programa == 1) && (servicioAdicional == 1)){
console.log("El precio total del paquete es " + pack11); 
}
else if((programa == 1) && (servicioAdicional == 2)){
    console.log("El precio total del paquete es " + pack12); 
}
else if((programa == 1) && (servicioAdicional == 3)){
    console.log("El precio total del paquete es " + pack13); 
}
else if((programa == 2) && (servicioAdicional == 1)){
    console.log("El precio total del paquete es " + pack21); 
}
else if((programa == 2) && (servicioAdicional == 2)){
    console.log("El precio total del paquete es " + pack22); 
}
else if((programa == 2) && (servicioAdicional == 3)){
    console.log("El precio total del paquete es " + pack23); 
}
else if((programa == 3) && (servicioAdicional == 1)){
    console.log("El precio total del paquete es " + pack31); 
}
else if((programa == 3) && (servicioAdicional == 2)){
    console.log("El precio total del paquete es " + pack32); 
}
else if((programa == 3) && (servicioAdicional == 3)){
    console.log("El precio total del paquete es " + pack33); 
}
else {
    console.log("Para más información escríbenos en el formulario de contacto"); //en caso de que escriba una opción distinta al menú (ej. 0)
}
