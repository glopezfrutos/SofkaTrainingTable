// Variables
let rowId = 0;
let columnId = 0;

// crear elementos

// Botón de Agregar fila
let btnAddRow = document.createElement('button') // <input>
btnAddRow.setAttribute('type', 'button') // 
btnAddRow.setAttribute('name', 'btnAddRow')
btnAddRow.setAttribute('class', 'btn btn-primary')
btnAddRow.textContent = 'Agregar fila'

// agregar el nodo a la pagina (body)
document.body.insertAdjacentElement("afterbegin", btnAddRow)

// eventos
const table = document.getElementById("table");
btnAddRow.addEventListener('click', () => {
    // Crear tr
    let newRow = document.createElement('tr')
    newRow.setAttribute('id', rowId)
    // Crear th
    let newColumnTh = document.createElement('th')
    newColumnTh.setAttribute('scope', 'row')
    newColumnTh.textContent = rowId
    // Crear td
    let newColumnTd1 = document.createElement('td')
    newColumnTd1.textContent = rowId
    let newColumnTd2 = document.createElement('td')

    // Crear botón de eliminar
    let btnDelRow = document.createElement('button') // <input>
    btnDelRow.setAttribute('type', 'button') // 
    btnDelRow.setAttribute('name', 'btnDelRow')
    btnDelRow.setAttribute('class', 'btn btn-danger')
    btnDelRow.innerHTML = '<i class="fa-solid fa-trash"></i>'
    // Acción del botón
    btnDelRow.addEventListener('click', () => {
        newRow.remove()
    })
    // Agregar el botón
    newColumnTd2.appendChild(btnDelRow)

    table.appendChild(newRow)
    let row = document.getElementById(rowId)
    row.appendChild(newColumnTh)
    row.appendChild(newColumnTd1)
    row.appendChild(newColumnTd2)
    
    rowId++
})



