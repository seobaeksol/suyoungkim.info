export interface GridItem {
  name: string;
  description: string;
  url: string;
  imageUrl: string;
}

const GridTile: React.FunctionComponent<{ item: GridItem }> = ({ item }) => {
  const { name, description, url, imageUrl } = item;

  return (
    <div>
      <a href={url}>
        <img src={imageUrl} alt="" className="thumnail" />
        <h3>{name}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
};

const Grid: React.FunctionComponent<{ items: GridItem[] }> = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <GridTile key={item.name} item={item} />
      ))}
    </div>
  );
};

export default Grid;
