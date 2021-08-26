import ItemProps from "../Interfaces/Items/ItemProps";

const Item: React.FC<ItemProps> = ({coverImg, title, score, releaseDate}: ItemProps) => {
  return (
    <div className="item-container shadow">
        <div className="item-image">
            <img src={coverImg} alt={title + 'cover'} className="item-cover-img" />
        </div>
        <div className="item-content">
            <p className="item-score">{score}</p>
            <h3 className="item-title">{title}</h3>
            <p className="item-release-date">{releaseDate} </p>
        </div>
    </div>
  )
}

export default Item;
