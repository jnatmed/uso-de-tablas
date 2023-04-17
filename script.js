function $(idElement){
    return document.getElementById(idElement);
}

class Dato {
    constructor(nro_expte, detalle, usuarioDestino, sectorDestino, mesa){
        this.nro_expte = nro_expte;
        this.detalle = detalle;
        this.usuarioDestino = usuarioDestino;
        this.sectorDestino = sectorDestino;
        this.mesa = mesa;
    }
}

class Table {
    insertarFila(Dato){
        let tbody = $('tbody');
        let celda = $('td');
        Dato.array.forEach( function(campo){
            console.log(campo);
            
        });       
    }
}

function $createAndInsert(nameElement, valorCampo){
    let campo = document.createElement(nameElement);
    campo.appendChild(document.createTextNode(valorCampo));
    return campo;
}

let table = new Table();
let fila = new Dato();



let btnInsertar = $('btn-insertar');

btnInsertar.onclick =  function(){

    
    let datos = [
        $createAndInsert('td',$('expte').text),
        $createAndInsert('td',$('detalle').text),
        $createAndInsert('td',$('usuario_destino').text),
        $createAndInsert('td',$('sector_destino').text),
        $createAndInsert('td',$('mesa_destino').text)
    ];
    
    datos.forEach(function(element){
        console.log("element: " + element);
    })
};
