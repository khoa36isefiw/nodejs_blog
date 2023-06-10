// quản lý những routes liên quan tới news
// lúc nào cũng xài thư viện express
const express = require('express');
const router = express.Router();

// cấu hình new
// khởi tạo đối tượng
const siteController = require('../app/controllers/SiteController');

// cấu hình get('/path')
//slug
router.use('/search', siteController.search);

// luôn luô nằm dưới cùng
router.use('/', siteController.index); // tuyến đường của nó

module.exports = router;
