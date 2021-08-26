import SidebarInputProps from "../../Interfaces/Inputs/SidebarInputProps";

const SidebarInput: React.FC<SidebarInputProps> = ({
  label,
  forLabel,
  name,
  id,
}: SidebarInputProps) => {
  return (
    <div className='dropdown-item__active'>
      <label htmlFor={forLabel}>{label}</label>
      <select name={name} id={id}>
        <option value='volvo'>Upcoming</option>
        <option value='saab'>Popular</option>
        <option value='opel'>Top Rated</option>
      </select>
    </div>
  );
};

export default SidebarInput;
