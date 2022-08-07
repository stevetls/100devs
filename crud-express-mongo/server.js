const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs')


app.listen(3000, function() {
    console.log('listening on 3000')
})


const connectionString = "mongodb+srv://master:0000@cluster0.7ui25i9.mongodb.net/?retryWrites=true&w=majority";

// MongoClient.connect(connectionString, (err, client) => {
//     if (err) return console.error(err)
//     console.log('Connected to Database')
// })

MongoClient.connect(connectionString, {useUnifiedTopology: true})
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('star-wars-quotes')
        const quotesCollection = db.collection('quotes')

        app.use(express.static('public'))
        app.use(bodyParser.urlencoded({ extended: true}))
        app.use(bodyParser.json())

        // All your handles here...
        app.get('/', (req, res) => {
            // res.sendFile(__dirname + '/index.html')
            db.collection('quotes').find().toArray()
                .then(results => {
                    // console.log(results)
                    res.render('index.ejs', { quotes: results})
                })
                .catch(error => console.error(error))
        })

        app.post('/quotes', (req, res) => {

            // console.log(req.body)
            quotesCollection.insertOne(req.body)
            .then(result => {
                console.log(result)
                res.redirect('/')
            })
            .catch(error => console.error(error))
        })

        app.put('/quotes', (req, res) => {
            // console.log(req.body)
            
            // update quote
            quotesCollection.findOneAndUpdate(
                { name: 'Yoda' },
                {
                    $set: {
                        name: req.body.name,
                        quote: req.body.quote                    
                    }
                },
                {
                    upsert: true
                }
            )
            .then(result => { 
                res.json('Success')
            })
            .catch(error => console.error(error))
        })

        app.delete('/quotes', (req, res) => {
            quotesCollection.deleteOne(
                { name: req.body.name },
            )
            .then(result => {
                if (result.deletedCount === 0) {
                    return res.json('No quote to delete')
                }
                res.json(`Deleted Darth Vader's quote`)
            })
            .catch(error => console.error(error))
        })

    })
    .catch(error => console.error(error))




