import "./asset/css/reset.css";
import "./asset/css/variable.css";
import "./App.css";
import Header from "./components/Header";
import retrieveRestaurantInfo from "./service/retrieveRestaurantInfo.js";
import React, { useState, useEffect } from "react";
import Menu from "./components/Menu.js";
import MenuLoader from "./components/MenuLoader.js";

function App() {
  const [data, setData] = useState();
  const [cart, setCart] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  //
  useEffect(() => {
    setTimeout(40000000);
    setTimeout(() => {
      const fetchDatas = async () => {
        const response = await retrieveRestaurantInfo();

        setData(response.data);
        setIsLoaded(true);
      };
      fetchDatas();
    }, 4000);
  }, []);

  let restaurant = {};
  let categories = {};
  // Props pour bandeau :
  if (isLoaded) {
    restaurant = data.restaurant;
    categories = data.categories;
  }
  return (
    <div className="App">
      <Header restaurant={restaurant} isLoaded={isLoaded} />
      {isLoaded ? (
        <Menu
          categories={categories}
          setCart={setCart}
          cart={cart}
          data={data}
          setData={setData}
        />
      ) : (
        <MenuLoader />
      )}
      <a href="http://users.skynet.be/mgueury/mozilla/">
        <img
          src="http://users.skynet.be/mgueury/mozilla/tidy_32.gif"
          alt="Validated by HTML Validator (based on Tidy) "
          height="32"
          width="78"
        />
      </a>
    </div>
  );
}

export default App;
