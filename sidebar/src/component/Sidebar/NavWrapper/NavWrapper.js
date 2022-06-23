import classes from "./NavWrapper.module.css";

const NavWrapper = (props) => {
  return (
    <nav className={classes.navigation}>
      <ul className={classes["navigation-items"]}>{props.children}</ul>
    </nav>
  );
};

export default NavWrapper;
