const express = require('express');
const cors = require('cors');
const app = express()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

// console.log(process.env.DB_PASS);
// console.log(process.env.DB_USER);

// Mongo DB Codes Start

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.h2ziqne.mongodb.net/?retryWrites=true&w=majority`;
const uri = `mongodb+srv://coffeehouse:W8UvJN53zfyoIaA5@cluster0.h2ziqne.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const coffeeDBCollection = client.db("coffeeDB").collection("coffeeCollection");
        
        app.get('/coffees', async (req, res) => {
            const cursor = coffeeDBCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        app.get('/coffees/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id)};
            const result = await coffeeDBCollection.findOne(query);
            res.send(result);
        })

        app.post('/coffees', async (req, res) => {
            const coffee = req.body;
            const result = await coffeeDBCollection.insertOne(coffee);
            res.send(result);
        })

        app.put('/coffees/:id', async (req, res) => {
            const id = req.params.id;
            const coffee = req.body;
            const filter = { _id: new ObjectId(id)};
            const options = { upsert: true };
            const updateCoffee = {
                $set: {
                 name: coffee.name,  
                 chef: coffee.chef,  
                 supplier: coffee.supplier,  
                 taste: coffee.taste,  
                 category: coffee.category,  
                 details: coffee.details,  
                 photo: coffee.photo,  
                }
            }
            const result = await coffeeDBCollection.updateOne(filter, updateCoffee, options);
            res.send(result);
        })

        app.delete('/coffees/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id)};
            const result = await coffeeDBCollection.deleteOne(query);
            res.send(result)
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

// Mongo DB Codes Ends





app.get('/', (req, res) => {
    res.send('hello I made it')
})

app.listen(port, () => {
    console.log(`This server is running on port: ${port}`);
})