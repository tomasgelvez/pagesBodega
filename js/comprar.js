const carrito = document.getElementById("carrito");
const vinos = document.getElementById("lista-vinos");
const listaVinos = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

/* cargarEventListeners(); 

 function cargarEventListeners(e) {
  vinos.addEventListener("click", comprarVino);
  carrito.addEventListener("click", eliminarVino);
  vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
  document.addEventListener("DOMContentLoaded", leerLocalStorage);
}  */

function comprarVino(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const vino = e.target.parentElement.parentElement;
        leerDatosVino(vino);
    }
}

function leerDatosVino(vino){
    const infoVinos = {
        imagen: vino.querySelector('img').src,
        titulo: vino.querySelector('h4').textContent,
        precio: vino.querySelector('.precio span').textContent,
        id: vino.querySelector('a').getAttribute('data-id')
    }

    insertarCarrito(infoVinos);
}

function insertarCarrito(vino) {
    const row = document.createElement('tr');
    row.innerHTML = `
       <td>
           <img src="${vino.imagen}" width=100> 
       </td> 
       <td>${vino.titulo}</td>
       <td>${vino.precio}</td>
       <td>
        <a href="#" class="borrar-platillo" data-id="${vino.id}">X</a>
       </td>
    `;
    listaVinos.appendChild(row);
    guardarVinoLocalStorage(vino);
}

function eliminarVino(e) {
    e.preventDefault();

    let vino,
        vinoID;
    
    if(e.target.classList.contains('borrar-platillo')) {
        e.target.parentElement.parentElement.remove();
        vino = e.target.parentElement.parentElement;
        vinoID = vino.querySelector('a').getAttribute('data-id');
    }
    eliminarVinoLocalStorage(vinoID)
}

function vaciarCarrito(){
    while(listaVinos.firstChild){
        listaVinos.removeChild(listaVinos.firstChild);
    }
    vaciarLocalStorage();

    return false;
}

function guardarVinoLocalStorage(vino) {
    let vinos;

    vinos = obtenerVinosLocalStorage();
    vinos.push(vino);

    localStorage.setItem('vinos', JSON.stringify(vinos));
}

function obtenerVinosLocalStorage() {
    let vinosLS;

    if(localStorage.getItem('vinos') === null) {
        vinosLS = [];
    }else {
        vinosLS = JSON.parse(localStorage.getItem('vinos'));
    }
    return vinosLS;
}

function leerLocalStorage() {
    let vinosLS;

    vinosLS = obtenerVinosLocalStorage();

    vinosLS.forEach(function(vino){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${vino.imagen}" width=100>
            </td>
            <td>${vino.titulo}</td>
            <td>${vino.precio}</td>
            <td>
                <a href="#" class="borrar-platillo" data-id="${vino.id}">X</a>
            </td>
        `;
        listaVinos.appendChild(row);
    });
}

function eliminarVinoLocalStorage(vino) {
    let vinosLS;
    vinosLS = obtenerVinosLocalStorage();

    vinosLS.forEach(function(vinoLS, index){
        if(vinoLS.id === vino) {
            vinosLS.splice(index, 1);
        }
    });

    localStorage.setItem('vinos', JSON.stringify(vinosLS));
}

function vaciarLocalStorage() {
    localStorage.clear();
} 
 