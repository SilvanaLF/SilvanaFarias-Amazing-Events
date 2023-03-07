//Cards

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
                        <button type="button" class="btn btn-outline-success">Link</button>
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

const checkboxes = document.querySelectorAll('input[type=checkbox]');
console.log(checkboxes)

checkboxes.forEach( checkbox  => {checkbox.addEventListener('change', verificarSeleccion)});

function verificarSeleccion(){
     let inputcheck = Array.from(checkboxes).filter(checkbox => checkbox.checked)
     console.log(inputcheck);
     let valorCategories = inputcheck.map(input => input.value)
     console.log(valorCategories);
     let eventosFiltros = dataEvents.events.filter(evento => valorCategories.includes(evento.category));
     console.log(eventosFiltros)
}

// console.log(etiquetas);
// console.log(arrayHijos2);
// console.log(tarjetas);

//Search - Revisar

// // Obtener la lista de eventos, el elemento de entrada de búsqueda y el botón de búsqueda
// const eventList = document.getElementById('event-list');
// const searchInput = document.getElementById('search-input');
// const searchButton = document.getElementById('search-button');

// // Agregar evento de clic en el botón de búsqueda
// searchButton.addEventListener('click', () => {
//   // Obtener el texto ingresado en el campo de búsqueda
//   const searchText = searchInput.value.toLowerCase();

//   // Iterar a través de cada evento en la lista
//   eventList.querySelectorAll('.event').forEach(event => {
//     // Obtener el nombre del evento
//     const eventName = event.getAttribute('data-name').toLowerCase();

//     // Comprobar si el nombre del evento contiene el texto de búsqueda
//     if (eventName.includes(searchText)) {
//       // Mostrar el evento si coincide con la búsqueda
//       event.style.display = 'block';
//     } else {
//       // Ocultar el evento si no coincide con la búsqueda
//       event.style.display = 'none';
//     }
//   });
// });


 





