import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions'
import Dashboard from './Dashboard/Dashboard'

const App = () => (
  <div>
    <Dashboard />
  </div>
);

export default connect(null, actions)(App);
