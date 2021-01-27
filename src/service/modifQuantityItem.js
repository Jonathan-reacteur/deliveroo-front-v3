const modifQuantityItem = (cart, idItem, action) => {
  let tableau = [];
  const myCart = [...cart];

  // Si l'élément est présent dans le tableau, alors on incrémente de 1 sa valeur

  for (let i = 0; i < myCart.length; i++) {
    if (myCart[i].idItem === idItem) {
      if (action === "add") {
        myCart[i].quantity += 1;
      }
      if (action === "remove") {
        myCart[i].quantity = -1;
      }
    }
  }

  myCart.forEach((element) => {
    if (element.idItem === idItem) {
      element.quantity = element.quantity + 1;
      tableau = [...myCart];
      return tableau;
    }
  });

  // Sinon, on ajoute l'élément
  if (!flagItemFound) {
    itemToAdd["quantity"] = 1;
    myCart.push(itemToAdd);
    tableau = [...myCart];
    return tableau;
  }
  return tableau;
};

export default modifQuantityItem;
