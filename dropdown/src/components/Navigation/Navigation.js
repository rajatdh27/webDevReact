import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <div className={`${classes.navigation} ${props.st ? classes.active : ""}`}>
      {props.children}
    </div>
  );
};

export default Navigation;
