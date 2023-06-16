const { response } = require('express');

class NewsController {
  // function
  // lấy ra trang chủ của tin tức
  // dùng function này để đưa là handler

  // [GET] /news
  index(req, res) {
    res.render('news');
  }

  // details news page
  // news/:slug - nhận nhiều biến giá trị ngấu nhiên
  showNewsDetails(req, res) {
    res.send('News Details Here!');
  }
}

// khởi tạo controller và export nó ra ngoài
module.exports = new NewsController();
