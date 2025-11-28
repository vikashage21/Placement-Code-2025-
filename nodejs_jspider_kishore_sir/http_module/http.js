// getting http module

const http = require('http');
const fs = require('fs')
const { hostname } = require('os');
const path = require('path');
// const { json } = require('stream/consumers');
// creating http server 

const port = 8000

http.createServer((req, res) => {

    const { url } = req;
    const { method } = req;
    console.log(url)


    if (url == '/' || method == 'get') {

        const home = fs.readFileSync(path.join(__dirname, 'pages', 'Home.html'))

        res.write(home)
        // to end the response 
        res.end()


    } else if (url == "/http_module/css/home.css" || method == "get") {
        const home = fs.readFileSync(path.join(__dirname, 'css', 'home.css'))
        res.write(home)
        res.end()
    }

    else if (url == '/signup' || method == 'get') {
        const signup = fs.readFileSync(path.join(__dirname, 'pages', 'Signup.html'))
        res.write(signup)
        res.end()
    }


    else if (url == '/about') {
        const about = fs.readFileSync(path.join(__dirname, 'pages', 'About.html'))
        res.write(about)
        res.end()
    } else if (url == '/contact') {
        const Contact = fs.readFileSync(path.join(__dirname, 'pages', 'Contact.html'))
        res.write(Contact)
        res.end()
    }
    else if (url == '/login' || method == 'get') {
        const login = fs.readFileSync(path.join(__dirname, 'pages', 'login.html'))
        res.write(login)
        res.end()
    } else {
        res.write('page not found')
        res.end()
    }

    if (method == 'post' || url == '/api/signup') {
        console.log('listing the request')
        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
            console.log(body)
            const data = [body]

            fs.writeFileSync('user.json', data.toString())
            return res.end(JSON.stringify(body))



        });

    }




}).listen(port, hostname, () => {
    console.log(`server is listing on port ${port}`)
})