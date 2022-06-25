import { useState } from "react";
import classes from "./MenuToggle.module.css";

const MenuToggle = (props) => {
  const [menuActive, setMenuActive] = useState(false);
  const menuToggleHandler = () => {
    const st = !menuActive;
    setMenuActive(st);
    props.onToggle(st);
  };
  return (
    <div className={`${menuActive ? classes["active"] : ""}`}>
      <div className={`${classes.menuToggle} `} onClick={menuToggleHandler}>
        {props.children}
      </div>
    </div>
  );
};

export default MenuToggle;
