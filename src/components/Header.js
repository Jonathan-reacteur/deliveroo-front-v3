import Banner from "./Banner.js";
import Restaurant from "./Restaurant.js";
import RestaurantLoader from "./RestaurantLoader.js";

const Header = (props) => {
  const { restaurant, isLoaded } = props;

  //
  // Rendering de l'encart Restaurant conditionné à la réception des données
  //

  return (
    <>
      <div className="header">
        <Banner />
        {isLoaded ? (
          <Restaurant restaurant={restaurant} />
        ) : (
          <RestaurantLoader />
        )}
      </div>
    </>
  );
};

export default Header;
