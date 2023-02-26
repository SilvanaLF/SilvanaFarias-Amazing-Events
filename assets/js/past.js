const actualDate = Date.parse(dataEvents.currentDate);
console.log(dataEvents.events)

let tarjetas = [];
let fragment = document.createDocumentFragment();
const cardEvent = document.getElementById('card-template');

for(let cardE of dataEvents.events) {
    if (Date.parse(cardE.date) < actualDate){
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