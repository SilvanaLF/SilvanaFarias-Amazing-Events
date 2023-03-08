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
    let boxCard = document.createElement('div')
    boxCard.classList.add("card")
    boxCard.classList.add("mt-3", "mb-3")
    boxCard.style.width = "18rem"
    boxCard.innerHTML = `<img src="${evento.image}" class="card-img-top" style="height: 150px" alt="Cinema">
    <div class="card-body d-flex flex-column justify-content-center">
    <h3 class="card-title">${evento.name}</h3>
    <p>Date: ${evento.date}</p>
    <p class="card-text">${evento.description}</p>
    <p>Place: ${evento.place}</p>
    <p>Price: ${evento.price} u$d</p>
    <a href="./index.html" class="btn btn-dark nav-item p-2 me-1 ms-1 mb-1"
        style="color: #d63384; background-color: #ededf2">Back</a>
    </div>`

    document.body.appendChild(boxCard);
}

mostrarCard();
   
