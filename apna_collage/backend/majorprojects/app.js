const express = require('express');
const app = express()
const port = 8080;
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const listing = require('./models/listing.js')
const path = require('path')
const engine = require('ejs-mate')

// setting ejs engine
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))



app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname,'public')))

// defining variables

let MONGODB_URL = "mongodb://127.0.0.1:27017/worderlust";

// connecting to database;
main().then(() => {
    console.log('connected to database ')
}).catch((err) => {
    console.log(err)
})

async function main() {
    await mongoose.connect(MONGODB_URL)
}

// route for root

app.get('/', (req, res) => {
    res.send('working root')
})

// listing route .

app.get('/listing', async (req, res) => {
    const allListing = await listing.find({});
    res.render('listing/index.ejs', { allListing })

})
// route for adding new post

app.get('/listing/new', async (req, res) => {
    res.render('listing/new.ejs')
})



// route for showing individual listing

app.get('/listing/:id', async (req, res) => {
    const { id } = req.params;
    const list = await listing.findById(id);
    res.render('listing/listing.ejs', { list })

})

// post request for new post

app.post('/listing', async (req, res) => {
    const { title, description, image, price, location, country } = req.body
    const allListing = new listing({
        title,
        description,
        image,
        price,
        location,
        country

    })
    console.log(allListing)

    await allListing.save()
    res.redirect('/listing')


})

// route for update post

app.get('/listing/:id/edit', async (req, res) => {
    const { id } = req.params;
    const list = await listing.findById(id)
    res.render('listing/edit.ejs', { list })
})

// route put request

app.put('/listing/:id/edit', async (req, res) => {
    const { id } = req.params;
    console.log(id)
    console.log(req.body)
    const updatedList = await listing.findByIdAndUpdate(id, { ...req.body })

    console.log(updatedList)
    res.redirect(`/listing/${id}`
    )
 

})

app.delete('/listing/:id/edit',async(req, res)=>{
    const {id} = req.params;
    const deletedList = await listing.findByIdAndDelete(id)
    console.log(deletedList)
    res.redirect('/listing')
})


// app.get('/testListing', async(req, res)=>{
//     const sampleListing = new listing({
//         title:"my new villa",
//         description:"by the beach",
//         price:"1220",
//         location:"new york",
//         country:"america"
//     })

//     await sampleListing.save()
//     res.send('sample saved in database')

// })


// server listing 
app.listen(port, () => {
    console.log(`server is listing on ${port}`)
})