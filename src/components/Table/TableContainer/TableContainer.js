import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../../actions/index'
import {pokemonsFilterSelector} from '../../../selectors/index'
import TableComponent from '../TableComponent/TableComponent'
import Filters from '../../Filters/Filters'

class TableContainer extends Component {

  componentWillMount() {
    this.props.fetchPokemons();
  }

  render() {
    const {fetched, data} = this.props.pokemons;
    return (
      <section className="poketable">
        <section className="poketable__inner">
          <section className="poketable__inner__table-wrapper">
            <Filters types={data.map(pokemon => pokemon.types)} />
            <TableComponent data={data} fetched={fetched} />
          </section>
        </section>
      </section>
    )
  }
}

export default connect((state) => ({
  searchBoxValue: state.filters.searchBoxValue,
  pokemons: pokemonsFilterSelector(state)
}), actions)(TableContainer)