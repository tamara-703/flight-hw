const mongoose = require('mongoose');

const destinationSchema = mongoose.Schema(
    {
        airport: {type: String, enum: ['AUS', 'DAL' , 'LAX' , 'SAN' , 'SEA']},
        arrival: Date
    }
)

const Destination = mongoose.model('Destination' , destinationSchema);

module.exports = Destination;
