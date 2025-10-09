const express = require('express')

const app = express()

const cookieParser = require('cookie-parser')

app.use(cookieParser())


//  creating basic route

app.get('/', (req, res) => {
    res.send('hello world')
    console.log(req.cookies.greet )
})

//  setting cookies

app.get('/setcookies', (req, res) => {
    res.cookie('greet', 'hello world')
    res.cookie('orgin', 'india')
    res.send('we sent you a cookies')
})


app.listen(8000, () => {
    console.log('server is listing on port 8000')
})