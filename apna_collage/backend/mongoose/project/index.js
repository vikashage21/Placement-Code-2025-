const express = require('express')
const app = express()
const port = 8080;
const path = require('path')
const mongoose = require('mongoose')
const Chat = require('./models/chatschema.js');
const methodOverride = require('method-override')


// setting view engine

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


// calling main function

main().then(() => {
    console.log('connection successful')
}).catch((error) => {
    console.log(error)
})


// defining a mongoose connecting 

async function main() {

    await mongoose.connect('mongodb://127.0.0.1:27017/whatsup')

}


// defining mongoose new models here





// route for root 

app.get('/', (req, res) => {
    res.send('working ....')
})

// route for chats

app.get('/chats', async (req, res) => {

    let chats = await Chat.find()

    res.render('index.ejs', { chats })
})

// route for new chat

app.get('/chats/new', (req, res) => {
    res.render('form.ejs')
})

// route for post request chats

app.post('/chats', (req, res) => {
    const { from, to, msg } = req.body;
    const newMsg = new Chat({
        from,
        to,
        msg,
        created_at: new Date()
    })
    console.log(newMsg)
    newMsg.save().then((res) => {
        console.log('save send', res)
    }).catch((err) => {
        console.log(err)
    })

    res.redirect('/chats')
})

// route for get edit forms

app.get('/chats/:id/edit', async (req, res) => {
    const { id } = req.params;
    const chats = await Chat.findById(id);
    res.render('edit.ejs', { chats })

})

app.put('/chats/:id/edit', async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    
    let updatedChat = await Chat.findByIdAndUpdate({_id:id},{msg : newMsg},{runValidators:true},{new:true})
    res.redirect('/chats')
})

//  route to delete msg

app.delete('/chats/:id/edit', async (req, res) => {
    let { id } = req.params;
  
    
    let deletedMsg = await Chat.findByIdAndDelete({_id:id})
    res.redirect('/chats')
})

app.listen(port, () => {
    console.log('The sever is listing on port ' + port)
})