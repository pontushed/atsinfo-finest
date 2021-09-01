import React from 'react'
import moment from 'moment'

const SecConfMessage = ({ msg }) => {
  if (msg) {
    const effectiveAt = moment.utc(msg.effectiveAt).format('D.M.Y HH:mm')
    return (
      <p>{effectiveAt}:{msg.country}:<strong>{msg.title}</strong> by {msg.issuer} {msg.comment}</p>
    )
  }
  return null
}

export default SecConfMessage