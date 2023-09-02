import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <center>
        <h1>Not Found!!</h1>
        <br/><br/>
        <Link to="/">Home</Link>
    </center>
  )
}

export default NotFound