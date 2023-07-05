const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/dog', function (req, res) {
    res.send('<h1>강아지</h1>')
})

app.get('/cat', function (req, res) {
    res.json({'sound': '야옹'})
})

app.get('/you', function (req, res) {
    res.send("<a href='https://www.youtube.com/'>유튜브 들어가기</a>")
})

// 변수로 받기

app.get('/user/:id', function (req, res) {
    const q = req.params
    console.log(q.id)


    res.json({'유저 인터페이스'})
})

app.listen(3000)