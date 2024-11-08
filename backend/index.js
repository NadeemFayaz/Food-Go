const express = require('express');
const cors = require('cors');  // Import the CORS middleware
const connectDB = require('./db'); // Import Mongoose connection
const app = express();
const port = 5000;

// Connect to the database
connectDB();

// Enable CORS with specific options
app.use(cors({
    origin: 'http://localhost:3000',  // Allow only the frontend origin
    methods: 'GET,POST,PUT,DELETE',   // Specify allowed methods
    allowedHeaders: 'Content-Type',   // Specify allowed headers
}));

// Middlewares
app.use(express.json()); // JSON body parser
app.use(express.urlencoded({ extended: false })); // URL-encoded body parser

// Enable CORS with specific options
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type',
}));

// Routes
app.use('/api', require('./routes/CreateUser'));
app.use('/api', require('./routes/LoginUser'));


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', require('./routes/CreateUser'));
app.use('/api', require('./routes/LoginUser'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
