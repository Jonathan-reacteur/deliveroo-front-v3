import ItemCard from "./ItemCard.js";

const ListCart = (props) => {
  const { items, cart, setCart } = props;

  return (
    <>
      <div className="listCard">
        <div className="courseListeItem">
          {items.map((elem, index, key) => {
            return (
              <ItemCard
                items={elem}
                setCart={setCart}
                cart={cart}
                key={elem.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListCart;
