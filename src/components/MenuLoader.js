import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const MenuLoader = (props) => {
  const { categories, setCart, cart } = props;

  const fields: JSX.Element[] = [];
  for (let i = 1; i <= 4; i++) {
    fields.push(
      <div className="itemCard" key={i}>
        <div className="itemContainer">
          <div className="itemCardLeft">
            <div className="courseItemText">
              <div className="courseItemTitle">
                <SkeletonTheme color="#e4f2ed" highlightColor="#00CCBC">
                  <Skeleton height="22px" width="200px" />
                </SkeletonTheme>
              </div>
              <div>
                <SkeletonTheme color="#e4f2ed" highlightColor="#00CCBC">
                  <Skeleton height="17px" width="170px" />
                </SkeletonTheme>
              </div>

              <div>
                <SkeletonTheme color="#e4f2ed" highlightColor="#00CCBC">
                  <Skeleton height="17px" width="170px" />
                </SkeletonTheme>
              </div>

              <div className="prixCat"></div>
            </div>
          </div>
          <div className="itemCardRight">
            <SkeletonTheme color="#e4f2ed" highlightColor="#00CCBC">
              <Skeleton
                count={1}
                height={"130px"}
                width={"130px"}
                border-radius={10}
              />
            </SkeletonTheme>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="greyBlack">
      <div className="wrapper">
        <div className="restaurantDetails">
          <div className="meals">
            <div className="listCart">
              <div className="courses">
                <div className="courseTitle">
                  <h2>
                    <SkeletonTheme color="#e4f2ed" highlightColor="#00CCBC">
                      <Skeleton
                        line-height="27px"
                        height="27px"
                        width="35%"
                        border-radius={10}
                      />
                    </SkeletonTheme>
                  </h2>
                </div>
              </div>
              <div className="courseListeItem">{fields}</div>
            </div>
          </div>

          <div className="cartArea">test</div>
        </div>
      </div>
    </div>
  );
};

export default MenuLoader;
