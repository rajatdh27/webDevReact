import React from "react";
import classes from "./Header.module.scss";
import { useState, useEffect } from "react";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
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
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <h2 className={classes.header__content__logo}>Navbar</h2>

        <nav
          className={`${classes.header__content__nav} ${
            toggleMenu ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/content">Content</a>
            </li>
            <li>
              <a href="/logout">Logout</a>
            </li>
          </ul>
          <button>Click Me</button>
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
