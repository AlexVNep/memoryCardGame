function Card({ url, name, alt }) {
  return (
    <div className="card">
      <div className="img-holder">
        <img src={url} alt={alt} />
      </div>
      <div className="name-holder">
        <h2 className="name">{name}</h2>
      </div>
    </div>
  );
}
export default Card;
