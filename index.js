const express = require('express')
const app = express()
const zendeskTicketPost = require('./api/zendesk-ticket-post')

app.use(express.json({ extension: false }))

app.use("/api/zendesk-ticket-post", zendeskTicketPost)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`server is running in port ${PORT}`))
