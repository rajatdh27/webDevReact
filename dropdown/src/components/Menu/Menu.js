import classes from "./Menu.module.css";

const Menu = () => {
  return (
    <ul className={classes.menu}>
      <li>
        <a href="#">
          <i class="fa-solid fa-user fa-lg"></i>My Profile{" "}
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa-solid fa-comment fa-lg"></i> Message{" "}
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa-solid fa-bell fa-lg"></i> Notification
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa-solid fa-gear fa-lg"></i> Settings{" "}
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa-solid fa-circle-info fa-lg"></i> Help
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa-solid fa-arrow-right-from-bracket fa-lg"></i> Logout
        </a>
      </li>
    </ul>
  );
};

export default Menu;
