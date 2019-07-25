import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddMessage extends Component {
  state = {
    message: {
      from: '',
      status: '',
      content: ''
    }
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.message)
  }

  onChange = event => {
    const { target } = event
    const fieldValue =
      target.type === 'checkbox' ? target.checked : target.value
    const fieldName = target.name

    const { message } = { ...this.state }
    message[fieldName] = fieldValue
    this.setState({ message })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="row">
          <div className="col">
            <h4>Ajouter message</h4>
          </div>
        </div>
        <div className="row form-group">
          <div className="col-md-4 col-sm-12">
            <input
              className="form-control"
              placeholder="From"
              name="from"
              type="text"
              onChange={this.onChange}
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <input
              className="form-control"
              placeholder="Message"
              name="content"
              type="text"
              onChange={this.onChange}
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <input className="btn btn-primary" type="submit" value="Ajouter" />
          </div>
        </div>
      </form>
    )
  }
}

export default AddMessage

AddMessage.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
