let app = require('express')()

let port = 4000;
let path = require('path');

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))

// routing

app.get('/', (req, res) => {
    res.send('this is home page')
})


// routing for instagram page.
app.get('/ig/:username', (req, res) => {
    let data = require('./data')
    let { username } = req.params;

    // find user from data array

    // find method returns the first matching element from array
    let user = data.find(u => u.username === username)

    if (user) {
        res.render('instagram', { data: user })
    } else {
        res.status(404).send('User not found')
    }
})

app.listen(port, () => {
    console.log('server is running on port ' + port)
})