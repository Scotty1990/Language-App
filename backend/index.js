const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.set('port', process.env.PORT || 8000)

app.use(express.urlencoded({ extended: true }))

const languageController = require('./controllers/language')
app.use('/languages', languageController)

app.listen(app.get('port'), () => {
    console.log(`PORT: ${app.get('port')}`)
})