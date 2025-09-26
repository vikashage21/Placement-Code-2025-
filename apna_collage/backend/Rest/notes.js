// npm install multer

const multer = require("multer");
const path = require("path");



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



// second step

// serve uploads folder as static
app.use("/uploads", express.static("uploads"));



// route for create new post

app.post("/posts", upload.single("image"), (req, res) => {
  const { username, content } = req.body;
  const id = uuid();
  
  posts.push({
    id,
    username,
    content,
    image: req.file ? "/uploads/" + req.file.filename : null
  });

  res.redirect("/posts");
});


// form in new.ejs

{/* <form action="/posts" method="POST" enctype="multipart/form-data">
  <input type="text" name="username" placeholder="Your name">
  <br>
  <textarea name="content" rows="5" cols="30" placeholder="Write your post..."></textarea>
  <br>
  <input type="file" name="image" accept="image/*">
  <br>
  <button type="submit">Create Post</button>


</form> */}

// display image in index.ejs
// <% if (post.image) { %>
//   <img src="<%= post.image %>" alt="Post Image" class="post-img">
// <% } %>
