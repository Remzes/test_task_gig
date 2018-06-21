import {capitalizeWord} from "../utils"
import {renderDataForBarChart} from "../utils/charts/renderDataForBarChart"
import {renderDataForPieChart} from "../utils/charts/renderDataForPieChart"

describe('test capitalizeWord function', () => {
  it('should capitalize letter', () => {
    expect(capitalizeWord('word')).toEqual('Word')
  })
})

describe('test renderDataForBarChart function', () => {
  it('should return new array', () => {
    const data = [{color: 'white'}, {color: 'blue'}, {color: 'white'}, {color: 'blue'}]
    expect(renderDataForBarChart(data)).toEqual([{label: 'white', value: 50}, {label: 'blue', value: 50}])
  })
})

describe('test renderDataForPieChart function', () => {
  it('should return new array', () => {
    const data = [{color: 'white'}, {color: 'blue'}, {color: 'white'}, {color: 'blue'}]
    expect(renderDataForPieChart(data)).toEqual([{label: 'white', value: 50}, {label: 'blue', value: 50}])
  })
})