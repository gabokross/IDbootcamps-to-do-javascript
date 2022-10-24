
const inputTarea = document.getElementById('inputTarea');
const selectPrioridad = document.getElementById('selectPrioridad');
const btnGuardar = document.getElementById('btnGuardar');
const form = document.querySelector('form')
const tareaFila = document.getElementById('tareaFila');
const selectPrioridadSearch = document.getElementById('selectPrioridadSearch');

pintarTareas();

//ENVIO DE TAREA;
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newTarea = {
        titulo: inputTarea.value,
        prioridad: selectPrioridad.value,
        idTarea: arrTareas.length + 1
    }

    arrTareas.push(newTarea);

    pintarTareas();

});

//MOSTRAR LAS TAREAS EN EL FORM;
function pintarTareas() {
    tareaFila.innerHTML = '';

    for (let tarea of arrTareas) {
        const article = document.createElement('article');

        const tituloTarea = document.createElement('h2');
        tituloTarea.innerText = `${tarea.titulo}`;

        const prioridadTarea = document.createElement('p');
        prioridadTarea.innerText = `${tarea.prioridad}`;

        article.setAttribute('class', tarea.prioridad);

        const btnBorrar = document.createElement('button');
        btnBorrar.innerText = "Borrar";
        //BORRAR TAREA;
        btnBorrar.addEventListener('click', (event) => {
            event.target.parentNode.remove();
            arrTareas = arrTareas.filter((cli) => {
                return cli.titulo !== tarea.titulo;
            });
        });

        article.append(tituloTarea, btnBorrar);

        tareaFila.append(article);

    }
}

//FILTRAR POR PRIORIDAD;
selectPrioridadSearch.addEventListener('submit', (event) => {
    event.preventDefault();

    const filtrarPrioridad = (pListaTareas, pPrioridad) => {
        const listaFiltrada = [];
        let contador = 0;

        for (let tarea of pListaTareas) {
            if (tarea.prioridad === pPrioridad) {
                listaFiltrada[contador] = tarea;
                contador++;
            }
        }
        pintarTareas(filtrarPrioridad);
    }
});
