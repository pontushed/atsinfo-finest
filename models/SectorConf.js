const mongoose = require('mongoose')

const sectorConfSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1
  },
  effectiveAt: {
    type: Date,
    required: true
  },
  comment: {
    type: String
  },
  issuer: {
    type: String,
    required: true,
    minlength: 2
  }
})

sectorConfSchema.set('toJSON', {
  transform: (doc, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('SectorConf', sectorConfSchema)