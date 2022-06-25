import classes from "./UserBox.module.css";

const UserBox = (props) => {
  return (
    <div className={props.st ? classes.active : ""}>
      <div className={classes["userBox"]}>
        <div className={classes["imgBox"]}>
          <img
            src="https://wallpapers.com/images/high/face-close-up-itachi-uchiha-8rnu7j2hbvgd4sb6.jpg"
            alt="itachi"
          />
        </div>
        <p className={classes["userName"]}>Itachi Uchiha</p>
      </div>
    </div>
  );
};

export default UserBox;
