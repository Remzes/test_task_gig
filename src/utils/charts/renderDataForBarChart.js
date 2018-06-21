export const renderDataForBarChart = (data) => {
  const arrayOfObjects = [];
  for (const item of data) {
    if (arrayOfObjects.find(o => o.label === item.color) === undefined) {
      arrayOfObjects.push({
        label: item.color,
        value: (data.filter(element => element.color === item.color).length / data.length).toPrecision(4) * 100
      })
    }
  }
  return arrayOfObjects
};