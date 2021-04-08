const { v4: uuidv4 } = require('uuid')

let clients = []

const eventsHandler = (request, response, next) => {
  const headers = {
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache'
  }
  response.writeHead(200, headers)
  // Write a welcome message. This will only inform the browser about the connection.
  response.write(`ATSINFO EVENT STREAM\n\n`)

  const clientId = uuidv4()

  const newClient = {
    id: clientId,
    response
  }

  clients.push(newClient)

  request.on('close', () => {
    console.log(`${clientId} Connection closed`)
    clients = clients.filter(client => client.id !== clientId)
  })
}

const sendEventsToAll = (newEvent, type, action) => {
  const data = JSON.stringify({...newEvent, type, action})
  clients.forEach(client => {
    client.response.write(`data: ${data}\n\n`)
  })
}

module.exports = { eventsHandler, sendEventsToAll}