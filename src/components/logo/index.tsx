import logo from "@site/static/img/logo.png";
import { PRODUCT_NAME } from "@site/src/constants";
import "./logo.css";

const Logo = () => {
  return (
    <div className="profile-logo-container">
      <img src={logo} className="profile-logo" alt={PRODUCT_NAME} />
      <div className="logo-title-container">
        <div className="logo-title-left">KONTRAX</div>
        <div className="logo-title-right">HUB</div>
      </div>
    </div>
  );
};

export default Logo;
