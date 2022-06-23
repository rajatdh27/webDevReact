import classes2 from "../NavLinks/NavLinks.module.css";
import classes1 from "./NavLogo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const NavLogo = () => {
  return (
    <li className={classes2["navigation-item"] + " " + classes1["logo"]}>
      <a href="#shisui" className={classes2["navigation-link"]}>
        <span className={classes2["link-text"]}>SideBar</span>
        <FontAwesomeIcon icon={faArrowRight} size="2x" />
      </a>
    </li>
  );
};

export default NavLogo;
