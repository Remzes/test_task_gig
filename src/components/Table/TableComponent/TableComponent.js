import React from 'react'
import ReactTable from 'react-table'
import PropTypes from 'prop-types'
import withLoader from '../../../decorators/withLoader'
import Filters from '../../Filters/Filters'
import ProgressBar from '../../ProgressBar/ProgressBar'
import {capitalizeWord} from '../../../utils'
import createPDF from '../../../utils/createPDF/createPDF'

const columns = [{
  Header: () => (
    <span className="table-header">Pokemon's Name</span>
  ),
  id: 'name',
  className: 'poketable_column name-column',
  minWidth: 300,
  accessor: data => capitalizeWord(data.name),
  Cell: row => {
    const name = row.value;
    return (
      <section className="name-column__section">
        <img src={row.original.sprite} alt={`${name}'s avatar`} />
        <p className="name-column__section__text">
          <span>{name}</span>
          <a onClick={async () => {await createPDF(row.original)}}>(Download PDF)</a>
        </p>
      </section>
    )
  }
}, {
  Header: () => (
    <span className="table-header">Color</span>
  ),
  minWidth: 150,
  className: 'poketable_column color-column',
  accessor: 'color',
  Cell: row => (
    <section>
      <span className="color_demo" style={{backgroundColor: row.value}}/>
      {row.value}
    </section>
  )
},
  {
    Header: () => (
      <span className="table-header">Types</span>
    ),
    id: 'types',
    className: 'poketable_column types-column',
    minWidth: 150,
    accessor: data => data.types.join(', '),
    Cell: row => <section>{row.value}</section>
  }, {
    Header: () => (
      <span className="table-header">Species</span>
    ),
    id: 'species',
    className: 'poketable_column types-column',
    minWidth: 150,
    accessor: 'species',
    Cell: row => <section>{row.value}</section>
  }, {
    Header: () => (
      <span className="table-header">Abilities</span>
    ),
    className: 'poketable_column abilities-column',
    minWidth: 150,
    id: 'abilities',
    accessor: data => data.abilities.join(', '),
    Cell: row => <section>{row.value}</section>
  }];

const TableComponent = ({data, fetched, error, progress}) => (
  <section>
    <Filters types={data.map(pokemon => pokemon.types)} />
    <ProgressBar progress={progress} />
    <ReactTable
      data={data}
      columns={columns}
      className="-striped -highlight poketable__inner__table-wrapper__table"
      style={{
        height: '700px',
        backgroundColor: "#fff"
      }}
    />
  </section>
);

TableComponent.propTypes = {
  data: PropTypes.array.isRequired,
  fetched: PropTypes.bool.isRequired,
  isError: PropTypes.bool,
  progress: PropTypes.number.isRequired
};

export default withLoader(TableComponent)