const formatPrice = (price: number) => {
  return "£" + price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

export { formatPrice };
