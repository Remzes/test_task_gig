import React from 'react'
import PropTypes from 'prop-types'
import PieChart3D from './Charts/PieChart3D'
import BarChart3D from './Charts/BarChart3D'
import withLoader from '../../decorators/withLoader'

const ChartsContainer = ({data, fetched}) => (
  <section className="charts">
    <PieChart3D data={data} />
    <BarChart3D data={data} />
  </section>
);

ChartsContainer.propTypes = {
  data: PropTypes.array.isRequired,
  fetched: PropTypes.bool.isRequired
};

export default withLoader(ChartsContainer)