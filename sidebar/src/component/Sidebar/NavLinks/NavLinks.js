import classes from "./NavLinks.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDog,
  faSpider,
  faFrog,
  faCat,
  faDove,
} from "@fortawesome/free-solid-svg-icons";
import NavWrapper from "../NavWrapper/NavWrapper";

import NavLogo from "../NavLogo/NavLogo";

const NAV_OBJECTS = [
  { name: "Dogo", icon: faDog },
  { name: "Sipdey", icon: faSpider },
  { name: "Frogy", icon: faFrog },
  { name: "Kitty", icon: faCat },
  { name: "Dovey", icon: faDove },
];

const NavLinks = () => {
  return (
    <NavWrapper>
      <NavLogo />
      {NAV_OBJECTS.map((item) => {
        return (
          <li className={classes["navigation-item"]} key={item.name}>
            <a
              href="https://github.com/unionerror/"
              className={classes["navigation-link"]}
            >
              <FontAwesomeIcon icon={item.icon} size="2x" />
              <span className={classes["link-text"]}>{item.name}</span>
            </a>
          </li>
        );
      })}
    </NavWrapper>
  );
};

export default NavLinks;
