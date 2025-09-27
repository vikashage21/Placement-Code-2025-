const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = 3000;
const path = require('path')
const methodOverride = require('method-override')


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
// connecting to server of mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'mernstack_project',
    password: "root"
});

// generating random user data
function getRandomUser() {
    return [
        faker.string.uuid(),
        faker.internet.username(),   // corrected method name (was username())
        faker.internet.email(),
        faker.internet.password()
    ];
}



// route of home 

app.get('/', (req, res) => {
    let q = 'select count(*) from user';
    try {

        connection.query(q, (err, result) => {

            let count = result[0]['count(*)']
            if (err) throw err;
            res.render('home.ejs', { count })
        });


    } catch (error) {

        console.log(error)
        res.send('something wrong')

    }


})


//  route to show the users
app.get('/user', (req, res) => {
    let q = 'select * from user';
    try {

        connection.query(q, (err, result) => {
            let user = result

            if (err) throw err;

            res.render('user.ejs', { user })
        });


    } catch (error) {

        console.log(error)

    }

})


// route to show edit form

app.get('/user/:id/edit', (req, res) => {
    const { id } = req.params;

    let q = `select * from user where id ='${id}'`;

    try {

        connection.query(q, (err, result) => {
            let user = result[0]
            if (err) throw err;

            res.render('form.ejs', { user })
        });


    } catch (error) {

        console.log(error)

    }


})

// update route for change the username

app.patch('/user/:id/edit', (req, res) => {
    const { id } = req.params;

    const { username, password
    } = req.body;


    let q = `select * from user where id = '${id}'`;

    try {

        connection.query(q, (err, result) => {
            let user = result[0]

            if (user.password != password.trim()) {
                res.send('wrong password')
            } else {
                let q2 = `update user set username = '${username}'  where id = '${id}'`;


                try {

                    connection.query(q2, (err, result) => {
                        res.send(result)
                        if (err) {
                            console.log(err)
                        }

                    });


                } catch (error) {

                    console.log(error)

                }

            }


        });


    } catch (error) {

        console.log(error)

    }

})




app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})

