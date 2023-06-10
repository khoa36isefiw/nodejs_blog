const { response } = require('express');

class SiteController {
    // function
    // lấy ra trang chủ của tin tức
    // dùng function này để đưa là handler

    // [GET] / trang home
    index(req, res) {
        res.render('home');
    }

    // search
    search(req, res) {
        res.render('search');
    }
}

// khởi tạo controller và export nó ra ngoài
module.exports = new SiteController();
