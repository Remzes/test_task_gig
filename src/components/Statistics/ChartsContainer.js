import React from 'react'
import PieChart3D from './Charts/PieChart3D'
import BarChart3D from './Charts/BarChart3D'
import withLoader from '../../decorators/withLoader'

const ChartsContainer = ({data, fetched}) => (
  <section className="charts">
    <PieChart3D data={data} />
    <BarChart3D data={data} />
  </section>
);

export default withLoader(ChartsContainer)