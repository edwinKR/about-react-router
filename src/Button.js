import React from 'react'
import { withRouter } from 'react-router-dom'

const Button = (props) => {
  console.log(props)
  return (
    <button onClick={() => {
      console.log(props)
      return props.history.push('/')
    }}>
      Go back to Home
    </button>
  )
}

export default withRouter(Button)