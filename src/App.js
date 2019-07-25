import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Messages from './components/Messages'
import { AddMessage } from './components/AddMessage'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import About from './components/pages/About'
import axios from 'axios'
import uuid from 'uuid'

class App extends Component {
  state = {
    messages: [
      {
        id: uuid.v4(),
        from: 'Luwee',
        status: 'unread',
        content: 'Hi! Are you guys doing great?'
      },
      {
        id: uuid.v4(),
        from: 'Aliou',
        status: 'unread',
        content: 'I am a network engineer'
      }
    ]
  }

  addMessage = message => {
    const newMessage = {
      id: uuid.v4(),
      from: message.from,
      status: 'unread',
      content: message.content
    }
    this.setState({ messages: [...this.state.messages, newMessage] })
  }

  deleteMessage = id => {
    this.setState({
      messages: [...this.state.messages.filter(message => message.id !== id)]
    })
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(resp => console.log(resp.data))
  }

  render() {
    return (
      <Router>
        <div className="app">
          <div className="container container-fluid">
            <div className="row p-3" style={{ backgroundColor: 'grey' }}>
              <div className="col">
                <Header />
              </div>
            </div>

            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <div className="row">
                    <div className="col">
                      <AddMessage onSubmit={this.addMessage} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <Messages
                        messages={this.state.messages}
                        deleteMessage={this.deleteMessage}
                      />
                    </div>
                  </div>
                </React.Fragment>
              )}
            />

            <Route path="/about" component={About} />

            <div className="row">
              <div className="col">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
