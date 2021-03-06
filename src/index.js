import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import SignIn from './SignIn'
import TestAjax from './TestAjax'
import * as serviceWorker from './serviceWorker'

/* ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
)

const name = 'Josh Perez'
const element = <h1>Hello, {name}</h1>

ReactDOM.render(
  element,
  document.getElementById('root')
) */

// ReactDOM.render(<App />, document.getElementById('root'))

// ReactDOM.render(<SignIn />, document.getElementById('root'))
// ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
