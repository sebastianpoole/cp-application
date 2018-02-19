import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import PropTypes from 'prop-types'

import {Grid, Row} from 'react-bootstrap'
import ReturnForm from './scenes/ReturnForm/index'
import { Nav, Navbar } from "react-bootstrap";




const App = ({ store }) => (
  <Provider store={store}>
      <Router>
       <Route path="/" component={ReturnForm} />
     </Router>
   </Provider>  
)

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App