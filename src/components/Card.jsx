function Card({ url, name, alt, onClick }) {
  return (
    <div className="card" onClick={onClick}>
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
