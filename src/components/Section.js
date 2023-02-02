const Section = (props) => {
  return (
    <div>
      <h2>{props.category}</h2>
      <div className="images">
        {props.images.map((url, index) => {
          return <img key={index} src={url} alt="Visuel du film" />;
        })}
      </div>
    </div>
  );
};
export default Section;
