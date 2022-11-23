
// Variables
const form = document.querySelector("#form")
const nuevaTarea = document.querySelector("#nuevaTarea");
const totalTareas = document.querySelector("#quantity");
const tareasRealizadas = document.querySelector("#realizadas");
const listaTareas = document.querySelector("#listaTareas")
const checkElement = document.querySelector("#form").checkbox;

// Arreglo de objetos "tareas"
let tareas = [
    { nombre: "Hacer mercado", quantity: 1, id: Date.now() + 1 },
    { nombre: "Estudiar para la prueba", quantity: 2, id: Date.now() + 2 },
    { nombre: "Sacar a pasear a Tobby", quantity: 3, id: Date.now() + 3 },
]


// Render
const render = (_array) => {
    listaTareas.innerHTML = ""
    tareas.forEach(tarea => {
        listaTareas.innerHTML += `
        <li>
        ${tarea.quantity}
        - ${tarea.nombre}
         <input id="checkElement" data-checkbox type="checkbox">
         <button data-eliminar="${tarea.id}">X</button>
         </li>`;
    });
    totalTareas.innerHTML = `Total: ${tareas.length}`;
}
render(tareas);


// Creando evento submit al botón
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const tarea = nuevaTarea.value;
    tareas.push({
        nombre: tarea,
        quantity: 1,
        id: Date.now(),
    });

    if (tarea === "") {
        alert("Debes agregar alguna tarea");
    }

    render(tareas)
});

// Delegación de eventos
listaTareas.addEventListener("click", (e) => {
    if (e.target.dataset.eliminar) {
        const deleteTask = e.target.dataset.eliminar
        const newArrayFilter = tareas.filter((tarea) => tarea.id != +deleteTask);

        tareas = newArrayFilter;

        render(newArrayFilter)
    }

    if (checkElement.checked) {
        const checkTask = e.target.dataset.checkbox

        const newArrayUpdate = tareas.map((tarea) => tarea.id !== +checkTask);

        tarea = newArrayUpdate;
        render(newArrayUpdate);
    }

});