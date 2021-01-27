const ajoutItemCart = (cart, itemToAdd) => {
  let { priceItem, idItem, libItem } = itemToAdd;
  let tableau = [];

  const myCart = [...cart];
  // Si tableau vide, on ajoute l'item sans plus de contrôle
  if (myCart.length === 0) {
    itemToAdd["quantity"] = 1;
    myCart.push(itemToAdd);
    tableau = [...myCart];
    return tableau;
  }
  // Vérification de la présence de l'item dans le tableau existant
  // Si l'élément est présent dans le tableau, alors on incrémente de 1 sa valeur
  let flagItemFound = false;

  myCart.forEach((element) => {
    if (element.idItem === idItem) {
      flagItemFound = true;
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

export default ajoutItemCart;
