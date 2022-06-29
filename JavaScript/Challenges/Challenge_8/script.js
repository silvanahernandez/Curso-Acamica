function obtenerDatos(){
    var ingresa;
    var list = [ingresa];
    
        for(let i = 0; i <= list.length -1; i++){
            ingresa = prompt("Ingresa cualquier caracter, ingresa '0' para salir");

            if(ingresa === "" || ingresa === null){
                return;
            }
    
            if(ingresa === '0'){
                break;
            }

            list.push(ingresa); 
            console.log(list[i]);

        }
    document.writeln("Total de elementos en array: " + list.length + "<br>");
    
    arregloDeArreglos = []; // Aquí almacenamos los nuevos arreglos
    console.log("Arreglo original: ", list);
    const LONGITUD_PEDAZOS = 3; // Partir en arreglo de 3
    for (let i = 0; i < list.length; i += LONGITUD_PEDAZOS) {
        let pedazo = list.slice(i, i + LONGITUD_PEDAZOS);
        arregloDeArreglos.push(pedazo);
    }
    console.log("Arreglo de arreglos: ", arregloDeArreglos);
    
}


    


obtenerDatos();

//mostrarArray();