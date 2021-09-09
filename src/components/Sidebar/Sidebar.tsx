import { useState } from "react";
import Dropdown from "../Dropdown";

const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDropdownOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Dropdown
        text={"Sort"}
        onClick={handleDropdownOpen}
        isOpen={isOpen}></Dropdown>
      <Dropdown text={"Filters"}></Dropdown>
      <Dropdown text={"Where to Watch"}></Dropdown>
      {/* <SidebarSubmit text={'Submit'} onClick={() => {}}></SidebarSubmit> */}
    </div>
  );
};

export default SideBar;
