export interface GridItem {
  name: string;
  description: string;
  url: string;
  imageUrl: string;
}

const GridTile: React.FunctionComponent<{ item: GridItem }> = ({ item }) => {
  const { name, description, url, imageUrl } = item;

  return (
    <a className="grid-item" href={url}>
      <img src={imageUrl} alt="" className="thumnail" />
      <h3>{name}</h3>
      <p>{description}</p>

      <style jsx>{`
        .grid-item {
          background-color: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(0, 0, 0, 0.8);
          padding: 20px;
          font-size: 30px;
          text-align: center;
        }
      `}</style>
    </a>
  );
};

const Grid: React.FunctionComponent<{ items: GridItem[] }> = ({ items }) => {
  return (
    <div className="grid-container">
      {items.map(item => (
        <GridTile key={item.name} item={item} />
      ))}

      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-columns: auto auto auto;
          background-color: #2196f3;
          padding: 10px;
        }
      `}</style>
    </div>
  );
};

export default Grid;
