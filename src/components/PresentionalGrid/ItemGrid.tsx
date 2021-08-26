import ItemGridProps from "../../Interfaces/Home/ItemGridProps";
import Item from "../Item";

const ItemGrid: React.FC<ItemGridProps> = ({items}) => {
  return (
    <div className="items-grid">
      {items.map(item => 
      <Item 
      title={item.title}
      releaseDate={item.releaseDate}
      score={item.score}
      coverImg={item.coverImg}
      ></Item>
      )}
    </div>
  )
}

export default ItemGrid;
