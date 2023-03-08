// Card detail URL


const queryString = location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);

const evento = dataEvents.events.find(element => element._id == id);
console.log(evento);


function mostrarCard() {
    const cardDetail = document.getElementById('detalleCard');
    let boxCard = document.createElement("div");
    boxCard.className = 'd-flex justify-content-center m-5';
    boxCard.style.flex = 'flex-column';
    boxCard.innerHTML = `<img src="${evento.image}">
    <div class="card-details d-flex flex-column gap-3 px-4 py-5">
    <h5 class="text-uppercase fw-bold">${evento.name}</h5>
    <ul class="list-unlisted d-flex flex-column gap-2">
        <li class="fs-6"><span class="fw-semibold">Date: </span>${evento.date}</li>
        <li class="fs-6"><span class="fw-semibold">Description: </span>${evento.description}</li>
        <li class="fs-6"><span class="fw-semibold">Category: </span>${evento.category}</li>
        <li class="fs-6"><span class="fw-semibold">Place: </span>${evento.place}</li>
        <li class="fs-6"><span class="fw-semibold">Capacity: </span>${evento.capacity}</li>
        <li class="fs-6"><span class="fw-semibold">Assistance: </span>${evento.assistance? evento.assistance : evento.estimate}</li>
        <li class="fs-6"><span class="fw-semibold">Price: </span>${evento.price}</li>
    </ul>
    <a href="./index.html" class="bbtn btn-details align-self-end">Back to Home</a>
    </div>`
}

mostrarCard();
   
