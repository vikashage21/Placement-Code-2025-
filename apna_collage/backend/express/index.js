const express = require('express')
const app = express()
const port = 3000

// console.dir(app)
//  middleware
// all request will listen by this middleware.
// app.use((req, res)=>{
//     console.log('request received')
// })


// routing - to send the response to the client 
// sending response 

// app.use((req, res)=>{
//     res.send('this is a basic response')
// })

// routing 

app.get('/', (req, res) => {
    res.send('hello world')
})

//  initializing path for dynamic routing

// app.get('/:username', (req, res) => {
//     console.log(req.params)
//     res.send('hello ' + req.params.username)
// })

//  query string

app.get('/search', (req, res) => {
    let { q } = req.query;
    console.log(q)
    if (!q) {
        res.send('no search found ')
    } else {
        res.send('search results for ' + q)
    }
})

app.listen(port, () => {
    console.log(`listening on port localhost//${port}`)
})