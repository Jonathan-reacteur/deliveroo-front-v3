// import currencyFormatter from "../utils/currencyFormatter";
import ListCart from "./ListCart.js";
// import ajoutItemCart from "../service/ajoutItemCart.js";
const Courses = (props) => {
  const { name, items, setCart, cart } = props;

  if (items.length === 0) {
    return <></>;
  } else {
    return (
      <>
        <div className="courses">
          <div className="courseTitle">
            <h2>{name}</h2>
          </div>
          <ListCart items={items} cart={cart} setCart={setCart} />
        </div>
      </>
    );
  }
};

export default Courses;
