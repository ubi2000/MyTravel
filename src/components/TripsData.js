import "./Trips.css";

function TripsData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img alt="image" src={props.image} />
      </div>
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
    </div>
  );
}
export default TripsData;
