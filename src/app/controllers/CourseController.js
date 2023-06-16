const Course = require('../models/Course');
const {mongooseToObject} = require('../../util/mongoose')
const { response } = require('express');

class CourseController {
 
  // details course page
  // course/:slug - nhận nhiều biến giá trị ngấu nhiên
  showCourseDetail(req, res, next) {
    Course.findOne({slug: req.params.slug})
        .then((course) => {
            // render ra giao diện, lấy source giao diện từ showCoruseDetail trong courses
            res.render('courses/showCourseDetail', {course: mongooseToObject(course)});
            //res.json(course);
        })
        .catch(next);
  }

  //[GET] course/create
  create(req, res, next) {
    res.render('courses/create');
  }
  
  // Lưu dữ liệu khi submit
  //[POST] course/store
  store(req, res, next) {
    // render ra object của người dùng lên server thử
    //res.json(req.body); // gửi dữ liệu lên server
    // tạo ra đối tượng và dưa dữ liệu mà ta muốn ghi vào


    const formData = req.body;
    // thêm một image vào thông qua video ID
    formData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
    const course = new Course(formData);
    // promise chuyển về tranh chủ
    course.save()
      .then(() => res.redirect('/'))
      .catch(err => {
        
      });

    
  } 
}

// khởi tạo controller và export nó ra ngoài
module.exports = new CourseController();
