require("dotenv").config({
  path: '.env',
});

var express = require('express')
var bodyParser = require('body-parser')
const router = express.Router()
var zendesk = require('node-zendesk')

var app = express()

const zendeskUsername = process.env.ZENDESK_USERNAME
const zendeskToken = process.env.ZENDESK_TOKEN
const zendeskUri = process.env.ZENDESK_URI

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/zendesk-ticket-post', urlencodedParser, function (req, res) {
  try {
    var client = zendesk.createClient({
      username: zendeskUsername,
      token: zendeskToken,
      remoteUri: zendeskUri
    })

    const from = req.body.name + ' ' + req.body.email || "[No name]"
    const message = req.body.message

    var ticket = {
      "ticket":
      {
        "subject": from,
        "comment": {
          "body": message
        }
      }
    }

    client.tickets.create(ticket, function (err, req, result) {
      if (err) return handleError(err)
      console.log(JSON.stringify(result, null, 2, true))
    })
  } catch (err) {
    console.error(err)
    return res.status(500).send("Server error")
  }
})

function handleError(err) {
  console.log(err)
  process.exit(-1)
}

app.listen(8080, () => {
  console.log("Started on PORT 8080")
})
