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

app.use((req, res)=>{
    res.send('this is a basic response')
})

// routing 

// app.get('/',(req , res)=>{
//     res.send('hello world')
// })


app.listen(port, () => {
    console.log(`listening on port localhost//${port}`)
})