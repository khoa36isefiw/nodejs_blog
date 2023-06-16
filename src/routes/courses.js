// quản lý những routes liên quan tới news
// lúc nào cũng xài thư viện express
const express = require('express');
const router = express.Router();

// cấu hình new
// khởi tạo đối tượng
const coursesController = require('../app/controllers/CourseController');

// cấu hình get('/path')
router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.get('/:slug', coursesController.showCourseDetail);


module.exports = router;
