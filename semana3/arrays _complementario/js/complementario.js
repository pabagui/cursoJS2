/*

Sugerencia: recuerda que para ordenar una estructura de datos, los elementos deben ser del mismo tipo. Puedes emplear la función sort() para armar el algoritmo. https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort 

>> Consigna: codifica una función cuyas instrucciones permitan ordenar una colección (array). Preferentemente, recibir el criterio de ordenamiento por parámetro, y mostrar el resultado del procesamiento en una salida.
>>Aspectos a incluir en el entregable:
Archivo HTML y archivo JavaScript referenciado, que incluya la definición un array de objetos, la declaración y llamada de una función que ordene la colección. 
>>Ejemplo de criterio de ordenamiento:
1) Array de objetos “Productos”. Ordenar por menor precio.
2) Array de objetos “Personas”. Ordenar por mayor edad.
3) Array de objetos “Date”. Ordenar por menor fecha.

*/

class isla {
    constructor(id , nombre , precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const islas =[];

islas.push(new isla(1 , "Ibiza y Formentera" , 650));
islas.push(new isla(2 ,"Mallorca" , 900));
islas.push(new isla(3 , "Menorca" , 750));
islas.push(new isla(4 , "Malta" , 900));
islas.push(new isla(5 , "Córcega" , 300));
islas.push(new isla(6 , "Sicilia" , 300));
islas.push(new isla(7 , "Chafarinas" , 500));

//console.log(islas);

islas.sort( (a, b) => {
    if(a.precio > b.precio) {
        return 1;
    }
    if(a.precio < b.precio) {
        return -1;
    }
    if(a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
        return 1;
    }
    if(a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
        return -1;
    }
    else {
        return 0;
    }
});

console.log(islas);

//queda ordenado pormenor precio y luego por orden alfabético