//Crear formulario dinamico
//0) Capturar el div donde vamos a insertar el formulario.
//1) crear el formulario con su clases y sus id. 
//2) Crear su respectivos input con todo lo que quieras preguntar.
//3) Crear un boton, que al enviar sus datos se muestre en mostrarReserva.  
//4) Guardar esos datos en un arrays.

//Dejamos el formulario invisible.. Para agregarle los eventos a new reserva y mostrarReserva

$("#formulario-reserva").hide('slow')


//Vamos a capturar el boton nuevaReserva para mostrar nuestro formulario


var buttonNewReserva = $("#nuevaReserva");

buttonNewReserva.on("click", function(event){
    event.preventDefault();
    $("#formulario-reserva").show('slow');
    
    document.getElementById("formulario-reserva").reset();
    
})





