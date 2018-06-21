import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from '../../../actions/index'
import {pokemonsFilterSelector} from '../../../selectors/index'
import TableComponent from '../TableComponent/TableComponent'
import ChartsContainer from '../../Statistics/ChartsContainer'

class TableContainer extends Component {

  componentWillMount() {
    this.props.fetchPokemons();
  }

  toggleStyle = () => ({transform: this.props.toggle ? 'rotateY(-180deg)' : 'none'});

  render() {
    console.log(this.props)
    const {fetched, data, progress} = this.props.pokemons;
    return (
      <section className="poketable">
        <section className="poketable__inner">
          <section className="poketable__inner__table-wrapper">
            <section className="flip_flop-wrapper">
              <section className="flip_flop-wrapper__flip_flop" style={this.toggleStyle()}>
                <section className="flip_flop-wrapper__flip_flop__front_side">
                  <TableComponent data={data} fetched={fetched} progress={progress} />
                </section>
                <section className="flip_flop-wrapper__flip_flop__back_side">
                  <ChartsContainer data={data} fetched={fetched} />
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    )
  }
}

TableContainer.propTypes = {
  fetchPokemons: PropTypes.func.isRequired,
  pokemons: PropTypes.object.isRequired,
  searchBoxValue: PropTypes.string.isRequired,
  searchPokemons: PropTypes.func.isRequired,
  selectTypes: PropTypes.func.isRequired,
  selectBoxValue: PropTypes.string,
  toggle: PropTypes.bool.isRequired,
  toggleDashboard: PropTypes.func.isRequired
}

export default connect((state) => ({
  searchBoxValue: state.filters.searchBoxValue,
  pokemons: pokemonsFilterSelector(state)
}), actions)(TableContainer)