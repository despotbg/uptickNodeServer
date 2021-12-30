var express = require('express')
var bodyParser = require('body-parser')
const router = express.Router()
var zendesk = require('node-zendesk')

var app = express()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/zendesk-ticket-post', urlencodedParser, function (req, res) {
  try {
    var client = zendesk.createClient({
      username: 'despotbg@yahoo.com',
      token: 'lhtdGAkluDRoRwNdLhF7G7gr35KUpsjxFkdd4NBw',
      remoteUri: 'https://uptick2.zendesk.com/api/v2'
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
