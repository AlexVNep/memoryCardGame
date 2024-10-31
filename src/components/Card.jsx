function Card({ url, name, alt, onClick }) {
  return (
    <div
      className="w-full rounded-lg overflow-hidden shadow-xl mx-auto cursor-pointer hover:shadow-2xl transition-all duration-200 ease-in-out transform hover:-translate-y-2"
      onClick={onClick}
    >
      <div className="img-holder">
        <img src={url} alt={alt} />
      </div>
      <div className="name-holder">
        <h2 className="name text-center p-3">{name}</h2>
      </div>
    </div>
  );
}
export default Card;
