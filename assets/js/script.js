

const taskInput = document.getElementById("tarea-input");
const addTaskBtn = document.getElementById("add-tarea-btn");
const taskListContainer = document.getElementById("tarea-list-container");
const totalSpan = document.getElementById("total-span");
const completedSpan = document.getElementById("completed-span");
const incompletedSpan = document.getElementById("incompleted-span");
const doneCheckInput = document.getElementById("done-check");
const tasksThead = document.getElementById("tarea-thead");
const todayDate = document.getElementById("today-date");
const taskArray = [
    { id: 1, taskName: "Hacer mercado", taskDone: false },
    { id: 2, taskName: "Estudiar para la prueba", taskDone: false },
    { id: 3, taskName: "Sacar a pasear a Tobby", taskDone: false },
];
let doneArray = [];
let taskIdCounter = taskArray[taskArray.length - 1].id;
let sortByIdFlag = false;
let sortByTaskFlag = true;

// FUNCIONES


const getHtmlTaskList = () => {
    let flag;
    html = "";

    taskArray.forEach((task) => {
        doneCheckInput.checked ? (flag = true) : (flag = !task.taskDone);
        if (flag) {
            html += `
        <div class="tarea-box" id="${task.id}">
            <input type="checkbox" name="tarea-check" ${
                task.taskDone ? "checked" : ""
            }/>
            <div class="tarea-id">${task.id}</div>
            <div class="tarea-name">${task.taskName}${
                task.taskDone
                    ? '<span class="completed-tarea"> - Completed</span>'
                    : ""
            }</div>
            <i class="fa-regular fa-trash-can"></i>
        </div>
        `;
        }
    });
    return html;
};

// Agrega una tarea y limpia el input.
const addTask = () => {
    const newTask = {
        id: ++taskIdCounter,
        taskName: escapeHTML(taskInput.value),
        taskDone: false,
    };
    taskArray.push(newTask);
    renderTaskList();
    taskInput.value = "";
};

// Elimina una tarea
const deleteTask = (id) => {
    const index = taskArray.findIndex((element) => element.id == id);
    taskArray.splice(index, 1);
    renderTaskList();
};

// Actualiza el estados de los totales (total, Completadas, No completadas)
const setTotals = () => {
    totalSpan.innerHTML = taskArray.length;
    completedSpan.innerHTML = doneArray.length;
    incompletedSpan.innerHTML = taskArray.length - doneArray.length;
};

// Obtiene un array con las tareas completadas.
const setDoneArray = () => {
    doneArray = taskArray.filter((element) => {
        return element.taskDone === true;
    });
};

// Renderiza las tareas y actualiza los totales.
const renderTaskList = () => {
    taskListContainer.innerHTML = getHtmlTaskList();
    setDoneArray();
    setTotals();
};

// Actualiza la propiedad de "taskDone" en el arreglo de tareas (true/false).
const toggleDone = (id, state) => {
    const index = taskArray.findIndex((element) => element.id == id);
    taskArray[index].taskDone = state;
};

// Establece el texto que ingresa por el input sin formato.
const escapeHTML = (html) => {
    const div = document.createElement("div"); // creamos un div provisional.
    div.textContent = html; //Establecemos el input como texto sin formato.
    return div.innerHTML; //Retornamos el contendido del div que establecimos como texto sin formato.
};

// Retorna la fecha de hoy en formato "'DiaSemana', 'Dia' de 'Mes' de 'Año'"
const setDate = () => {
    let meses = new Array(
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    );
    let diasSemana = new Array(
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado"
    );
    let f = new Date();

    return (
        diasSemana[f.getDay()] +
        ", " +
        f.getDate() +
        " de " +
        meses[f.getMonth()] +
        " de " +
        f.getFullYear()
    );
};


// Agrega una nueva tarea
addTaskBtn.addEventListener("click", () => {
    if (taskInput.value !== "") {
        addTask();
    }
});

// Elimina una tarea o la marca completada/no completada
taskListContainer.addEventListener("click", (e) => {
    if (e.target) {
        const parentId = e.target.parentNode.id;
        if (e.target.tagName === "I") {
            deleteTask(parentId);
        }
        if (e.target.tagName === "INPUT") {
            e.target.checked
                ? toggleDone(parentId, true)
                : toggleDone(parentId, false);
            renderTaskList();
        }
    }
});

// Ordena las tareas por ID o por Task, creciente y decreciente.
tasksThead.addEventListener("click", (e) => {
    if (e.target && e.target.id === "id-sort-btn") {
        if (sortByIdFlag === true) {
            taskArray.sort((a, b) => a.id - b.id);
            renderTaskList();
            sortByIdFlag = false;
        } else {
            taskArray.sort((a, b) => b.id - a.id);
            renderTaskList();
            sortByIdFlag = true;
        }
    }
    if (e.target && e.target.id === "tarea-sort-btn") {
        if (sortByTaskFlag === true) {
            taskArray.sort((a, b) => a.taskName.localeCompare(b.taskName));
            renderTaskList();
            sortByTaskFlag = false;
        } else {
            taskArray.sort((a, b) => b.taskName.localeCompare(a.taskName));
            renderTaskList();
            sortByTaskFlag = true;
        }
    }
});

// Muestra u oculta las tareas completadas.
doneCheckInput.addEventListener("click", (e) => {
    if (e.target && e.target.name === "done-check") {
        renderTaskList();
    }
});

// Renderizamos las tareas por defecto y seteamos la fecha de hoy.
renderTaskList();
todayDate.innerHTML = setDate();
