// import Courses from "./Courses.js";
import Cart from "./Cart.js";
import Courses from "./Courses.js";
const Menu = (props) => {
  const { categories, setCart, cart, setData, data } = props;

  return (
    <div className="greyBlack">
      <div className="wrapper">
        <div className="restaurantDetails">
          <div className="meals">
            {categories.map((elem, index) => {
              return (
                <Courses
                  key={elem.name}
                  name={elem.name}
                  items={elem.meals}
                  setCart={setCart}
                  cart={cart}
                />
              );
            })}
          </div>
          <Cart className="basket" cart={cart} setCart={setCart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Menu;
