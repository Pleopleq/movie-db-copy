import SidebarInputProps from "../../Interfaces/Inputs/SidebarInputProps";

const SidebarInput: React.FC<SidebarInputProps> = ({
  label,
  forLabel,
  name,
  id,
}: SidebarInputProps) => {
  return (
    <div className='dropdown-item__active shadow'>
      <label htmlFor={forLabel}>{label}</label>
      <select name={name} id={id}>
        <option value='popular'>Popular</option>
        <option value='upcoming'>Upcoming</option>
        <option value='topRated'>Top Rated</option>
      </select>
    </div>
  );
};

export default SidebarInput;
