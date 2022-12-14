const Card = ({ item }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <h5 className="card-title">{item.headline}</h5>
        <img src={item.imageUrl} className="card-img-top" alt="Ad Card" />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.primaryText}</p>
          <p className="card-text">{item.description}</p>
          <a href={item.companyId.url} className="btn btn-primary">
            {item.cta}
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
