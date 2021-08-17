const productLoading = () => {
  let vistaVinos = '';
  let vinosList = JSON.parse(localStorage.getItem(keyLocalStorageVinos));

  $.get("../views/cardProduct.html", function (html) {
    vinosList.forEach((p) => {
      let view = html;
      view = view.replaceAll("[id]", p.vinoId );
      view = view.replaceAll("[imagen]", p.vinoImagen);
      view = view.replaceAll("[nombre]", p.vinoNombre);
      view = view.replaceAll("[precio]", p.vinoPrecio);
      vistaVinos += view;
    });

    //document.getElementById("details").innerHTML = vistaProductos;
    $("#details").html(vistaVinos);
  });
};

const cartLoading = () => {
    var vistaCart = "";
    userStore.vinos.forEach(
      (p) => (vistaCart += `<h1>${p.id}-${p.quantity}</h1>`)
    );
    console.log(vistaCart)
  
    //document.getElementById("detsummaryails").innerHTML = vistaCart;
    $("#carrito").html(vistaCart);
  };