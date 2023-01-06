const tareaInput = document.getElementById("todo-input")
const agregaTarea = document.getElementById("add-todo")
const totalCount = document.getElementById("total-count")
const doneCount = document.getElementById("done-count")
const todoList = document.getElementById("todo-list")
const doneList = document.getElementById("done-list")

const list = [
    {
        tarea: "Ir al gimnasio",
        completada: 0
    },{
        tarea: "Comprar en el supermercado",
        completada: 0
    },{
        tarea: "Pasear al perro",
        completada: 0
    }
]

function renderList(){
    var htmlTodo = ""
    var htmlDone =""
    list.forEach( (val,index) => {
        if(val.completada === 0){
            htmlTodo += `
        <li>
            <p>${index}</p>
            <input type="checkbox" onclick="completarTarea(${index})" ${val.completada ? "checked" : "unchecked"}>
            <h4>${val.tarea}</h4>
            <span class="delete-button" onclick="eliminarTarea(${index})">X</span>
        </li>`
        }
        else{
            htmlDone += `
        <li>
            <p>${index}</p>
            <input type="checkbox" onclick="completarTarea(${index})" ${val.completada ? "checked" : "unchecked"}>
            <h4>${val.tarea}</h4>
            <span class="delete-button" onclick="eliminarTarea(${index})">X</span>
        </li>`
        }
    })
    totalCount.textContent = list.length
    doneCount.textContent = list.filter(todo => todo.completada).length
    todoList.innerHTML = htmlTodo
    doneList.innerHTML = htmlDone
}

function agregarTarea(){
    todo = tareaInput.value
    if (todo === "")
    {
        alert("No se ingreso ninguna tarea")
        return
    }
    list.push({
        tarea: todo,
        completada: 0
    })
    tareaInput.value = ""
    renderList()
}

function completarTarea(id){
    list[id].completada = list[id].completada ? 0 : 1
    renderList()
}

function eliminarTarea(id){
    list.splice(id,1)
    renderList()
}

renderList()

agregaTarea.addEventListener("click", agregarTarea)