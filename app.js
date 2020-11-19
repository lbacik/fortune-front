
const express = require('express')
const routes = require('./src/routes')
const Fortune = require('./src/fortune/fortune')

const app = express()
const port = process.env.PORT || 3000
const fortuneUrl = process.env.FORTUNE_URL || 'http://localhost:5000'

const fortune = new Fortune(fortuneUrl)

app.set('view engine', 'pug')
app.set('views', './src/views')

app.use(express.static('public'));

routes(app, fortune)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
