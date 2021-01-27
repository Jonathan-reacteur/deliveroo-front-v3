const ajoutItemCart = (cart, idItem, action) => {
  const myCart = [...cart];

  // Vérification de la présence de l'item dans le tableau existant
  // Si l'élément est présent dans le tableau, alors on incrémente de 1 sa valeur

  let itemPosition = -1;
  for (let i = 0; i < myCart.length; i++) {
    if (myCart[i].idItem === idItem) {
      itemPosition = i;
    }
  }

  if (action === "add") {
    myCart[itemPosition].quantity += 1;
  }
  if (action === "remove") {
    if (myCart[itemPosition].quantity === 1) {
      myCart.splice(itemPosition);
    } else {
      myCart[itemPosition].quantity -= 1;
    }
  }
  return myCart;
};

export default ajoutItemCart;
