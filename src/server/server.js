import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import path from 'path'
import CONFIG from './server-config.json'
import App from '../components/App/App'
import { createServer } from "http";

const { PORT = 3000 } = CONFIG 
const app = express()

app.use(express.static(`public`))

const appString = ReactDOMServer.renderToString(<App />)
const template = `
  <html>
    <head>
    <link rel="stylesheet" type="text/css" href="reset.css" />
    </head>
      <body>
        <div id="app">${appString}</div>
        <script src="bundle.js"></script>
      </body>
  </html>
`

app.listen(`3000`, () => {
  console.log(`App listening on port 3000`)
})

app.get(`/`, (req, res) => {
  res.send(template)
})

