import ItemProps from "../Interfaces/Items/ItemProps";
import { Link } from "react-router-dom";

const Item: React.FC<ItemProps> = ({
  poster_path,
  title,
  vote_average,
  release_date,
  id,
}: ItemProps) => {
  return (
    <div key={id} className='item-container shadow'>
      <div className='item-image'>
        <Link to={`/movie/${id}`}>
          <img
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`}
            alt={title + " cover"}
            className='item-cover-img'
          />
        </Link>
      </div>
      <div className='item-content'>
        <div className='item-score__background'>
          <p className='item-score'>{vote_average}%</p>
        </div>
        <Link to={`/movie/${id}`}>
          <h3 className='item-title'>{title}</h3>
        </Link>
        <p className='item-release-date'>{release_date}</p>
      </div>
    </div>
  );
};

export default Item;
