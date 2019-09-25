import React from 'react'
import Header from '../Header/Header'
import About from '../About/About'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default App

