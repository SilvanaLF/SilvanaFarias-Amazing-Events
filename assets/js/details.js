//URL a Details
const queryString = location.search
console.log(queryString)
const params = new URLSearchParams(queryString)
console.log(params)
const id = params.get('id')
console.log(id)

const detailEvent = cardEvent.addEventListener.find(element => element.id == id)
console.log(detailEvent)



// const cardContainer = document.getElementById('card-detail');

// function mostrarCards(array, idContainer) {
//     const cardContainer = document.getElementById(idContainer);
//     for (let element of array){
//         cardContainer.innerHTML = ` <div class="card-detail" id="card-detail">
//         <img src=${element.image} class="card-img-top" alt="...">
//         <div class="card-body">
//             <p class="card-text">${element.description}</p>
//         </div>`
//     }
// }
