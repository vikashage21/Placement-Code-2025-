let app = require('express')();
let port = 4000;
const path = require('path')

// setting view engine

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))

// route home

app.get('/', (req, res) => {
    // res.send('this is home page')
    //  here we are rendering the home page

    res.send('this home')
}

)

app.get('/diceroll' ,(req ,res)=>{
    let randomNum = Math.floor(Math.random()*6)+1;
    res.render('home.ejs', {randomNum})
})
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})