import retrieveRestaurantInfo from "../service/retrieveRestaurantInfo";
import addOrRemoveCartItemById from "../service/addOrRemoveCartItemById";
import PlusIcon from "./PlusIcon";
import MinusIcon from "./MinusIcon";
import currencyFormatter from "../service/currencyFormatter";
const CartLine = (props) => {
  const { item, cart, setCart } = props;
  const { idItem, priceItem, libItem, quantity } = item;
  const price = currencyFormatter(priceItem);

  const addOneItem = (id, action, cart) => {
    const tab = addOrRemoveCartItemById(cart, id, action);
    setCart(tab);
  };
  return (
    <div className="lineItemCart">
      <div className="lineAdjust">
        <div
          onClick={(e) => {
            addOneItem(idItem, "remove", cart);
          }}
        >
          <MinusIcon />
        </div>
        <div>{quantity}</div>
        <div
          onClick={(e) => {
            addOneItem(idItem, "add", cart);
          }}
        >
          <PlusIcon />
        </div>
        <div className="CartLineLib">{libItem}</div>
      </div>
      <div className="CartLinePrice">
        <p>{price}</p>
      </div>
    </div>
  );
};

export default CartLine;
