//Carpeta de mostrar Mensajes
//1) Creamos un objeto dateShowReserva
//2) Creamos funciones para cada paso. (mostrar datos, resetear formulario, cancelar reserva y mostrarMensajes.)
//3)Mostrar datos:
//3.1)Capturo el div donde muestro los mensajes.
//3.2)Creo lo que deseo mostrar en mi html.
//3.3)Aca insertamos el div al html.
//4) resetear formulario:
//5) Borrar reserva:
//5.1)//Lo que hago aca, es buscar el name borrar, y borro a 2 de sus elementos padres.
//6)MostrarMensajes:
//6.1)Aca lo que hago es crear un div y agregarle una class de alert.
//6.2)Aca inserto el div.
//6.3)Aca muestro mi div en la class container de mi html, y le digo que lo inserte antes
//De que yo cree mi app reservas.
//6.5)Aca le muestro el tiempo que va a tardar en remover el msj.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







//1) Creamos un objeto dateShowReserva

class DateShowReserva{
//2) Creamos funciones para cada paso. (mostrar datos, resetear formulario, cancelar reserva y mostrarMensajes.)
//3)Mostrar datos:
    mostrarDatos(datosReserva){
        //Capturo el div donde muestro los mensajes.
        const showDate = $("#reservas-list");

        //Creo un div con la class de bootstrap.
        const crearDiv = jQuery("<div></div>");
        crearDiv.attr("class","card text-center mb-4");
        //Creo lo que deseo mostrar en mi html.
        crearDiv.html(`
        

            <div class = "card-body">
                <strong>Nombre del titular</strong>: ${datosReserva.nombreTitularReserva}
                <strong>Email</strong>: ${datosReserva.email}
                <strong>Invitado 1</strong>: ${datosReserva.invitado1}
                <strong>Invitado 2</strong>: ${datosReserva.invitado2}
                <strong>Invitado 3</strong>: ${datosReserva.invitado3}
                <strong>Invitado 4</strong>: ${datosReserva.invitado4}
                <strong>Fecha</strong>: ${datosReserva.fecha}
                <a href="#" class = "btn btn-danger" name = "borrar" >Cancelar reserva</a>
            </div>

        </div>`);
        //Aca insertamos el div al html.
        showDate.append(crearDiv);
        
    }
//4) resetear formulario:
    resetForm(){
        //4) resetear formulario:
        document.getElementById("formulario-reserva").reset();
    }
//5) Borrar reserva:
    cancelarReserva(element){
//5.1)Lo que hago aca, es buscar el name borrar, y borro a 2 de sus elementos padres.
        if(element.name === 'borrar'){
            element.parentElement.parentElement.remove();
            this.mostrarMensajes('La reserva se elimino satisfactoriamente', 'danger');
        }
    }
//6)MostrarMensajes:

    mostrarMensajes(mensaje,cssClass){
        //6.1)Aca lo que hago es crear un div y agregarle una class de alert.
        const divMensaje = document.createElement("div");
        divMensaje.className = `alert alert-${cssClass} mt-3`;
        //6.2)Aca inserto el div.
        divMensaje.appendChild(document.createTextNode(mensaje))
        //6.3)Aca muestro mi div en la class container de mi html, y le digo que lo inserte antes
        //De que yo cree mi app reservas.
        const container = document.querySelector('.container');
        const myapp = document.querySelector('#reservas');
        container.insertBefore(divMensaje,myapp);
//6.4))Aca le muestro el tiempo que va a tardar en remover el msj.
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000)

    }


}

