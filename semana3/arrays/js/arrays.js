/*

Los Array cumplen el papel de listas en el programa. Principalmente, los usamos para agrupar elementos de un mismo tipo. Siempre que sea posible emplear los métodos disponibles para trabajar con ellos

>> Consigna: Traslada al proyecto integrador el concepto de objetos, visto en la clase de hoy. A partir de los ejemplos mostrados la primera clase, y en función del tipo de simulador que hayas elegido, deberás:
Incorporar al menos un Array en tu proyecto.
Utilizar algunos de los métodos o propiedades vistos en la clase.
>>Aspectos a incluir en el entregable:
Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que emplee array para agrupar elementos similares.
>>Ejemplo:
Podemos crear arrays para los objetos identificados en el simulador la clase anterior, Ejemplo: Array de Productos, Array de Personas,Array de Libros, Array de Autos,  Array de Comidas,  Array de Bebidas, Array de Tareas, etc.


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
    alert(`Elegiste un viaje a ${encontradoIsla.nombre} y contratando ${encontradoServicio.nombre} por un total de USD$` + precioTotal);

    carro.push(encontradoIsla);
    carro.push(encontradoServicio);
}

cotizar();
console.log(carro);


/*
let agregarAlCarro = ( opcionIsla , opcionServicio , pasajeros ) => {
    let encontradoIsla = islas.find(isla => isla.id == opcionIsla);
    let encontradoServicio = servicios.find(servicio => servicio.id == opcionServicio);

    /*
    let item = {
        precioTotal: (encontradoIsla.precio + encontradoServicio.precio) * pasajeros,
        nombreIsla: encontradoIsla.nombre,
        nombreServicio: encontradoServicio.nombre,
    }
*/


/*
    carro.push(item);
    alert(`Elegiste un viaje a ${encontradoIsla.nombre} y contratando ${encontradoServicio.nombre} por un total de USD$ ${precio}`);
}

console.log(agregarAlCarro);

*/




/*
function agregarCarro(opcionIsla , pasajeros){
    let busqueda = islas.find(isla => isla.id === opcionIsla);
    let precio = isla.precio * pasajeros;
    return precio;
}

agregarCarro(opcionIsla , pasajeros);
let destino = islas.find(isla => isla.nombre == isla[1]);
console.log("Elegiste como destino " + destino );


*/






/*
for(let i = 0; i < 1; i++) {

    let opcionIsla = parseInt(prompt("Elige el número del destino: \n"));
    let opcionServicio = parseInt(prompt("Elige el número del servicio extra: \n"));

    carro.push = new totalCompra(opcionIsla , opcionServicio);
}


console.log(carro);
//console.log(islas[0].nombre);

*/


/*
function mostrarMenuIslas() {

    //for(let i = 0; i < islas.length; i++) {
        let i = 0;
        let menuIslas = "Elige una isla \n";
        islas.forEach(isla => {
            menuIslas += isla[i] + "- " + isla[i+1];
        })
        menuIslas += (islas.length + 1) + "- Salir";
        let eleccionIsla = parseInt(prompt(menuIslas));
        return eleccionIsla;

   // }

    

}

*/
/*
do{
    let opcion = mostrarMenuIslas();
    carro.push(menuIslas);
    let menuServicio = parseInt(prompt("Ingresa el número del servicio elegido o 0"));
    carro.push(menuServicio);
    let menuServicioDos = parseInt(prompt("Si deseas agregar otro servicio escribe el número, si no, 0"));
    carro.push(menuServicioDos);
    break;
    console.log(carro);
}while(carro.length != cantidad);

*/


/*
let mostrarMenu = () =>{
    let menu = "Elige una isla \n";
    islas.forEach((isla)=>{
        menu += isla.id + ".-" + isla.nombre + "\n"
    });
    menu += (islas.length + 1) + ".-Salir";
    let eleccion = parseInt(prompt(menu));
    return eleccion;
};


const maxPasajeros = (pasajeros, limite ) => {
    if(pasajeros > limite){
        alert(`El número máximo de pasajeros es ${limite}`);
        return false;
    }
    return true;
}

let agregarAlCarro = ( opcion , pasajeros ) => {
    let found = islas.find(isla => isla.id === opcion);//si option = 3 entonces found = { id='3', name='bananas', price=100, stock=10 }
    if(maxPasajeros(pasajeros)){
        let item = {
            //cantidad:cantidad,
            precio:found.precio * pasajeros,
            nombre: found.nombre,
        }
        carro.push(item);
        alert(`${found.nombre} es tu viaje elegido`)
    }
};

let mostrarTotal = () => {
    let info = "";
    let total = 0;
    carro.forEach(isla => {
        mostrarTotal += `Isla elegida: ${isla.nombre} Pasajeros: ${isla.canti} Precio: ${isla.precio} \n`;
        total += isla.precio
    })
    info += `Total: USD$ ${total}`;
    alert(info);
}

do{
    let opcion = mostrarMenu();
    if(opcion === (islas.length + 1)){
        break;
    }

    pasajeros;
    agregarAlCarro(opcion , pasajeros);
    
    resp = prompt("Desea continuar comprando? s / n");

}while(resp === 's');

if(carro.length > 0) mostrarTotal();

alert("Gracias por tu visita");

*/