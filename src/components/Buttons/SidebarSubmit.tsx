import SidebarSubmitProps from "../../Interfaces/Buttons/SidebarSubmitProps";

const SidebarSubmit: React.FC<SidebarSubmitProps> = ({text, onClick} : SidebarSubmitProps) => {
  return (
    <button onClick={onClick} className="sidebar-submit">
        {text}
    </button>
  )
}

export default SidebarSubmit;
