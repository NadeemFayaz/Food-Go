const express = require('express');
const connectDB = require('./db'); // Import Mongoose connection
const app = express();
const port = 5000;

// Connect to the database
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', require('./routes/createuser'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
