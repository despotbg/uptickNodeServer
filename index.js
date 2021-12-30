// then in your app
var express = require('express')
var bodyParser = require('body-parser')
 
var app = express()
 
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
// POST /login gets urlencoded bodies
app.post('/zendesk-ticket-post', urlencodedParser, function (req, res) {
  res.send('welcome, ' + req.body.name)
})
 
// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
  // create user in req.body
})

app.listen(8080, () => {
    console.log("Started on PORT 8080")
})





// const express = require("express")
// const bodyParser = require("body-parser")
// const router = express.Router()
// const app = express()
// // add router in express app
// app.use("/", router)

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json())

// // router.get('/', (req, res) => {
// //     res.sendfile("index.html");
// // });

// router.post('/zendesk-ticket-post', (req, res) => {
//     // var user_name = req.body.user;
//     // var password = req.body.password;
//     console.log(req.body)
//     res.end("yes")
// });

// app.listen(8080, () => {
//     console.log("Started on PORT 8080")
// })










// const express = require('express')
// const app = express()
// const zendeskTicketPost = require('./api/zendesk-ticket-post')

// app.use(express.json({ extension: false }))

// app.use("/api/zendesk-ticket-post", zendeskTicketPost)

// const PORT = process.env.PORT || 8080
// app.listen(PORT, () => console.log(`server is running in port ${PORT}`))