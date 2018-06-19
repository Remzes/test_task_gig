import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions'
import TableComponent from './TableComponent/TableComponent'

class App extends Component {
    render(){
        return (
          <div>
            <TableComponent />
          </div>
        )
    }
}

export default connect(null, actions)(App);
