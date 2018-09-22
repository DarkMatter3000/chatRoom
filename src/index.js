import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import Username from './components/SendMessage.js'
import SendMessageForm from './components/SendMessage.js'



class Index extends React.Component {
  render() {
    return (
      <div>
      <App />
        <Username />
        <SendMessageForm />
      </div>
    )
  }
}
ReactDOM.render(<Index />, document.getElementById('root'))
