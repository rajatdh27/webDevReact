import React from "react";
import classes from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [dark, setDark] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const resizeHanler = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    console.log(size.width);
    window.addEventListener("resize", resizeHanler);
    return () => window.removeEventListener("resize", resizeHanler);
  });

  useEffect(() => {
    if (size.width > 768 && toggleMenu) {
      setToggleMenu(!toggleMenu);
    }
  }, [size, toggleMenu]);

  const toggleHandler = () => {
    setToggleMenu(!toggleMenu);
  };
  const clickMeHandler = () => {
    setDark(!dark);
    navigate("/logout");
    toggleHandler();
  };
  return (
    <header className={` ${dark ? classes.light : ""} ${classes.header}`}>
      <div className={classes.header__content}>
        <h2 className={classes.header__content__logo}>Navbar</h2>

        <nav
          className={`${classes.header__content__nav} ${
            toggleMenu && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/" onClick={toggleHandler}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleHandler}>
                About
              </Link>
            </li>
            <li>
              <Link to="/content" onClick={toggleHandler}>
                Content
              </Link>
            </li>
            <li>
              <Link to="/logout" onClick={toggleHandler}>
                Logout
              </Link>
            </li>
          </ul>
          <button onClick={clickMeHandler}>Click Me</button>
        </nav>

        <div
          className={classes.header__content__toggle}
          onClick={toggleHandler}
        >
          {toggleMenu ? (
            <i class="fa-solid fa-xmark"></i>
          ) : (
            <i class="fa-solid fa-bars-staggered"></i>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
