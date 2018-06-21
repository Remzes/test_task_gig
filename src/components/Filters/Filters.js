import React from 'react'
import PropTypes from 'prop-types'
import SearchBox from './SearchBox/SearchBox'
import SelectBox from './SelectBox/SelectBox'

const Filters = ({types}) => (
  <section className="filters">
    <section className="filters__inner">
      <SelectBox types={types} />
      <SearchBox />
    </section>
  </section>
);

Filters.propTypes = {
  types: PropTypes.array.isRequired
};

export default Filters