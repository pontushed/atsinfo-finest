const User = require('../models/User')
const Tip = require('../models/Tip')
const bcrypt = require('bcrypt')

const run = async () => {
  await User.deleteMany({})
  const passwordHash = await bcrypt.hash('finest', 10)
  const user = new User({ username: 'finest', passwordHash })
  await user.save()
}

module.exports = { run }