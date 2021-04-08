import React from 'react'

const DiaryMessage = ({ msg }) => {
  return (
    <p><strong>{msg.issuer.toUpperCase()}:</strong>{msg.title}</p>
  )
}

export default DiaryMessage