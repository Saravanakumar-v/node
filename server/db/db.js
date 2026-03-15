const mongoDB = require('mongodb');

const uri = 'mongodb+srv://saravana1649:mongodb1649@mongodb.jpblxda.mongodb.net/?appName=mongoDB';

const mongoClient = new mongoDB.MongoClient(uri, {
    serverApi: {
        version: '1',
        strict: true,
        deprecationErrors: true,
    }
})

async function run() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await mongoClient.connect();
        // Send a ping to confirm a successful connection
        await mongoClient.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1);
    }
}
run().catch(console.dir);
module.exports = mongoClient;