//STATS

const tableC = document.getElementById("cont-table")

const traerDatos = async () => {
    try {
        const response = await fetch('https://mindhub-xj03.onrender.com/api/amazing')
        let data = await response.json()


        const pastEvents = data.events.filter(event => event.date < data.currentDate)
        const upEvents = data.events.filter(event => event.date > data.currentDate)

        const capacity = pastEvents.reduce((a, b) => a.capacity > b.capacity ? a : b)
        const assistanceH = pastEvents.reduce((a, b) => (a.assistance / a.capacity * 100) < (b.assistance / b.capacity * 100) ? a : b)
        const assistanceM = pastEvents.reduce((a, b) => (a.assistance / a.capacity * 100) > (b.assistance / b.capacity * 100) ? a : b)

        //UPCOMING EVENTS//

        const categoryUp = upEvents.map(event => event.category)
        const categoryFirstUp = [...new Set(categoryUp)]
        const ingresoUp = ingreso(upEvents, categoryFirstUp)
        const assistanceUpData = assistanceUp(upEvents, categoryFirstUp)

        //PAST EVENTS//

        const categoryPast = pastEvents.map(event => event.category)
        const categoryFirstPast = [...new Set(categoryPast)]
        const ingresoPast = ingreso(pastEvents, categoryFirstPast)
        const assistancePastData = assistancePast(pastEvents, categoryFirstPast)


        let table = crearTabla(assistanceH, assistanceM, capacity)
        let tableA = crearTablaStat(categoryFirstUp, ingresoUp, assistanceUpData)
        let tableB = crearTablaPast(categoryFirstPast, ingresoPast, assistancePastData)

        let tableX = table + tableA + tableB
        tableC.innerHTML = tableX
    }
    catch (error) {
        console.error('Error al traer datos');
    }
}
traerDatos()


//FUNCIONES

function crearTabla(assistanceUp, assistanceM, capacityM) {
    return `<table>
    <thead>
    <tr class="title-stats">
    <th scope="col" colspan="3" class="title-table1">Event statistics</th>
    </tr>
    <tr>
    <th>Event with the highest persentage of attendance</th>
    <th>Event with the lowest percentage of attendance</th>
    <th>Event with larger capacity</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <th>${assistanceM.name} ${(assistanceM.assistance / assistanceM.capacity * 100).toFixed(2)}%</th>
    <th>${assistanceUp.name} ${(assistanceUp.assistance / assistanceUp.capacity * 100).toFixed(2)}%</th>
    <th>${capacityM.name} ${capacityM.capacity}</th>
    </tr>
    </tbody>
    </table>
    `
}


function ingreso(lists, noRepeat) {
    let ingreso = [];
    for (let i = 0; i < noRepeat.length; i++) {
        let earn = 0;
        for (let list of lists) {
            if (list.category === noRepeat[i]) {
                if (list.estimate !== undefined) {
                    earn += list.price * list.estimate
                } else {
                    earn += list.price * list.assistance
                }
            }
        }
        ingreso.push(earn);
    }
    return ingreso;
}


function assistanceUp(lists, noRepeat) {
    let percentage = []
    for (let i = 0; i < noRepeat.length; i++) {
        let estimateT = 0
        let capacityT = 0
        for (let list of lists) {
            if (list.category === noRepeat[i]) {
                estimateT += list.estimate
                capacityT += list.capacity
            }
        }
        percentage.push(estimateT / capacityT * 100)
    }
    return percentage
}


function assistancePast(lists, noRepeat) {
    let percentage = []
    for (let i = 0; i < noRepeat.length; i++) {
        let assistanceT = 0
        let capacityT = 0
        for (let list of lists) {
            if (list.category === noRepeat[i]) {
                capacityT += (list.capacity)
                assistanceT += (list.assistance)
            }
        }
        percentage.push(assistanceT / capacityT * 100)
    }
    return percentage
}


function crearTablaStat(noRepeat, ingreso, assistanceP) {
    let stat = statistics(noRepeat, ingreso, assistanceP);

    return `
    <table>
    <thead>
    <tr class="title-stats">
    <th colspan="3">Upcoming events statistics by category</th>
    </tr>
    <tr>
    <th>Categories</th>
    <th>Revenues</th>
    <th>Persentage of attendance</th>
    </tr>
    </thead>
    <tbody>
    ${stat}
    </tbody
    </table>
    `
}


function crearTablaPast(noRepeat, ingreso, assistanceP) {
    let stat = statistics(noRepeat, ingreso, assistanceP);

    return `<table>
    <thead>
    <tr class="title-stats">
      <th colspan="3">Past Events statistic by category</th>
    </tr>
    <tr>
      <th>Categories</th>
      <th>Revenues</th>
      <th>Percentage of attendance</th>
    </tr>
    </thead>
    <tbody>
    ${stat}
  </tbody>
  </table>`;
}


function statistics(noRepeat, ingreso, assistanceP) {
    let statistics = ""
    for (let i = 0; i < noRepeat.length; i++) {
        statistics += `
        <tr>
        <td>${noRepeat[i]}</td>
        <td>$${ingreso[i]}</td>
        <td>${assistanceP[i].toFixed(2)}%</td>
        </tr>
        `
    }
    return statistics
}