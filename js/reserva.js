
//Formulario Reserva v1.
//1) Crear un evento a nuestro formulario para almacenar los datos
//2) Capturamos los valores de cada input.
//3) Los datos capturados, lo guardamos en nuestro objeto Formulario Reserva.
//4) Creamos otro objeto llamado dateShowReserva
//5) Aca verificamos que el usuario no cree una reserva con cualquier dato.
//6) Aqui reseteamos el formulario.
//7)Aca mostramos los mensajes de reserva satisfactoria
//8) Aca agregamos un evento al button de borrar reserva
//10) Toda la informacion que obtengamos la guardamos en el localStorage.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//1) Crear un evento a nuestro formulario para almacenar los datos

document.getElementById("formulario-reserva").addEventListener("submit", function(event){
  event.preventDefault();
  //2) Capturamos los valores de cada input.

  const titularReserva = $("#titularReserva").val();
  const  email = $("#emailIngresado").val();
  const invitado1 = $("#invitado1").val();
  const invitado2 = $("#invitado2").val();
  const invitado3 = $("#invitado3").val();
  const invitado4 = $("#invitado4").val();
  const fecha = $("#date").val();
 
  //3) Los datos capturados, lo guardamos en nuestro objeto Formulario Reserva.
  var datosReserva = new FormularioReserva(titularReserva,email ,invitado1,invitado2,invitado3,invitado4,fecha);
  //4) Creamos otro objeto llamado dateShowReserva donde lo nombramos en una variable
  // MostrarDato.
  var mostrarDato = new DateShowReserva();
  //5) Aca verificamos que el usuario no cree una reserva con cualquier dato.

  if(titularReserva === '' || email === '' || invitado1 === '' || invitado2 === '' ||invitado3 === '' ||invitado4 === '' || fecha === ''){
  return mostrarDato.mostrarMensajes('Por favor, completa los campos', 'info')

  
  }


  mostrarDato.mostrarDatos(datosReserva);
  //6) Aqui reseteamos el formulario.
  mostrarDato.resetForm();

  //7)Aca mostramos los mensajes de reserva satisfactoria
  mostrarDato.mostrarMensajes("La reserva se ha creado satisfactoriamente" , 'success')
  console.log(datosReserva) ;
 
});

//8) Aca agregamos un evento al button de borrar reserva

document.getElementById('reservas-list').addEventListener("click", function(e){
  e.preventDefault();
  var mostrarDatos = new DateShowReserva();
  mostrarDatos.cancelarReserva(e.target);
});

//Guardamos en local storage


  

 
