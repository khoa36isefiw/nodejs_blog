const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // tạo ra 1 route mới là news
    // app.get('/news', function(req, res) {
    //   res.render('news');
    // })

    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
