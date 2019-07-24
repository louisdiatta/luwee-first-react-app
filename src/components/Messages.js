import React, { Component } from 'react'
import MessageItem from './MessageItem'
export default class Messages extends Component {
  render() {
    return this.props.messages.map(message => (
      <MessageItem key={message.id} message={message} deleteMessage={this.props.deleteMessage} />
    ))
  }
}
