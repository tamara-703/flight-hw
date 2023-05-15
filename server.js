//require express
const express = require('express');
const app = express();

//require env
require('dotenv').config();

//models
const Flights = require('./models/flights');
const Destination = require('./models/destination');
//port
const PORT = process.env.PORT || 3000;

//require mongoose
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);


//middleware
app.use((req,res,next) => {
    console.log('I run for all routes');
    next();
});

//encode incoming url parameters
app.use(express.urlencoded({ extended: false }));


app.set('view engine','jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//populate data in database
const flights = new Flights(
    {
        airline: "American",
        flightNo: 3456,
        departs: "March 02, 2025 05:30:00"
    }
)


//routes

//default homepage
app.get('/', (req,res) => {
    res.render('Homepage');
})

//Index for all flights
app.get('/flights', async (req,res) => {
    const result = await Flights.find({});
    const destinationResult = await Destination.find({});
    // res.send("flights" + result)
    res.render('Index', {flights: result, destination: destinationResult})
})

//Create
app.get('/flights/new', (req,res) => {
    res.render('New');
});

app.post('/flights', (req,res,body) => {

    Flights.create(req.body);

    res.redirect('/flights');
})

app.post('/flights/addDestination' , (req,res) => {
    Destination.create(req.body);

    res.redirect('/flights');
})

//add destination
app.get('/flights/add/:id' , async (req,res) => {
    const result = await Flights.findById(req.params.id);

    res.render('AddDestination' , {flight: result})
})


//Show
app.get('/flights/:id', async (req,res) => {

    const flight = await Flights.findById(req.params.id);

    res.render('Show', {flight: flight});

})




//connection to mongodb and app listen
const launcheMongoose = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.connection.once('open', () => {
            console.log('connected to mongodb');
        })

        //tell express to listen
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`);
        })
    } catch (err) {
        console.log(err.message);
    }
}

launcheMongoose();
