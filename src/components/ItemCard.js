import currencyFormatter from "../service/currencyFormatter";
import ajoutItemCart from "../service/ajoutItemCart";
import StarIcon from "./StarIcon.js";

const ItemCard = (props) => {
  const { items, setCart, cart } = props;
  //
  // Rendering de l'encart Restaurant conditionné à la réception des données
  //

  const onClickAddItem = (priceItem, idItem, libItem) => {
    let itemToAdd = {};
    itemToAdd.priceItem = parseInt(priceItem);
    itemToAdd.idItem = idItem;
    itemToAdd.libItem = libItem;
    let result = [];
    result = ajoutItemCart(cart, itemToAdd);
    setCart(result);
  };
  return (
    <>
      <div
        className="itemCard"
        onClick={(e) => {
          onClickAddItem(items.price, items.id, items.title);
        }}
      >
        <div className="itemContainer">
          <div className="itemCardLeft">
            <div className="courseItemText">
              <div className="courseItemTitle">{items.title}</div>
              <div className="courseItemDescription">{items.description}</div>
              <div className="prixCat">
                <div className="courseItemZonePrix">
                  {currencyFormatter(parseInt(items.price))}
                </div>
                <div className="itemPopular">
                  {items.popular ? (
                    <>
                      <span>
                        <StarIcon />
                      </span>
                      <span>Populaire</span>
                    </>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="itemCardRight">
            {items.picture ? (
              <img className="vignette" src={items.picture}></img>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
