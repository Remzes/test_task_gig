import React, {Component} from 'react';
import {Route, HashRouter} from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard'

class App extends Component {

  render() {
    return (
      <div>
        <HashRouter>
          <section>
            <Route path="/" component={Dashboard} />
          </section>
        </HashRouter>
      </div>
    )
  }
};

export default App;
