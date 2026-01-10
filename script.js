const form = document.getElementById("form-tarea");
const tarea = document.getElementById("tarea");
const lista = document.getElementById("lista");

// Agregar tarea
function agregarTarea(textoTarea) {
    const texto = textoTarea.trim();
    if (texto === "") return false;

    const li = document.createElement("li");
    
    // Texto de la tarea
    const span = document.createElement("span");
    span.textContent = texto;
    span.className = "texto-tarea";
    
    // Botón eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "×"; 
    btnEliminar.className = "btn-eliminar";
    btnEliminar.setAttribute("aria-label", "Eliminar tarea");

    btnEliminar.addEventListener("click", () => {
        li.remove();
    });

    span.addEventListener("click", () => {
        if (li !== lista.firstElementChild) {
            lista.prepend(li);
        }
    });

    li.appendChild(span);
    li.appendChild(btnEliminar);
    lista.prepend(li);
    
    return true;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (agregarTarea(tarea.value)) {
        tarea.value = "";
        tarea.focus(); 
    }
});