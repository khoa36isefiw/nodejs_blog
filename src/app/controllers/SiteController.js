const Course = require('../models/Course');
const {mutipleMongooseToObject} = require('../../util/mongoose')

class SiteController {
  // function
  // lấy ra trang chủ của tin tức
  // dùng function này để đưa là handler

  // [GET] / trang home
  // here is controller
  index(req, res, next) {
    // trả  json về cho client
    
    //res.json({name: 'text'});
    // promise function

    // controller to model
    Course.find({})
    // thành công và render ra home thay vì json. Nó  sẽ lấy từ database 
      
    // model to controller
    // controler to view
    .then(courses => res.render('home', {

      
        courses : mutipleMongooseToObject(courses) // render các courses có trong database
        // title: courses
        
      }))
        // lỗi, catch nhận vào 1 fucntion và trả về lỗi
      .catch(next);
  }
    // res.render('home');
      // search
  search(req, res) {
    res.render('search');
  }

}
// khởi tạo controller và export nó ra ngoài
module.exports = new SiteController();
