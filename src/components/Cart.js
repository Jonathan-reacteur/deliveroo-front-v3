import cartTotalCosts from "../service/cartTotalCosts";
import currencyFormatter from "../service/currencyFormatter";
import CartLine from "../components/CartLine.js";

const Cart = (props) => {
  const { cart, setCart } = props;
  const displayCart = (cart) => {
    if (!cart || cart.length === 0) {
      return (
        <>
          <div className="cartValidateButton cartValidateButtonDisabled">
            <p>Valider mon panier</p>
          </div>
          <div className="emptyBasket">
            <p>Votre panier est vide</p>
          </div>
        </>
      );
    } else {
      const calcul = cartTotalCosts(cart);
      const total = calcul[1];
      const totalFormatted = currencyFormatter(total);
      const subtotal = calcul[0];
      const subtotalFormatted = currencyFormatter(subtotal);
      return (
        <>
          <div className="cartValidateButton cartValidateButtonEnabled">
            <p>Valider mon panier</p>
          </div>
          <div className="CartList">
            {cart.map((element) => {
              return (
                <CartLine
                  item={element}
                  key={element.idItem}
                  cart={cart}
                  setCart={setCart}
                />
              );
            })}
          </div>
          <div className="totalAndOther">
            <div className="subTotal">
              <p>Sous-total</p>
              <p>{subtotalFormatted}</p>
            </div>
            <div className="transportFee">
              <p>Frais de livraison</p>
              <p>2,50 €</p>
            </div>
          </div>
          <div className="cartTotal">
            <p>Total : </p>
            <p>{totalFormatted}</p>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className="cartArea">
        <div className="cartCard">{displayCart(cart)}</div>
      </div>
    </>
  );
};
export default Cart;
