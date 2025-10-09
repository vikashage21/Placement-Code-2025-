const express = require('express');
const router = express.Router()

router.get('/signup', (req, res) => {
    res.render('../views/user/user.ejs')
})



module.exports = router