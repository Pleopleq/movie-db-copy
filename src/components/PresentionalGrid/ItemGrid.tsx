import ItemGridProps from "../../Interfaces/Home/ItemGridProps";
import Item from "../Item";
import formatScore from "../../helpers/formatScore";
import formatReleaseDate from "../../helpers/formatReleaseDate";

const ItemGrid: React.FC<ItemGridProps> = ({ items }: ItemGridProps) => {
  return (
    <div className='items-grid'>
      {items?.map((item) => (
        <Item
          title={item.title}
          release_date={formatReleaseDate(item.release_date)}
          vote_average={formatScore(item.vote_average)}
          poster_path={item.poster_path}></Item>
      ))}
    </div>
  );
};

export default ItemGrid;
