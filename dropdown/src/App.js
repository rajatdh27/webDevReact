import UserBox from "./components/UserBox/UserBox";
import MenuToggle from "./components/MenuToggle/MenuToggle";
import Menu from "./components/Menu/Menu";
import Navigation from "./components/Navigation/Navigation";
import { useState } from "react";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const onToggleHandler = (props) => {
    setIsActive(props);
  };
  return (
    <Navigation st={isActive}>
      <UserBox st={isActive} />
      <MenuToggle onToggle={onToggleHandler} />
      <Menu />
    </Navigation>
  );
};

export default App;
