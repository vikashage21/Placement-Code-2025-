const express = require('express');
const app = express();
const ErrorValidator = require('./ErrorValidator');

// Middleware to check token
const checkToken = (req, res, next) => {
    const { token } = req.query;
    if (token === "giveaccess") {
        next();
    } else {
        // Better status code for auth issue: 403
        next(new ErrorValidator(403, 'Access denied'));
    }
};


// creating a asyncwrap function

const asyncwrap = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next)

    }
}

// Routes
app.get('/api', checkToken, asyncwrap((req, res) => {
    res.send('data');
}));

// Default error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).send({ error: message });
});

app.listen(8080, () => {
    console.log('server is listening on 8080');
});
