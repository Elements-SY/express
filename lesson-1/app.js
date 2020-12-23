var http = require('http');

http.createServer((req, res) => { // 创建http响应数据
   res.writeHead(200, { 'Content-Type': 'text/plain' });
   res.end('okay');
}).listen(3000, function () { // 调用监听http端口的方法，默认值为8080
   console.log('app is running at port 3000')
});

// 在浏览器输入：http://localhost:3000/
// 启动服务如下：
// 在当前目录下打开终端输入：node app.js or npm run start



