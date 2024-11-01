const { connect, client } = require('./db');

async function fetchData() {
    try {
        // Ensure we are connected
        await connect();

        // Access your specific database and collection
        const database = client.db("foodGo");
        const collection = database.collection("Sample"); // Replace with your collection name

        // Fetch all documents
        const data = await collection.find({}).toArray();
        console.log(data);

    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        // Close the connection
        await client.close();
    }
}

async function insertData(data) {
    await client.connect();
    const database = client.db("foodGo");
    const collection = database.collection("yourCollectionName");
    const result = await collection.insertOne(data);
    return result;
}

module.exports = { fetchData, insertData };
