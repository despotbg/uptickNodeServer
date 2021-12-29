const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {

    try {
        res.json({
            status: 200,
            message: 'OK 111'
        })

    } catch (err) {
        console.error(err)
        return res.status(500).send("Server error")
    }

})

module.exports = router