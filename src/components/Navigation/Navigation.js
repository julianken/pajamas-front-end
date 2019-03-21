import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to={`/`}>Feed</Link></li>
        <li><Link to={`/about`}>About</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation

