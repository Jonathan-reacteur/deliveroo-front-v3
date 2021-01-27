import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Restaurant = () => {
  return (
    <>
      <div className="restaurantCenter">
        <div className="restaurantInformation">
          <div className="restaurantInformationTitre">
            <h1>
              <SkeletonTheme color="#e4f2ed" highlightColor="#00CCBC">
                <Skeleton
                  line-height="27px"
                  height="32px"
                  width="65%"
                  border-radius={10}
                />
              </SkeletonTheme>
            </h1>
          </div>
          <div className="restaurantInformationDescription">
            <SkeletonTheme color="#e4f2ed" highlightColor="#00CCBC">
              <p>
                <Skeleton height={"15px"} width={"70%"} count={1} />
                <br></br>
                <Skeleton height={"15px"} width={"70%"} count={1} />
                <br></br>
                <Skeleton height={"15px"} width={"70%"} count={1} />
              </p>
            </SkeletonTheme>
          </div>
        </div>
        <div className="RestaurantPictureWrapper">
          <SkeletonTheme color="#e4f2ed" highlightColor="#00CCBC">
            <Skeleton
              count={1}
              height={"200px"}
              width={"350px"}
              border-radius={10}
            />
          </SkeletonTheme>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
