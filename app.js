const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const cors = require('cors');



const app = express();

app.use(cors());
const port = 6868;

// 读取 SSL 证书和密钥
const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'server.cert'))
  };

// 中间件：解析 JSON 请求体
// app.use(express.json());


// 引入路由模块
const dashboardRoutes = require('./routes/dashboard');




// 使用路由模块
app.use('/dashboard', dashboardRoutes);






// // 示例接口：GET 请求
// app.get('/api/hello', (req, res) => {
//   res.send({ message: 'Hello, World!' });
// });

// // 示例接口：POST 请求
// app.post('/api/data', (req, res) => {
//   const data = req.body;
//   res.send({ received: data });
// });

// // 示例接口：PUT 请求
// app.put('/api/data/:id', (req, res) => {
//   const id = req.params.id;
//   const newData = req.body;
//   res.send({ id, updated: newData });
// });

// // 示例接口：DELETE 请求
// app.delete('/api/data/:id', (req, res) => {
//   const id = req.params.id;
//   res.send({ message: `Data with id ${id} deleted` });
// });

// 启动服务器
https.createServer(sslOptions, app).listen(port, () => {
    console.log(`HTTPS Server is running at https://localhost:${port}`);
  });
