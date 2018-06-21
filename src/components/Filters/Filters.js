import React from 'react'
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

export default Filters