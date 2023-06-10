// quản lý những routes liên quan tới news
// lúc nào cũng xài thư viện express
const express = require('express');
const router = express.Router();

// cấu hình new
// khởi tạo đối tượng
const newsController = require('../app/controllers/NewsController');

// cấu hình get('/path')
    router.use('/:slug', newsController.showNewsDetails);

// luôn luô nằm dưới cùng
router.use('/', newsController.index); // tuyến đường của nó

module.exports = router;
