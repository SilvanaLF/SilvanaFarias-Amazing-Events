const actualDate = Date.parse(dataEvents.currentDate);
console.log(dataEvents.events)

let tarjetas = [];
let fragment = document.createDocumentFragment();
const cardEvent = document.getElementById('card-template');

for(let cardE of dataEvents.events) {
    if (Date.parse(cardE.date) > actualDate){
        tarjetas.push(cardE);
    }
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

//Checkboxes & Search

const busqueda = document.getElementById('categories');

const newCategory =[];

for (categoria of dataEvents.events){
    newCategory.push(categoria.category);
}

const duplicateCategory = newCategory.filter((cat, indice) => {
    return newCategory.indexOf(cat) !== indice;
});

const fragment01 = new DocumentFragment();

for (let elemento of duplicateCategory){
    let div = document.createElement('div');
    div.innerHTML += `<div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" value="option">
                        <label class="form-check-label" for="checkbox">${elemento} </label>
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

const checkboxes = document.querySelectorAll('input[type=checkbox]')

checkboxes.forEach( checkbox  => { 
     checkbox.addEventListener('change', verificarSeleccion) 
     })
function verificarSeleccion(){
     let inputheck = Array.from(checkboxes).filter(checkbox => checkbox.checked)
     console.log(inputheck);
}

console.log(etiquetas);
console.log(arrayHijos2);
console.log(tarjetas);