const express = require('express');
const router = express.Router();
const Mock = require('mockjs');

// 生成随机用户数据
router.post('/dashboardCardList', (req, res) => {
  const data = [
    {
      title: '访问数',
      icon: 'PartlyCloudy',
      value: 2000,
      total: 120000,
      color: 'green',
      action: '月'
    },
    {
      title: '成交额',
      icon: 'Sunset',
      value: 20000,
      total: 500000,
      color: 'blue',
      action: '月'
    },
    {
      title: '下载数',
      icon: 'Drizzling',
      value: 8000,
      total: 120000,
      color: 'orange',
      action: '周'
    },
    {
      title: '成交数',
      icon: 'Lightning',
      value: 5000,
      total: 50000,
      color: 'purple',
      action: '年'
    }
  ]
  res.json({
    code: 200,
    message: 'ok',
    data: data
  });
});

module.exports = router;
