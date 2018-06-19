import React, {Component} from 'react'
import ReactTable from 'react-table'
import {connect} from 'react-redux'
import * as actions from '../../actions'

const columns = [{
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
}, {
    Header: 'Url',
    accessor: 'url',
}];

class TableComponent extends Component {
    state = {
        searchBoxValue: ""
    };

    componentWillMount() {
        this.props.fetchPokemons()
    }

    searchBox = ev => {
        this.setState({
            searchBoxValue: ev.target.value
        });
        this.props.searchPokemons(ev.target.value)
    }

    render() {
        const {fetched, data} = this.props.pokemons;
        if (fetched) {
            return (
              <div>
                <input value={this.state.searchBoxValue} onChange={this.searchBox} />
                <ReactTable data={data} columns={columns} />
              </div>
            )
        }
        return "Loading..."
    }
}

export default connect(({pokemons, filters}) => ({pokemons, filters}), actions)(TableComponent)