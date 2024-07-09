 
 
 let tareas = [
     {
         id:1719789697085,
         tarea: "Limpiar la cocina",   
         completada: false, 
     },
     {
         id:1719789735779,
         tarea: "Llamar al gasfiter",
         completada: false,      
     },
     {
         id:1719789750718,
         tarea: "Enviar informe", 
         completada: false,     
     },
 ];

const tareasPorHacer = document.getElementById('tabla')
const btn = document.getElementById('agregar')
const tareaInput = document.getElementById('tarea')



const mostrarTareas = ()=> {
    let temp = "";
    let totalTareas= tareas.length;
    let tareasRealizadas = tareas.filter(tarea=> tarea.completada).length;
    tareas.forEach(tarea => {
        let estilo = tarea.completada ? 'color: green;' : '';
        
        temp += 
        ` <tr>
            <td>${tarea.id}</td>
            <td style="${estilo}">${tarea.tarea}</td>
            <td><button onclick="completarTarea(${tarea.id})">Completar</button></td>
            <td><button onclick="borrarTarea(${tarea.id})">Borrar</button></td>
        </tr>`;
    });

    tareasPorHacer.innerHTML = temp;
    document.getElementById('total').textContent =` total: ${totalTareas}`;
    document.getElementById('realizadas').textContent = `Realizadas: ${tareasRealizadas}`;
}

function completarTarea(id) {
    const tarea = tareas.find(tarea => tarea.id === id)
    if(tarea) { 
        tarea.completada = true;
        mostrarTareas()
}}

function borrarTarea(id) {
    const index = tareas.findIndex(tarea => tarea.id === id)
    tareas.splice(index,1)
    mostrarTareas()
}


function crearTarea(){
    const nuevaTarea = {
        id:Date.now(),
        tarea: tareaInput.value,
        completada:false
    }
    tareas.push(nuevaTarea)
    tareaInput.value = ''

}

btn.addEventListener('click', ()=> {
    crearTarea(),
    mostrarTareas()
})


document.addEventListener('DOMContentLoaded', mostrarTareas);












