const qs = require('qs')
module.exports = {
  toParameters(obj) {
    return qs.stringify(obj)
  },
  composeUrl(obj) {
    let url = 'https://sapi.k780.com/?'
    for (let i in obj) {
      // if (i === 'weaid') {
      //   obj[i] = encodeURI(obj[i])
      // }
      url += `${i}=${obj[i]}&`
    }
    url = url.substr(0, url.length - 1)
    return url
  }
}
