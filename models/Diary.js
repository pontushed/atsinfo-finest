const mongoose = require('mongoose')

const diarySchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1
  },
  datetime: {
    type: Date
  },
  description: {
    type: String
  },
  unit: {
    type: String,
    required: true,
    minlength: 2
  },
  issuer: {
    type: String,
    required: true,
    minlength: 2
  }
})

diarySchema.set('toJSON', {
  transform: (doc, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Diary', diarySchema)