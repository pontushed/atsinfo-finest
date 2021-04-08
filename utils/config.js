require('dotenv').config()

let PORT = process.env.PORT
let COUNTRY = process.env.COUNTRY || 'Finland'

let MONGODB_URI = process.env.MONGODB_URI_FIN
let FOREIGN_API = 'https://atsinfo-finest-est.herokuapp.com/api'

if (process.env.COUNTRY === 'Estonia') {
  MONGODB_URI = process.env.MONGODB_URI_EST
  FOREIGN_API = 'https://atsinfo-finest-fin.herokuapp.com/api'
}

module.exports = {
  PORT,
  MONGODB_URI,
  COUNTRY,
  FOREIGN_API
}