const express = require('express');
const router = express.Router();
const Mock = require('mockjs');

// 角色映射
const roleMap = {
  'ADMIN': '管理员',
  'SUB_ADMIN': '子管理员',
  'USER': '普通用户'
};

// 模拟用户数据
function generateUsers(count) {
  return Mock.mock({
    [`data|${count}`]: [{
      'userName': '@name',
      'userAccount': '@word(5, 10)',
      'roleCode|1': ['ADMIN', 'SUB_ADMIN', 'USER'],
      'roleName': function() {
        return roleMap[this.roleCode];
      }
    }]
  }).data;
}

// 获取用户列表
router.post('/getUserList', (req, res) => {
  const { pageSize, roleCode, userAccount, userName } = req.body; // 从请求体中获取参数
  console.log("🚀 ~ router.post ~ req.body:", req.body)
  
  // 生成初始数据
  let data = generateUsers(pageSize || 10); // 如果没有提供 pageSize 参数，默认生成 10 个用户

  // 根据入参过滤数据
  if (roleCode) {
    data = data.filter(user => user.roleCode === roleCode);
  }
  if (userAccount) {
    data = data.filter(user => user.userAccount.includes(userAccount));
  }
  if (userName) {
    data = data.filter(user => user.userName.includes(userName));
  }

  res.json({
    code: 200,
    message: 'ok',
    data: data,
    total: data.length
  });
});

// 添加用户
router.post('/addUser', (req, res) => {
  res.json({
    code: 200,
    message: 'User added successfully',
    data: null
  });
});

// 编辑用户
router.post('/editUser', (req, res) => {
    res.json({
      code: 200,
      message: 'User edited successfully',
      data: null
    });
   
  
});

// 删除用户
router.post('/deleteUser', (req, res) => {
  res.json({
    code: 200,
    message: 'User deleted successfully',
    data: null
  });
});

module.exports = router;
