import React, {Component} from 'react'
import ReactTable from 'react-table'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import {pokemonsFilterSelector} from '../../selectors'

const columns = [{
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
}, {
    Header: 'Url',
    accessor: 'url',
}];

class TableComponent extends Component {
    componentWillMount() {
       this.props.fetchPokemons()
    }

    searchBox = ev => {
        this.props.searchPokemons(ev.target.value)
    }

    render() {
        const {fetched, data} = this.props.pokemons;
        if (fetched) {
            return (
              <div>
                <input value={this.props.searchBoxValue} onChange={this.searchBox} />
                <ReactTable data={data} columns={columns} />
              </div>
            )
        }
        return "Loading..."
    }
}

export default connect((state) => ({
    searchBoxValue: state.filters.searchBoxValue,
    pokemons: pokemonsFilterSelector(state)
}), actions)(TableComponent)