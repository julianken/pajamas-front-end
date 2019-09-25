import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import path from 'path'
import CONFIG from './server-config.json'
import App from '../components/App/App'
import { createServer } from "http";
import { StaticRouter } from 'react-router-dom'

const { PORT = 3000 } = CONFIG 
const app = express()

app.use(express.static(`public`))


app.listen(`3000`, () => {
  console.log(`App listening on port 3000`)
})

app.get(`/`, (request, res) => {
  const context = {}

  const appString = ReactDOMServer.renderToString(
    <StaticRouter
      location={request.url}
      context={context}
    >
      <App />
    </StaticRouter>

  )

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

  res.send(template)
})

