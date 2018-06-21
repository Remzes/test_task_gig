import React from 'react'
import PropTypes from 'prop-types';
import TableContainer from './TableContainer/TableContainer'

const Table = ({toggle}) => (
  <TableContainer toggle={toggle} />
);

Table.propTypes = {
  toggle: PropTypes.bool.isRequired
};

export default Table;