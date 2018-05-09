const fs = require('fs')
const city = require('./city')
const cityList = city.getCity()
let list = {
  china: [],
  foreign: []
}
for (let i = 0, len = cityList.length; i < len; i++) {
  if (cityList[i].country === 1) {
    list.china.push(cityList[i])
  } else {
    list.foreign.push(cityList[i])
  }
}
const everyArr = (arr, attr, str) => {
  return arr.every((item, index, arr) => {
    return item[attr] !== str
  })
}
const classification = (list) => {
  let arr = [{
    'area_1': list[0]['area_1'],
    children: []
  }]
  list.forEach((element, index) => {
    if (everyArr(arr, 'area_1', element['area_1'])) {
      arr.push({
        'area_1': element['area_1'],
        children: []
      })
    }
    arr.forEach((e, i) => {
      if (e['area_1'] === element['area_1']) {
        e.children.push(element)
      }
    })
  });
  return arr
}
list.china=classification(list.china)
list.foreign=classification(list.foreign)
// fs.writeFile('cityList.json', JSON.stringify(list), 'utf8', (err) => {
//   if (err) throw err;
//   console.log('done');
// });