const Dropdown: React.FC = () => {
  return (
    <div onClick={() => console.log("click")} className="dropdown-item shadow">
      <p>Sort</p>
    </div>
  )
}

export default Dropdown;
