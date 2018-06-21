import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import 'react-table/react-table.css'
import 'react-select/dist/react-select.css';
import 'babel-polyfill'
import 'normalize.css'

import store from './store'
import App from './components/App'
import './assets/styles/scss/App.scss'

render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById("index")
);