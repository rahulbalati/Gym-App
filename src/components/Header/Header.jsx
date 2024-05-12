import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "./Header.css";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
        >
          <img
            src={Bars}
            alt="Menu"
            style={{ width: "1.5rem", height: "1.5rem" }}
            onClick={() => setMenuOpened(true)}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li >
            <Link  to="home"
              activeClass="active"
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true} >Home</Link>
          </li>
          <li >
            <Link  to="Programs"
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}>Programs</Link>
          </li>
          <li>
            <Link
             to="reasons"
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}>Why us</Link>
          </li>
          <li >
            <Link  to="plans"
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}>Plans</Link>
          </li>
          <li>
            <Link
              to="testimonials"
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
