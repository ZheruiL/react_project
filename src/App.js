/* import React from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'
import logo from './logo.svg'
import './App.css'

function App () {
  return (
    <Button variant='contained' color='primary'>
      你好莫宝宝
    </Button>
  )
}

export default App */

import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListProductComponent from './component/product/ListProductComponent'
import AddProductComponent from './component/product/AddProductComponent'
import EditProductComponent from './component/product/EditProductComponent'

function App () {
  return (
    <div className='container'>
      <Router>
        <div className='col-md-6'>
          <h1 className='text-center' style={style}>Test technique</h1>
          <Switch>
            <Route path='/' exact component={ListProductComponent} />
            <Route path='/products' component={ListProductComponent} />
            <Route path='/add-product' component={AddProductComponent} />
            <Route path='/edit-product' component={EditProductComponent} />

          </Switch>
        </div>
      </Router>
    </div>
  )
}

const style = {
  color: 'red',
  margin: '10px'
}

export default App
