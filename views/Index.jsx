const React = require("react");

class Index extends React.Component {
  render() {
    const flights = this.props.flights;
    const destination = this.props.destination;

    return (
      <div>
        <a href="/flights/new">Create new flight</a>
        {flights ?
        //   <div>airline: {flight[0].airline}</div>
          flights.map((flight, i) => {
            // console.log("displaying flights: " + flight.departs)
            return (
                <div>
                  <div>airline: {flight.airline}</div>
                  <div>flight number: {flight.flightNo}</div>
                  <div>Departure date: {flight.departs.toTimeString()}</div>
                  <div>
                    {destination.map((des, i) => {
                        return (
                            <div>
                                <div>Arrival: {des.arrival.toTimeString()}</div><br></br>
                                <div>Airport: {des.airport}</div>
                                </div>
                        )
                    })
                    }
                  </div>
                  <div><a href={`/flights/${flight.id}`}>details</a></div>
                </div>
              );
          })
        : (
          <div>no information found</div>
        )}
      </div>
    );
  }
}

module.exports = Index;
