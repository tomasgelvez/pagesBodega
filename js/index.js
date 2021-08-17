var vinosGuardados = [];


const keyLocalStorageVinos = "vinos";

$.getJSON("../baseDatosVinos/vinos.json", function (datos) {
  vinosGuardados = datos;
  

  //Guardar en memorria la lista de productos
  if (localStorage.getItem("vinos") == null)
    localStorage.setItem(keyLocalStorageVinos, JSON.stringify(vinosGuardados));

  //Carga y visualizacion de los productos
 productLoading();  
  
});
//Usuario de la tienda
  var userStore = new UserStore("Tomas gelvez"); 
 
