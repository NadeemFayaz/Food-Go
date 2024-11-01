const express = require('express');
const mongodb = require("./db"); // Assuming `fetchData` is exported from `db.js`
const app = express();
const port = 5000;

// Middleware to parse JSON bodies for POST requests
app.use(express.json());

// Simple GET route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// GET route for /data
app.get('/data', async (req, res) => {
  try {
    const data = await mongodb.fetchData();
    res.json({ success: true, data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// POST route for /data
app.post('/data', async (req, res) => {
  try {
    // Assuming you have some logic to insert data in `mongodb`
    const result = await mongodb.insertData(req.body); // replace with your insert function
    res.json({ success: true, result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
