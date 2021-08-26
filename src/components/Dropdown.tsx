import SidebarDropdownProps from "../Interfaces/Buttons/SidebarDropdownProps";
import SidebarInput from "./Inputs/SidebarInput";

const Dropdown: React.FC<SidebarDropdownProps> = ({
  text,
  onClick,
  isOpen,
}: SidebarDropdownProps) => {
  return (
    <>
      <div onClick={onClick} className='dropdown-item shadow'>
        <p>{text}</p>
      </div>
      <div>
        {isOpen && (
          <SidebarInput
            forLabel={"sortOptions"}
            label={"Sort Results by"}
            name={"sortOptions"}
            id={"sortOptions"}></SidebarInput>
        )}
      </div>
    </>
  );
};

export default Dropdown;
