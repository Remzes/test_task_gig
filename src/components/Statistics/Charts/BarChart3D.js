import React from 'react'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import ReactFC from 'react-fusioncharts'
import PropTypes from 'prop-types'
import {renderDataForBarChart} from "../../../utils/charts/renderDataForBarChart"

ReactFC.fcRoot(FusionCharts, Charts);

const BarChart = ({data}) => {
  const renderChart = () => {
    const DATA_SOURCE = {
      chart: {
        caption: "Colors of Pokemon",
        subCaption: "Statistics on the colors",
        yAxisName: "Percentage (%)",
        paletteColors: "#0075c2",
        bgColor: "#ffffff",
        showBorder: "0",
        showCanvasBorder: "0",
        usePlotGradientColor: "0",
        plotBorderAlpha: "10",
        placeValuesInside: "1",
        valueFontColor: "#ffffff",
        showAxisLines: "1",
        axisLineAlpha: "25",
        divLineAlpha: "10",
        alignCaptionWithCanvas: "0",
        showAlternateVGridColor: "0",
        captionFontSize: "14",
        subcaptionFontSize: "14",
        subcaptionFontBold: "0",
        toolTipColor: "#ffffff",
        toolTipBorderThickness: "0",
        toolTipBgColor: "#000000",
        toolTipBgAlpha: "80",
        toolTipBorderRadius: "2",
        toolTipPadding: "5"
      },
      data: renderDataForBarChart(data)
    };

    return {
      id: 'bar_chart',
      type: "bar3d",
      width: '100%',
      height: 400,
      className: "bar_chart",
      dataFormat: "json",
      dataSource: DATA_SOURCE
    }
  }

  return (
    <section className="bar_chart__container">
      <ReactFC {...renderChart()} />
    </section>
  )
};

BarChart.propTypes = {
  data: PropTypes.array.isRequired
};

export default BarChart