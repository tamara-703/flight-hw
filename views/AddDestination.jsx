const React = require("react");

class AddDestination extends React.Component {
  render() {
    const {flight} = this.props;
    return (
      <div>
        <h1>Change destination for flight no. {flight.flightNo}</h1>
        <form action="/flights/addDestination" method="POST">
          Arrival: <input type="datetime-local" name="arrival"></input>
          Airport code:{" "}
          <select name="airport">
            <option>AUS</option>
            <option>DAL</option>
            <option>LAX</option>
            <option>SAN</option>
            <option>SEA</option>
          </select>
          <br></br>

          <input type="submit" value='add'></input>
        </form>
      </div>
    );
  }
}

module.exports = AddDestination;
