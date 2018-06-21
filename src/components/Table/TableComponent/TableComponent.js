import React from 'react'
import ReactTable from 'react-table'
import withLoader from '../../../decorators/withLoader'
import Filters from '../../Filters/Filters'
import ProgressBar from '../../ProgressBar/ProgressBar'
import {capitalizeWord} from '../../../utils'

const columns = [{
  Header: () => (
    <span className="table-header">Pokemon's Name</span>
  ),
  id: 'name',
  className: 'poketable_column name-column',
  minWidth: 250,
  accessor: data => capitalizeWord(data.name) + ', ' + data.sprite,
  Cell: row => (
    <section>
      <img src={row.value.split(',')[1]} alt={`${row.value.split(',')}'s avatar`}/>
      <span>{row.value.split(',')[0]}</span>
    </section>
  )
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

const TableComponent = ({data, fetched, progress}) => (
  <section>
    <Filters types={data.map(pokemon => pokemon.types)} />
    <ProgressBar progress={progress} />
    <ReactTable
      data={data}
      columns={columns}
      className="-striped -highlight poketable__inner__table-wrapper__table"
      style={{
        height: '600px',
        backgroundColor: "#fff"
      }}
    />
  </section>
);

export default withLoader(TableComponent)