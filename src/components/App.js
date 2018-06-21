import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard'

const App = () => (
  <div>
    <HashRouter>
      <Route exact path="/" component={Dashboard} />
    </HashRouter>
  </div>
);

export default App;
