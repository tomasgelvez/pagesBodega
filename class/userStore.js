class UserStore {
  constructor(pName) {
    this.vinos = [];
    this.nombre = pName;
  }

  setProduct(pId) {
    //Buscar producto en la variable global
    let vinosList = JSON.parse(
      localStorage.getItem(keyLocalStorageVinos)
    );
    let currentWines = vinosList.find((p) => p.vinoId === pId);
    
   
    //Disminuir el stock
    currentWines.vinoStock -= 1;
    localStorage.setItem(keyLocalStorageVinos, JSON.stringify(vinosList));

   //Guardar con un stock de 1 en la lista del usuario
   let newProductItem = new VinosItem(currentWines.vinoId, 1);
   //Validar si existe o no en los productos del usuario
   if (this.vinos.find((p) => p.id === newProductItem.id) === undefined)
     this.vinos.push(newProductItem);
   else this.vinos.find((p) => p.id === newProductItem.id).quantity += 1;
 }
}