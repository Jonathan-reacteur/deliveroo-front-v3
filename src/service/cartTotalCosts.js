const cartTotalCoasts = (cart) => {
  if (cart.length === 0) {
    return [0, 0];
  }

  let total = 0;
  let subtotal = 0;

  cart.forEach((element) => {
    subtotal += element.quantity * parseInt(element.priceItem);
  });
  total = subtotal + 2.5;
  return [subtotal, total];
};

export default cartTotalCoasts;
