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

function $create(nameElement){
    return document.createElement(nameElement);
}

function $createAndInsert(nameElement, valorCampo){
    let campo = $create(nameElement);
    campo.appendChild(document.createTextNode(valorCampo));
    return campo;
}


function $resetForm(){
    $('expte').value = '';
    $('detalle').value = '';
    $('usuario_destino').value = '';
    $('sector_destino').value = '';
    $('mesa_destino').value = '';
}

let table = $create('table');
let tbody = $create('tbody');

let btnInsertar = $('btn-insertar');

let body = document.getElementsByTagName("body")[0];


btnInsertar.onclick =  function(){

    let datos = [
        $createAndInsert('td',$('expte').value),
        $createAndInsert('td',$('detalle').value),
        $createAndInsert('td',$('usuario_destino').value),
        $createAndInsert('td',$('sector_destino').value),
        $createAndInsert('td',$('mesa_destino').value)
    ];
    
    let fila = $create("tr");
    datos.forEach(function(celda){
        fila.appendChild(celda)
    });

    tbody.appendChild(fila);
    table.appendChild(tbody);
    body.appendChild(table);
    table.setAttribute("border", "2");

    $resetForm();
};
