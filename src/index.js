import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import { hydrate } from 'react-dom'

const renderTarget = document.querySelector(`#app`)

ReactDOM.hydrate(
  <App />,
  renderTarget
)

