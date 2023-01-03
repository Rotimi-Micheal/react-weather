const Results = (props) => {
  return (
    <section>
      <div>
        <h1>City: {props.name} </h1>
      </div>
      <div>
        <span>Icon: {props.icon} </span>
        <span>Description: {props.description} </span>
      </div>
      <div>
        <span>Temp: {props.temp} </span>
        <span>Humidy: {props.humidity}</span>
      </div>
      <div>Speed: {props.speed}</div>
    </section>
  );
};

export default Results;
