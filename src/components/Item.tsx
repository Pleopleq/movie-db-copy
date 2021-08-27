import ItemProps from "../Interfaces/Items/ItemProps";

const Item: React.FC<ItemProps> = ({
  poster_path,
  title,
  vote_average,
  release_date,
}: ItemProps) => {
  return (
    <div className='item-container shadow'>
      <div className='item-image'>
        <img
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`}
          alt={title + " cover"}
          className='item-cover-img'
        />
      </div>
      <div className='item-content'>
        <div className='item-score__background'>
          <p className='item-score'>{vote_average}%</p>
        </div>
        <h3 className='item-title'>{title}</h3>
        <p className='item-release-date'>{release_date}</p>
      </div>
    </div>
  );
};

export default Item;
