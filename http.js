var express = require('express');
var app = express();
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true)
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");

    next();
});

app.get('/', function(req, response) {
    // 使用了superagent来发起请求
    var superagent = require('superagent');
    // 查询本机ip，这里需要根据实际情况选择get还是post
    superagent
        .post('http://cms.uat1.rs.com/cms-web/home/topic/list?pageNo=1&pageSize=2')
        .end(function(err, res) {
            // console.log(`res====${JSON.stringify(res.text)}`)
            // res.json(JSON.stringify(res.text))
            // console.log('end')
            const data = JSON.parse(res.text)
            data.code = 500;
            response.json(data)
        })

});

// app.get('/', function(req, res) {
//     // 使用了superagent来发起请求
//     var superagent = require('superagent');
//     // 查询本机ip，这里需要根据实际情况选择get还是post
//     var sreq = superagent.post('http://cms.uat1.rs.com/cms-web/home/topic/list?pageNo=1&pageSize=2');
//     sreq.pipe(res);
//     sreq.on('end', function() {
//         console.log('done');
//         console.log('res.body========' + JSON.stringify(res))
//     });
// });
app.post('/111', function(req, res) {
    console.log(`res====${JSON.stringify(res.text)}`)
    console.log(`res====${res}`)
        // 使用了superagent来发起请求
    var superagent = require('superagent');
    // 查询本机ip，这里需要根据实际情况选择get还是post
    var sreq = superagent.post('http://cms.uat1.rs.com/cms-web/home/topic/list?pageNo=1&pageSize=2');
    // sreq.send({})
    sreq.pipe(res);
    sreq.on('end', function() {
        console.log(res.text)
        console.log('done');

    });
});
app.listen(3001);
console.log('Express started on 127.0.0.1:3001');