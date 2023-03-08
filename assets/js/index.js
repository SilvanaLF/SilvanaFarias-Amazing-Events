//CARDS 

let tarjetas = [];
let fragment = document.createDocumentFragment();
const cardEvent = document.getElementById('card-template');

for(let cardE of dataEvents.events) {
    tarjetas.push(cardE);
};

for (let element of tarjetas) {
cardEvent.innerHTML += `<div class="col ml-5">
                <div class="card" style="width: 18rem;">
                    <img src=${element.image} alt="cine">
                    <div class="card-body">
                        <h4>${element.name}</h4>
                        <p class="card-text">${element.description}</p>
                        <p class="card-text"><small class="text-muted">${element.price}</small></p>
                        <a href="./details.html?id=${element._id}" class="btn btn details align-self-end">Details</a>
                    </div>
                </div>
            </div>`;
} 

//Checkbox & Search

//Checkbox
//Traer dinámicamente los nombres de las categorías en cada chexbox


const busqueda = document.getElementById('categories');

const newCategory =[];

for (categoria of dataEvents.events){
    newCategory.push(categoria.category);
}

const duplicateCategory = newCategory.filter((cat, indice) => {
    return newCategory.indexOf(cat) !== indice;
});

const fragment01 = new DocumentFragment();

for (let element of duplicateCategory){
    let div = document.createElement('div');
    div.innerHTML += `<div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="${element}" value=${element}>
                        <label class="form-check-label" for=${element}>${element} </label>
                    </div>`
                    
    fragment01.appendChild(div);
};

busqueda.appendChild(fragment01);

const hijos = busqueda.children;
const arrayHijos = []

const checks = document.getElementsByClassName('form-check-input')

arrayHijos.push(checks);

const arrayHijos2 = Array.prototype.slice.call(arrayHijos[0]);
const etiquetas = Array.prototype.slice.call(document.getElementsByClassName('form-check-label'));

//Escuchar eventos por categorías(filtros)

busqueda.addEventListener('click', imprimirPorConsola)
    
function imprimirPorConsola(e){
     console.log(e.target)
 }

const checkboxes = document.querySelectorAll('input[type=checkbox]');
checkboxes.forEach( checkbox  => {checkbox.addEventListener('change', verificarSeleccion)});

function verificarSeleccion(){
     let inputcheck = Array.from(checkboxes).filter(checkbox => checkbox.checked)
     console.log(inputcheck);
     let valorCategories = inputcheck.map(input => input.value)
     console.log(valorCategories);
     let eventosFiltros = dataEvents.events.filter(evento => valorCategories.includes(evento.category.split(' ').join('_')));
     console.log(eventosFiltros)
     filteredCards(eventosFiltros, cardEvent);
}

//CARDS DE CATEGORIAS FILTRADAS


function filteredCards(array, cardEvent){
    const container = cardEvent;
    container.innerHTML=''
    let fragment = document.createDocumentFragment()

    for(let element of array){
        let tarjetas = document.createElement('div');
        tarjetas.innerHTML =  `<div class="col ml-5">
        <div class="card" style="width: 18rem;">
            <img src=${element.image} alt="cine">
            <div class="card-body">
                <h4>${element.name}</h4>
                <p class="card-text">${element.description}</p>
                <p class="card-text"><small class="text-muted">${element.price}</small></p>
                <a href="./details.html?id=${element._id}" class="btn btn details align-self-end">Details</a>
            </div>
        </div>
    </div>`
    fragment.appendChild(tarjetas)
    }
    container.appendChild(fragment)
}

  

//SEARCH


const searchInput = document.getElementById("searchInput")
//console.log(searchInput)

searchInput.addEventListener('keyup', () =>{
    const textoDeBusqueda = searchInput.value
    console.log(textoDeBusqueda)
    console.log(filterTexto(textoDeBusqueda))
})

function filterTexto (textoDeBusqueda){
    if (textoDeBusqueda == '') return dataEvents.events
    let nuevoArray = dataEvents.events.filter(elemento => elemento.name.toLowerCase().includes(textoDeBusqueda.toLowerCase().trim()))
    return nuevoArray
}


//FILTROS CRUZADOS














 





