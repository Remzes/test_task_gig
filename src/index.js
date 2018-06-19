import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import 'react-table/react-table.css'
import 'babel-polyfill'

import store from './store'
import App from './components/App'
import './scss/App.scss'

render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById("index")
);