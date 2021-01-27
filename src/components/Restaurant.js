const Restaurant = (props) => {
  const { restaurant } = props;
  return (
    <>
      <div className="restaurantCenter">
        <div className="restaurantInformation">
          <div className="restaurantInformationTitre">
            <h1>{restaurant.name}</h1>
          </div>
          <div className="restaurantInformationDescription">
            {restaurant.description}
          </div>
        </div>
        <div className="RestaurantPictureWrapper">
          <img className="restaurantCover" src={restaurant.picture}></img>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
