const diaryConfRouter = require('express').Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const Diary = require('../models/Diary')
const sse = require('../utils/serverSideEvents')
const conf = require('../utils/config')
const axios = require('axios')


diaryConfRouter.get('/', (req, res) => {
  Diary.find({}).then(confs => {
    res.json(confs)
  })
})

diaryConfRouter.post('/', async (req, res, next) => {
  const body = req.body

  const token = req.token

  let id = ''
  if (token && token.length > 0) {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!decodedToken.id) {
      return res.status(401).json({ error: 'token invalid' })
    }
    id = decodedToken.id
  }

  if (id === '' || !await User.exists({ _id: id })) {
    return res.status(401).json({ error: 'not logged in' })
  }

  if (!body.title) {
    return res.status(400).json({
      error: 'title missing'
    })
  }

  if (!body.unit) {
    return res.status(400).json({
      error: 'unit missing'
    })
  }

  if (!body.issuer) {
    return res.status(400).json({
      error: 'issuer missing'
    })
  }

  const obj = {
    title: body.title,
    datetime: body.datetime,
    description: body.description,
    unit: body.unit,
    issuer: body.issuer
  }

  // Send to other country!
  if (req.app.locals.FOREIGN_API_TOKEN && !body.isSyncMessage) {
    const config = {
      headers: {
        'Authorization': 'bearer ' + req.app.locals.FOREIGN_API_TOKEN
      }
    }
    try {
      await axios.post(conf.FOREIGN_API + '/diary', { ...body, isSyncMessage:true } , config)
    } catch (e) {
      next(e)
    }
  }

  if (id !== '') obj.user = id

  const diary = new Diary(obj)
  try {
    const savedDiary = await diary.save()
    sse.sendEventsToAll(savedDiary.toJSON(), 'diary', 'new')
    return res.json(savedDiary.toJSON())
  } catch (e) {
    next(e)
  }
})

diaryConfRouter.delete('/:id', (req, res, next) => {
  Diary.findByIdAndRemove(req.params.id)
    .then(() => {
      sse.sendEventsToAll(req.params.id, 'diary', 'delete')
      res.status(204).end()
    })
    .catch(error => next(error))
})

diaryConfRouter.put('/:id', (req, res, next) => {
  const body = req.body

  if (!body.title) {
    return res.status(400).json({
      error: 'title missing'
    })
  }

  if (!body.unit) {
    return res.status(400).json({
      error: 'unit missing'
    })
  }

  if (!body.issuer) {
    return res.status(400).json({
      error: 'issuer missing'
    })
  }

  const obj = {
    title: body.title,
    datetime: body.datetime,
    description: body.description,
    unit: body.unit,
    issuer: body.issuer
  }

  Diary.findByIdAndUpdate(req.params.id, obj, { new: true })
    .then(obj => {
      res.json(obj)
      sse.sendEventsToAll(obj, 'diary', 'update')
    })
    .catch(error => next(error))
})

diaryConfRouter.post('/test', (req, res, next) => {
  res.json(req.body)
  sse.sendEventsToAll(req.body, 'diary', 'test')
})
module.exports = diaryConfRouter

