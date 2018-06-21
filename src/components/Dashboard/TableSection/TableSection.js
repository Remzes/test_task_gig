import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {toggleDashboard} from '../../../actions'
import Table from '../../Table/Table'

const TableSection = ({toggle, toggleFunc}) => (
  <section className="table-section">
    <section className="table-section__inner">
      <h2 className="table-section__inner__title">Poketable</h2>
      <button className="table-section__inner__button " onClick={toggleFunc}>Switch to {toggle ? 'Table' : 'Statistics'}</button>
      <Table toggle={toggle} />
    </section>
  </section>
);

TableSection.propTypes = {
  toggle: PropTypes.bool.isRequired,
  toggleFunc: PropTypes.func.isRequired
};

export default connect(({toggle}) => ({toggle}), {toggleFunc: toggleDashboard})(TableSection)

