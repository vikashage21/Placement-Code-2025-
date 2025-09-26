const express = require('express')
const app = express()
const port = 8080;
const path = require('path')
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override')
const multer = require('multer');

// storage setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // folder to save uploaded images
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // unique filename
    }
});

const upload = multer({ storage: storage });

// serve uploads folder as static
app.use("/uploads", express.static("uploads"));

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
// app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, '/public')))


let posts = [
    {
        id: uuid(),
        username: "vikash",
        content: "hello everyone",
        image: path.join('/uploads/image1.png')
    },
    {
        id: uuid(),
        username: "mohan",
        content: "i love coding",
        image: path.join('/uploads/image1.png')
    }
    ,
    {
        id: uuid(),
        username: "prem",
        content: "hello world",
        image: path.join('/uploads/image1.png')
    }
]

// all posts routes.
app.get('/posts', (req, res) => {
    res.render('index.ejs', { posts })
})

// route for display form

app.get('/posts/new', (req, res) => {
    res.render('new.ejs')
})

// route for create new post

app.post('/posts', upload.single('image'), (req, res) => {
    const { username, content } = req.body;
    console.log(req.file)
    const id = uuid()
    posts.push({
        id,
        username,
        content,
        image: req.file ? "/uploads/" + req.file.filename : null

    })
    res.redirect('/posts')
})

// route for individual post 

app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    const post = posts.find((p) => p.id == id);
    console.log(post)
    res.render('show.ejs', { post })
})

// route for edit the post 
app.get('/posts/:id/edit', (req, res) => {
    const { id } = req.params;
    const post = posts.find((p) => p.id == id);
    res.render('edit.ejs', { post })
})

// route for update the post

app.patch('/posts/:id', upload.single('image'), (req, res) => {
    const { id } = req.params;
    const newContent = req.body.content;
    const newImage = req.file ? "/uploads/" + req.file.filename : null;


    const foundPost = posts.find((p) => p.id == id);
    foundPost.content = newContent;
    foundPost.image = newImage;
    res.redirect('/posts');
})

// route for delete the post
app.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    posts = posts.filter((p) => p.id != id);
    res.redirect('/posts')
})
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
})