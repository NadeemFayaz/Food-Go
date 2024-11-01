const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://iamabnadeem99:Cplus%40909@foodgo.z93v4.mongodb.net/foodGo?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function connect() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas!");

        // Example of a long-running operation
        setInterval(async () => {
            const database = client.db("foodGo");
            const collection = database.collection("Sample");
            const data = await collection.find({}).toArray();
            //console.log("Fetched data:", data);
        }, 5000); // Fetches data every 5 seconds

    } catch (e) {
        console.error("Connection error:", e);
    }
}

connect();
