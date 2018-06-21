import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import PropTypes from 'prop-types';
import {renderDataForPieChart} from '../../../utils/charts/renderDataForPieChart'

ReactFC.fcRoot(FusionCharts, Charts);

const PieChart = ({data}) => {

  const renderChart = () => {
    const DATA_SOURCE = {
      chart: {
        caption: 'Colors of Pokemons',
        subcaption: "Statistics on the colors",
        startingangle: "100",
        showlabels: "1",
        showlegend: "1",
        enablemultislicing: "0",
        slicingdistance: "15",
        showpercentvalues: "1",
        plottooltext: `$datavalue% of pokemons has '$label' color`,
        theme: "ocean"
      },
      data: renderDataForPieChart(data)
    };

    return {
      id: 'pie_chart',
      type: "pie3d",
      width: '100%',
      height: 400,
      className: "pie_chart",
      dataFormat: "json",
      dataSource: DATA_SOURCE
    };
  };

  return (
    <section className="pie_chart__container">
      <ReactFC {...renderChart()} />
    </section>
  )
};

PieChart.propTypes = {
  data: PropTypes.array.isRequired
};

export default PieChart