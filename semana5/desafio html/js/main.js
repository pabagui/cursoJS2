/*

Formato: código fuente en JavaScript
Sublime Text o VisualStudio.   
Sugerencia: en esta actividad, puedes generar los nuevos elementos del DOM mientras recorres un array de objetos, creando en cada iteración (con createElement) uno o más elemento html, agregándolos como hijos al body u otro nodo (con appendChild).

>> Consigna: codifica un script cuyas instrucciones permitan generar de forma dinámica una sección del HTML. Los valores que alimentan este proceso comprenden una array de objetos, cuyos datos deberán incluirse empleando métodos del DOM y elementos apropiados para su representación.
>>Aspectos a incluir en el entregable:
Archivo HTML y archivo JavaScript referenciado, que incluya la definición un array de objetos, la declaración y llamada de una función que genere proceduralmente una sección del HTML.
>>Ejemplo de estructura HTML resultante:
1) Generar títulos y párrafos a partir de un array de “Publicaciones”.
2) Generar cards y botones a partir de un array de “Productos”.
3) Generar imágenes y badges a partir de un array de “Personas”.

*/


const carro = [];

let miFormulario = document.getElementById('formulario');
miFormulario.addEventListener('submit', validarFormulario); //uso de eventos

function validarFormulario (e) {

    e.preventDefault();

    let formulario = e.target;

    let numeroPasajeros = formulario.children[1].value;
    let numeroIsla = formulario.children[5].value;
    let numeroServicio = formulario.children[9].value;

    //console.log(numeroPasajeros);
    //console.log(numeroIsla);
    //console.log(numeroServicio);

    carro.push(numeroPasajeros); 
    carro.push(numeroIsla);
    carro.push(numeroServicio);

    console.log(carro);

    class isla {
        constructor(id , nombre , precio) {
            this.id = id;
            this.nombre = nombre;
            this.precio = precio;
        }
    
        sumaTasas(){
            this.precio = (this.precio * numeroPasajeros * 1.12).toFixed(0); //pasajeros input
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
            this.precio = (this.precio * numeroPasajeros * 1.19).toFixed(0); //pasajeros input
        }
    }
    
    const servicios = [];
    
    
    servicios.push(new servicio(1 , "Pick-up ida y vuelta al aeropuerto" , 50));
    servicios.push(new servicio(2 , "Tarde de Buceo" , 120));
    servicios.push(new servicio(3 , "Stand up paddle por 2 horas" , 35));
    servicios.push(new servicio(4 , "ningún servicio extra" , 0)); 
    
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
    

    let encontradoIsla = islas.find(isla => isla.id == numeroIsla); // input isla
    let encontradoServicio = servicios.find(servicio => servicio.id == numeroServicio); //input servicio
    
    let precioTotal = parseInt(encontradoIsla.precio) + parseInt(encontradoServicio.precio);
    
    
    function cotizar() {
    

    
        //console.log(encontradoIsla.precio); 
        //console.log(encontradoServicio.precio);
    

    
        //console.log(precioTotal);

    }
    
    cotizar();
    
    
    
    //generar html a partir de un array:

    function mensajeFinal () {
      // crea un nuevo div
      // y añade contenido
      let opcion = document.getElementById("cotizar");// acá hice un cambio
      let newDiv = document.createElement("div");
      newDiv.innerHTML = `<p>Cotizaste un viaje a ${encontradoIsla.nombre} para ${numeroPasajeros} personas, contratando ${encontradoServicio.nombre} por un total de USD$ ${precioTotal}  .\n Para más información llena el formulario de contacto y nos comunicaremos a la brevedad contigo</p>`;
      newDiv.style.color = "blue";
      newDiv.style.fontSize = "1.5rem";
      newDiv.style.padding = "4rem";
      
      opcion.appendChild(newDiv); //añade texto al div creado.
    
      // añade el elemento creado y su contenido al DOM
      let currentDiv = document.getElementById("imagenCotizar");
      document.body.insertBefore(newDiv, currentDiv);
    }
    
    mensajeFinal ();
    

}

// Me sale e siguiebte error en la consola que no entiendo, porque el html que genero igual se muestra en la página:  main.js:142 Uncaught DOMException: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node. at mensajeFinal (file:///C:/proyectos_coder/proyectojs/proyectofinaljs/js/main.js:142:21) at HTMLFormElement.validarFormulario (file:///C:/proyectos_coder/proyectojs/proyectofinaljs/js/main.js:145:5)


