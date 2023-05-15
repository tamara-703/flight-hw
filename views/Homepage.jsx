const React = require('react');

class Homepage extends React.Component {

    render()
    {
        return (
            <div>
                <h1>Welcome to Flights</h1>
                <a href='/flights'>Let's get started</a>
            </div>
        )
    }
}

module.exports = Homepage;
