const axios = require('axios')
const qs = require('qs')
const basics = require('./basics')
const headers = {
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
  'Cache-Control': 'max-age=0',
  'Connection': 'keep-alive',
  'Cookie': 'Hm_lvt_0519aa0e64028291465eb3dcd3f34a17=1524211244',
  'Host': 'sapi.k780.com',
  'Upgrade-Insecure-Requests': 1,
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36'
}
const appkey = '10003'
const sign = 'b59bc3ef6191eb9f747dd4e83c99f2a4'
module.exports = {
  // 5-7天天气预报
  getWeather(city) {
    let params = {
      'app': 'weather.future',
      'appkey': appkey,
      'sign': sign,
      'format': 'json',
      'weaid': city,
    }
    let url = basics.composeUrl(params)
    return  axios.get(url, basics.toParameters(params), {
      headers
    })
  },
  //实时天气
  getRealTime(city) {
    let params = {
      'app': 'weather.today',
      'appkey': appkey,
      'sign': sign,
      'format': 'json',
      'weaid': city,
    }
    let url = basics.composeUrl(params)
    return axios.get(url, basics.toParameters(params), {
      headers
    })
  },
  //获取历史天气
  getHistoryWeather(city, time) {
    let params = {
      'app': 'weather.history',
      'appkey': appkey,
      'sign': sign,
      'format': 'json',
      'date': time,
      'weaid': city,
    }
    let url = basics.composeUrl(params)
    return axios.get(url, basics.toParameters(params), {
      headers
    })
  },
  //获取pm2.5
  getPm(city) {
    let params = {
      'app': 'weather.pm25',
      'appkey': appkey,
      'sign': sign,
      'format': 'json',
      'weaid': city,
    }
    let url = basics.composeUrl(params)
    return axios.get(url, basics.toParameters(params), {
      headers
    })
  },
  //获取生活指数
  getLifeIndex(city) {
    let params = {
      'app': 'weather.lifeindex',
      'appkey': appkey,
      'sign': sign,
      'format': 'json',
      'weaid': city,
    }
    let url = basics.composeUrl(params)
    return axios.get(url, basics.toParameters(params), {
      headers
    })
  }
}
