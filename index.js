const express = require('express')
const app = express()
// const production = require('./api/product')

app.use(express.json({extension: false}))

// app.use("/api/product", product)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`server is running in port ${PORT}`))