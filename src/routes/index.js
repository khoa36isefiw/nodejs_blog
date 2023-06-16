const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');

function route(app) {
  // tạo ra 1 route mới là news
  // app.get('/news', function(req, res) {
  //   res.render('news');
  // })

  app.use('/news', newsRouter);
  app.use('/courses', courseRouter);
  app.use('/', siteRouter);
}

module.exports = route;
