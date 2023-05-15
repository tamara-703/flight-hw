const React = require('react');

class Show extends React.Component {
    render()
    {
        const { flight } = this.props
        console.log("found: " + flight)
        return (
            flight ?
            <div>
                Airline: {flight.airline}<br></br>
                Flight number: {flight.flightNo}<br></br>
                <a href={`/flights/add/${flight.id}`}>add destination</a><br></br>
                <a href='/flights'>back</a>
            </div>
        : <div>No information found</div>)
    }
}

module.exports = Show;
