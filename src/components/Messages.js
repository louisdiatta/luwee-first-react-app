import React, { Component } from 'react'
import MessageItem from './MessageItem'
import PropTypes from 'prop-types'

export default class Messages extends Component {
  render() {
    return this.props.messages.map(message => (
      <MessageItem
        key={message.id}
        message={message}
        deleteMessage={this.props.deleteMessage}
      />
    ))
  }
}

Messages.propTypes = {
  messages: PropTypes.array,
  deleteMessage: PropTypes.func.isRequired
}

Messages.defaultProps = {
  messages: [
    {
      id: 1,
      from: 'Luwee',
      status: 'unread',
      content: 'Hi! Are you guys doing great?'
    },
    {
      id: 2,
      from: 'Ama',
      status: 'read',
      content: 'I need help with wordpress'
    },
    {
      id: 3,
      from: 'Aliou',
      status: 'unread',
      content: 'I am a network engineer'
    }
  ]
}
