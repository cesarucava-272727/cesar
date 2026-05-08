/*mostrar el mensaje en consola*/
///////console.log("app.js cargado correctamente");

/*
1. se crea la contante llamada panel
2. document = instanciado el documento
3. getElementById = es una instancia de una funcion para los tipos id
4. se muestra en consola
5. textContent: muestra ek contenido del html para el id=panel-ticket
*/
// const panel = document.getElementById("panel-ticket");
// console.log(panel.textContent);

/*Se modifica el texto de la etiqueta seleccionada*/
// panel.textContent = "Cargando Tickets...."

/*
reemplazamos todas las etiquetas html
innerHTML = propiedad de JavaScript en el DOM que permite obtener o establecer el marcado HTML contenido dentro de un elemento
*/
// panel.innerHTML = "<div>Sin ticket</div>"

/* Eventos*/

/* 
1. se crea la contante llamada boton
2. se asigna a esta constante el id = btn-crear
3. se muestra en consola el resultado al usar el evento click
    3.1 addEventListener = método en JavaScript que registra un controlador de eventos a un elemento específico del DOM (como un botón o div) sin sobrescribir controladores existentes.
    3.2 tiene 2 argumentos primero el tipo de evento, segundo la funcion que se va a ejecutar
*/
///////const boton = document.getElementById("btn-crear");

//////boton.addEventListener("click",function(){
//////    console.log("click realizado")
//////}
//////)

/*
1. se crea la contante llamada form
2. se asigna a esta constante el id = form-ticket
3. se muestra en consola el titulo que se ingrese en el formulario en el text titulo
4. denteo del form se crea otra constante llamda tiutlo donde se almacena el valor que se ingresa en el text titulo
preventDefault(): toma la primera fila de la variable
*/
//////const form = document.getElementById("form-ticket");

//////form.addEventListener("submit",function(e){
//////    e.preventDefault();
//////    const titulo = document.getElementById("input-titulo").value;
//////    console.log("El titulo es: ", titulo)
//////});

/*
1. se crea la contante llamada btnCrear
2. se asigna a esta constante el id = btn-crear
3. cuando se de click se muestra en consola al dar click en el boton crear ticket
4. se crea la contante llamada formTicket
5. se asigna a esta constante el id = form-ticket
6. cuando se hace submit en el formulario y dar click el boton se muestra el mensaje Formulario enviado
7. luego tambien para la prioridad y descripcion
8. 
*/


// /*---------Ejercicio 1:Crear y leer un objeto ticket----------------------------*/
// console.log("Ejercicio 01:Crear y leer un objeto ticket");
// /*1 Declarar el objeto
// En app.js declarar un objeto ticket con 4 propiedades: titulo, prioridad,
// estado, numero. */
// let ticket = {
//     titulo: "error en login",
//     prioridad: "alta",
//     estado: "nuevo",
//     numero: 1
// }

// /*2 Mostrar en consola
// Usar console.log() para mostrar cada propiedad por separado en la consola.
// */
// console.log('titulo:    ' + ticket.titulo);
// console.log('prioridad: ' + ticket.prioridad);
// console.log('estado:    ' + ticket.estado);
// console.log('numero:    ' + ticket.numero);

// /*3 Modificar estado
// Cambiar ticket.estado a "En curso" y volver a mostrar en consola.
// */
// ticket.estado="En curso";
// console.log('Nuevo estado:    ' + ticket.estado);

// /*4 Mostrar en HTML
// Mostrar ticket.titulo en un parrafo del HTML usando getElementById +
// textContent.
// */
// //aca se agrega en id="titulo-ticket"" que es el parrafo que se agrego en el html
// document.getElementById("titulo-ticket").textContent = ticket.titulo

// /*----------Ejercicio 2:Arreglo de tickets + forEach----------------------------*/
// console.log("Ejercicio 02:Arreglo de tickets + forEach");
// /*
// 1 Crear el arreglo
// Declarar un arreglo tickets con 2 objetos, cada uno con titulo, prioridad y
// estado.
// */
// let ticketsA = [
//     { titulo: "Error de login", prioridad: "Alta", estado: "Nuevo" },
//     { titulo: "Lentitud Web", prioridad: "Media", estado: "En curso" }
// ]

// /*
// 2 Recorrer con forEach
// Usar forEach para mostrar en consola: "Ticket: [titulo] — Estado: [estado]".
// */
// ticketsA.forEach(function(p){
//     console.log("Ticket: " + p.titulo + " - Estado: " + p.estado);
// });

// /*
// 3 Agregar con push
// Agregar un tercer ticket con push() y volver a recorrer el arreglo.
// */
// //Agregar un tercer ticket con push()
// ticketsA.push(
//     {
//         titulo: "Sin acceso a email",
//         prioridad: "Alta",
//         estado: "nuevo"
//     }
// );
// //volver a recorrer el arreglo y solo muestro los titulos
// ticketsA.forEach(function(p){
//     console.log(p.titulo);
// });

// /*
// 4 Mostrar total en HTML
// Mostrar tickets.length en un parrafo del HTML con id="total".
// */
// document.getElementById("Total").textContent = ticketsA.length;

/*--------Ejercicio 3:crearTarjeta() — tarjeta dinamica real----------------------------*/

//creando un arreglo vacio
let ticketsT = [];
//creando  la variable indiceEditando inicializada con valor null
let indiceEditando = null;

//se crea la funcion mostrarExito
function mostrarExito(msg){
    let el = document.getElementById("msg-exito");//se crea la variable el donde se va almancenar el mensaje de error que esta en eñ index en id=""msg-exito"

    el.textContent = msg; // se guerda en la varibel let el mensaje que este recibiendo
    el.style.display = "block"; //el estilo se vuelve visible

    //funcion par quen despiues de un tiempo desaparesca
    setTimeout( //timer
        function(){
            el.style.display = "none"; //dentro de la funcion que hace en este caso que se oculte
        }
        , 3000 //tiempo
    )
}

//funcion para limpiar las tarjetas
function renderizarTodos(){
    document.getElementById("panel-tickets").innerHTML = "";

    ticketsT.forEach(function(t, i){
        crearTarjeta(t, i);
    });
}


//creamos la funcion para el error
function mostrarError(msg){
    let el = document.getElementById("msg-error");//se crea la variable el donde se va almancenar el mensaje de error que esta en eñ index en id=""msg-error"
    el.textContent = msg; // se guerda en la varibel let el mensaje que este recibiendo
    el.style.display = msg ? "block" : "none" //hacer que el mensaje este visible ya que en index esta oculto
}                                             //si no hay error se oculta sino hay mensaje y se muestra

//para los estados
function getBadgesClass(estado){
    // if (estado === "Nuevo"){
    //     return "badge badge--new"
    // }else if(estado === "En Curso"){
    //     return "badge badge--active"
    // }else if(estado === "Urgente"){
    //     return "badge badge--urgent"
    // }else if(estado === "Resuelto"){
    //     return "badge badge--closed"
    // }else{
    //     return "badge badge--closed"
    // }

    if(estado === "Nuevo") return "badge badge--new"
    if(estado === "En Curso") return "badge badge--active"
    if(estado === "Urgente") return "badge badge--urgent"
    if(estado === "Resuelto") return "badge--done"
    return "badge badge--closed" //si no entra a niguna de las opciones
    
}


//creamos la funcion actualizarContador que va ser que que el id=contador que tiene el valor
//que se asigno de 0 tome ahora el valor dela arreglo ticketsT
function actualizarContador(){
    document.getElementById("contador").textContent = ticketsT.length
}

//creamos una funcion de nombre "crearTarjeta"
//la funcion va recibir ahora 2 parametros parametro1, indice
function crearTarjeta(parametro1, indice){
    //declaramos la variable llamada div y se crea con createElement un div que aun esta en memoria
    let div = document.createElement("div");
    //asigno al div que ya es un elemento una clase que se llamara "tarjeta"
    div.className = "tarjeta";
    //asigno al div que ya es un elemento otra clase que se llamara "ticket"
    div.className = "ticket";
    // a que se almacemar el valor del indice que se almacena en el div
    div.dataset.indice = indice
    //para agregar el contenido del div para eso se utiliza rl "innerHTML"
    //vamos agregar el titulo,estado y prioridad
    //en la propiedad hacemos uso de la funcion getBadgesClass
    //se crea el boton eliminar
    div.innerHTML = `
        <h3>${parametro1.titulo}</h3>
        <p> 
             ${parametro1.descripcion}
        </p>
        <span class="${getBadgesClass(parametro1.estado)}"> ${parametro1.estado} </span> 
        <p><strong> Prioridad:</strong> ${parametro1.prioridad} </p>

        <button class="btn-eliminar">Eliminar</button>
        <button class="btn-editar">Editar</button>
    `;

    //cuando se ejecuta el evento click del boton eliminar
    //el queryselector es como el getElementById
    div.querySelector(".btn-eliminar").addEventListener("click", function(){
        let ok = window.confirm("¿Estas seguro que deseas eliminar este ticket?") //se crea la variable ok donde se va preguntar si se desea eliminar el ticket
        
        if(!ok) return; //preguntamos si en la variable ok esta vacio o no
        
        let pos = parseInt(div.dataset.indice); //recupeamos el indice del elemento con la funcion pareInt y se guarda en la variable pos
        ticketsT.splice(pos,1); // splice elimina un elemento del arreglo de la posicion que se le indique
        actualizarContador(); // se actualiza el contador 
        div.remove(); // quita el elemento de la parte visual del html
    });

    //cuando se ejecuta el evento click del boton editat
    div.querySelector(".btn-editar").addEventListener("click",function(){
        let pos = parseInt(div.dataset.indice); //posicion

        //reprobar el formulario con los datos del ticket seleccionado en sus etiquetas
        document.getElementById("input-titulo").value = ticketsT[pos].titulo;
        document.getElementById("input-descripcion").value = ticketsT[pos].descripcion;
        document.getElementById("input-prioridad").value = ticketsT[pos].prioridad;
        document.getElementById("input-estado").value = ticketsT[pos].estado;

        indiceEditando = pos; //en la variable se guarda la poscicion del elemento

        //la etiqueta del ticket se reemplaza por el texto gaurdar cambios y el color
        document.getElementById("btn-crear").textContent = "Guardar Cambios";
        document.getElementById("btn-crear").style.backgroundColor = "#854F0B";

        //haciendo un scroll automatico hacia arriba
        document.getAnimations("form-ticket").scrollIntoView({ behavior: "smooth" })
    });

    //para que se visualice en pantalla con "appendChild" es el hijo en este cado div que se vere en el id = "contenedor-tickets"
    document.getElementById("panel-tickets").appendChild(div); //en la clase 7 se cambio de contendor-ticket se cambio a penal-ticket
}
//todo lo anterior se va ejecutar cuando se ejecute el elemento submit



const formTicket = document.getElementById("form-ticket");

formTicket.addEventListener("submit",function(e){
    e.preventDefault();

    //se crea una varible llamada tiutlo donde se va a guardar el valor del label input titulo
    let titulo = document.getElementById("input-titulo").value;

    //se llama a la funcion del mensaje de error
    if(titulo.trim() === ""){
        mostrarError("El titulo no puede estar vacio.");
        // alert("El titulo no puede estar vacio.")
        return;
    }

    mostrarError("");

    //validando a atravez de la variable si es un nuevo o se edita
    if(indiceEditando !== null){
        //MODO EDICION
        //actualizamos en el arreglo con los valores del indice
        ticketsT[indiceEditando].titulo = titulo;
        ticketsT[indiceEditando].descripcion = document.getElementById("input-descripcion").value;
        ticketsT[indiceEditando].estado = document.getElementById("input-estado").value;
        ticketsT[indiceEditando].prioridad = document.getElementById("input-prioridad").value;
        
        
        // //actualziamos la parte visual en las tarjetas
        // document.getElementById("panel-tickets").innerHTML = "";
        // //recorremos el arreglo de tickets
        // ticketsT.forEach(function(t, i){
        //     crearTarjeta(t, i);
        // });   

        renderizarTodos();
        
        indiceEditando = null; //volviendo la variable indiceEditando a null
        document.getElementById("btn-crear").textContent = "Crear Ticket"; //volviendo el nombre del titulo a crear ticket
        document.getElementById("btn-crear").style.backgroundColor = ""; //el color vuelve
        mostrarExito("Ticket actualizado correctamente."); //que se muestre el mensaje de exito
    }else{
        //MODO GUARDAR
        //creo el objeto llamado "nuevoTicket"
        let nuevoTicket = {
            titulo: titulo,
            descripcion: document.getElementById("input-descripcion").value,
            estado: document.getElementById("input-estado").value,
            prioridad: document.getElementById("input-prioridad").value
        };

        //agregando el objeto "nuevoTicket" al arreglo que se creo vacio "ticketsT" con el metodo push
        ticketsT.push(nuevoTicket);
        //creo una nueva tarjeta enviado nuestr0 objeto llamado "nuevoTicket" (se vea se visualice)
        //para obtener la posicion del arreglo en indice(tickets.length - 1)
        crearTarjeta(nuevoTicket, ticketsT.length - 1);
    
        //aca se coloca la funcion para que vaya actualizando el contador
        actualizarContador();
    }
 
    //esta linea permite limpiar el formulario atreves del parametro e
    e.target.reset();
});

//para el boton limpiar que cuando el vento se click
document.getElementById("btn-limpiar").addEventListener("click",function(){

    ticketsT = []; //limpie el arreglo
    document.getElementById("panel-tickets").innerHTML = ""; //borrar vizualmente las tarjetas que se han creado
    actualizarContador(); //actua
});


/*--------------crearTarjeta() — tarjeta dinamica real----------------------------*/




// const btnCrear = document.getElementById("btn-crear");

// btnCrear.addEventListener("click", function(){
//     console.log("Botón Clickeado");
// });

// const formTicket = document.getElementById("form-ticket");

// formTicket.addEventListener("submit",function(e){
//     e.preventDefault();
//     const titulocapturado = document.getElementById("input-titulo").value;
//     const prioridadCapturada = document.getElementById("input-prioridad").value;
//     //const descripcionCapturada = document.getElementById("input-descripcion").value;

//     console.log("Titulo: ", titulocapturado);
//     console.log("Prioridad: ", prioridadCapturada);
//     //console.log("Descripcion: ", descripcionCapturada);

//     /* 
//     en la constante descripcionCapturada se almance el id input-descripcion
//     y luego en la constante descripcionCapturada con textContent se muestra el valor 
//     de lo que se almaceno en la constante tituloCapturado
//     */
//     const descripcionCapturada = document.getElementById("input-descripcion");
//     descripcionCapturada.textContent = titulocapturado;
                                       
// });



