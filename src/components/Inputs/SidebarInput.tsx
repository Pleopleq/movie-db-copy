import SidebarInputProps from "../../Interfaces/Inputs/SidebarInputProps";
import { useDispatch } from "react-redux";
import React from "react";
import { fetchMovies } from "../../redux/Movies/actions";

const SidebarInput: React.FC<SidebarInputProps> = ({
  label,
  forLabel,
  name,
  id,
}: SidebarInputProps) => {
  const dispatch = useDispatch();

  const handleSelectOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(fetchMovies(event.target.value));
  };
  return (
    <div className='dropdown-item__active shadow'>
      <label htmlFor={forLabel}>{label}</label>
      <select onChange={handleSelectOption} name={name} id={id}>
        <option value='popular'>Popular</option>
        <option value='upcoming'>Upcoming</option>
        <option value='top_rated'>Top Rated</option>
      </select>
    </div>
  );
};

export default SidebarInput;
