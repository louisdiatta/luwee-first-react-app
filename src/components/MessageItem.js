import React, { Component } from 'react'

export class MessageItem extends Component {
  render() {
    const { id, from, status, content } = this.props.message
    return (
      <div>
        <div className="row p-3 border">
          <div className="from col-md-3 col-sm-12">
            <span className="label">From: </span>
            <span className="value">{from}</span>
          </div>
          <div className="status col-md-3 col-sm-12">
            <span className="label">Status: </span>
            <span className="value">{status}</span>
          </div>
          <div className="message col-md-3 col-sm-12">
            <span className="label">Message: </span>
            <span className="value">{content}</span>
          </div>
          <div className="del col-md-3 col-sm-12">
            <button
              onClick={this.props.deleteMessage.bind(this, id)}
              className="btn btn-danger float-right"
              style={{ borderRadius: '50%' }}
            >
              X
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default MessageItem
