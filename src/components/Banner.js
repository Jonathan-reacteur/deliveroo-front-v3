import linkPicture from "../asset/img/logo.svg.png";
const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="bannerCenter">
          <img className="logo" src={linkPicture} alt="Logo"></img>
        </div>
      </div>
    </>
  );
};

export default Banner;
