const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <form action="/flights" method="POST">
          Airline: <input type="text" name="airline"></input><br></br>
          Airport: <select name='airport'>
            <option>AUS</option>
            <option>DAL</option>
            <option>LAX</option>
            <option>SAN</option>
            <option>SEA</option>
          </select><br></br>
          Flight number: <input type="number" name="flightno"></input><br></br>
          Departure: <input type="datetime-local" name="departure-date"></input><br></br>
          <input type='submit' name="submit" value="submit"></input>
        </form>
      </div>
    );
  }
}

module.exports = New;
