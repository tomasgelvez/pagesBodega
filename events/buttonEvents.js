const Comprar = (pId) => {
  userStore.setProduct(pId);
  /* userStore.showPrice(pPrecio) */
  productLoading();
  cartLoading();
};

