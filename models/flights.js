const mongoose = require('mongoose');



const flightSchema = new mongoose.Schema(
    {
        airline: {type: String, enum: ['American','Southwest','United']},
        flightNo: {type: Number, min: [10, 'flight number must be 10 digits and above'], max: [9999, 'you have exceeded the maximum limit']},
        departs: {type: Date, default: new Date("Jan 01, 2024 12:00:00")},
        airport: {type: String, enum: ['AUS', 'DAL', 'LAX', 'SAN' , 'SEA'], default: 'SAN'},
        
    }
);

const Flights = mongoose.model('Flights', flightSchema);

module.exports = Flights
