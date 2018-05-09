const express = require('express')
const app = express()
const https = require('https')
const http = require('http')
const getApi = require('./api')
const city = 'jinan'
const time = '2018-05-05'
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8")
    next();
});
// 5-7天天气预报
app.get('/', function (req, res) {
    getApi.getWeather(city).then((r) => {
        if (r.status === 200) {
            res.send(r.data)
            res.end()
        } else {
            res.send('未获取到数据')
            res.end()
        }
    }, (err) => {
        res.send(err)
        res.end()
    })
});
// 实时天气预报
app.get('/now', function (req, res) {
    getApi.getRealTime(city).then((r) => {
        if (r.status === 200) {
            res.send(r.data)
            res.end()
        } else {
            res.send('未获取到数据')
            res.end()
        }
    }, (err) => {
        res.send(err)
        res.end()
    })
});
//历史天气
app.get('/history', function (req, res) {
    getApi.getHistoryWeather(city, time).then((r) => {
        if (r.status === 200) {
            res.send(r.data)
            res.end()
        } else {
            res.send('未获取到数据')
            res.end()
        }
    }, (err) => {
        res.send(err)
        res.end()
    })
});
// pm2.5
app.get('/pm', function (req, res) {
    getApi.getPm(city).then((r) => {
        if (r.status === 200) {
            res.send(r.data)
            res.end()
        } else {
            res.send('未获取到数据')
            res.end()
        }
    }, (err) => {
        res.send(err)
        res.end()
    })
});
// 生活指数
app.get('/life', function (req, res) {
    getApi.getLifeIndex(city).then((r) => {
        if (r.status === 200) {
            res.send(r.data)
            res.end()
        } else {
            res.send('未获取到数据')
            res.end()
        }
    }, (err) => {
        res.send(err)
        res.end()
    })
});
app.listen(1234, function () {
    console.log('serve is running')
});
