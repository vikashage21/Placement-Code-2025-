let express = require('express')
let app = express()
let port =4000;

app.use(express.urlencoded({
    extended : true
}))

app.use(express.json())

//  creating a route for get request

app.get('/register', (req, res)=>{
    let {username , password} = req.query;
    res.send('your username is ' + username + ' and your password is ' + password)
})

// creating a route for post request

app.post('/register' , (req, res)=>{
    let {username , password }= req.body;
    res.send('your username is ' + username + ' and your password is ' + password)
})

app.listen(port,()=>{
    console.log('server is running on port ' + port)
})