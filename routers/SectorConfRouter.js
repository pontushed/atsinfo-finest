const sectorConfRouter = require('express').Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const SectorConf = require('../models/SectorConf')
const sse = require('../utils/serverSideEvents')

sectorConfRouter.get('/', (req, res) => {
  SectorConf.find({}).then(confs => {
    res.json(confs)
  })
})

sectorConfRouter.post('/', async (req, res, next) => {
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

  if (!body.effectiveAt) {
    return res.status(400).json({
      error: 'effectiveAt missing'
    })
  }

  if (!body.issuer) {
    return res.status(400).json({
      error: 'issuer missing'
    })
  }

  const obj = {
    title: body.title,
    effectiveAt: body.effectiveAt,
    comment: body.comment,
    issuer: body.issuer
  }

  const sectorconf = new SectorConf(obj)
  try {
    const savedSectorConf = await sectorconf.save()
    sse.sendEventsToAll(savedSectorConf, 'secConf', 'new')
    return res.json(savedSectorConf)
  } catch (e) {
    next(e)
  }
})

sectorConfRouter.delete('/:id', (req, res, next) => {
  SectorConf.findByIdAndRemove(req.params.id)
    .then(() => {
      sse.sendEventsToAll(req.params.id, 'secConf', 'delete')
      res.status(204).end()
    })
    .catch(error => next(error))
})

sectorConfRouter.put('/:id', (req, res, next) => {
  const body = req.body

  if (!body.title) {
    return res.status(400).json({
      error: 'title missing'
    })
  }

  if (!body.effectiveAt) {
    return res.status(400).json({
      error: 'effectiveAt missing'
    })
  }

  if (!body.issuer) {
    return res.status(400).json({
      error: 'issuer missing'
    })
  }

  const obj = {
    title: body.title,
    effectiveAt: body.effectiveAt,
    comment: body.comment,
    issuer: body.issuer
  }

  SectorConf.findByIdAndUpdate(req.params.id, obj, { new: true })
    .then(obj => {
      sse.sendEventsToAll(obj, 'secConf', 'update')
      res.json(obj)
    })
    .catch(error => next(error))
})
module.exports = sectorConfRouter
