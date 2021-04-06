require('dotenv').config()

let PORT = process.env.PORT
let COUNTRY = process.env.COUNTRY || 'Finland'

let MONGODB_URI = process.env.MONGODB_URI_FIN

if (process.env.COUNTRY === 'Estonia') {
  MONGODB_URI = process.env.MONGODB_URI_EST
}

module.exports = {
  PORT,
  MONGODB_URI,
  COUNTRY
}