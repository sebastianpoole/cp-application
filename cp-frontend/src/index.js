import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import App from './App'

const dest = document.getElementById('content')

const reducer = combineReducers({
  form: reduxFormReducer
})

const store = (
  window.devToolsExtension 
  ? window.devToolsExtension()(createStore) 
  : createStore
  )(reducer)


  ReactDOM.render(
    <App store={store} />,
    dest
  )
