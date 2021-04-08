const conf = require('./utils/config')
const express = require('express')
require('express-async-errors')
const cors = require('cors')
const sectorConfRouter = require('./routers/SectorConfRouter')
const usersRouter = require('./routers/UsersRouter')
const loginRouter = require('./routers/LoginRouter')
const diaryRouter = require('./routers/DiaryRouter')
const sse = require('./utils/serverSideEvents')
const axios = require('axios')

const mongoose = require('mongoose')
const errors = require('./utils/errors')
const middleware = require('./utils/middleware')
const app = express()

console.log('connecting to MongoDB: ' + conf.COUNTRY)
mongoose.set('useFindAndModify', false)
mongoose.connect(conf.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to MongoDB')
    if (process.env.NODE_ENV === 'test' && process.env.JEST_WORKER_ID === undefined) {
      console.log('Initializing test database')
      const testInitializer = require('./utils/testInitializer')
      testInitializer.run()
    }
  })
  .catch((error) => {
    console.log('error connecting to MongoDB: ', error.message)
  })

console.log('connecting to foreign API: ' + conf.FOREIGN_API)

app.locals.FOREIGN_API_TOKEN = null
axios.post( conf.FOREIGN_API + '/login', { username: 'chief', password: 'finest' })
  .then(response => {
    if (response.data.token) {
      console.log('Token received from foreign API.')
      app.locals.FOREIGN_API_TOKEN = response.data.token
    } else throw new Error('Error getting token from foreign API')
  })
  .catch(error => console.log(error))

app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use(middleware.tokenExtractor)
app.use('/api/diary', diaryRouter)
app.use('/api/sectorconf', sectorConfRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.get('/api/events', sse.eventsHandler)
app.use(errors.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app