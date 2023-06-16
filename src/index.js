// Hello World!
const path = require('path');
const express = require('express'); // express chính là thư viện mà ta đã tải về
// nếu ta gõ thẳng như vậy thì nó đi vào thư mục node_modules
//nó tải xuống rồi nó lưu vào biến express

// import require
const morgan = require('morgan');
const handlebars = require('express-handlebars'); // import thư viện của handlebars
const db = require('./config/db');
// connect to db
db.connectToDB();


const app = express(); // function express đã được tạo sẵn trong express
const port = 3000; // run website ở port 3000

//const route = require('./resources/routes');
const route = require('./routes');

// định nghĩa route
// app.get('/', (req, res) => {        // => được hiểu là around function
//   res.send('Hello World!')
// })

// quan sat request tu client   HTTP Logger
//app.use(morgan('combined'));

// tải ảnh lên trong path/public
app.use(express.static(path.join(__dirname, 'public')));

// import middleware
app.use(
  express.urlencoded({
    extended: true,
  }),
);

// gửi dữ liệu qua client
app.use(express.json());

// Tamplate engine
app.engine(
  'hbs',
  handlebars.engine({
    // đổi tên handlebars thành hbs
    extname: '.hbs', // đuôi của handlebars  thành hbs
  }),
); // định nghĩa handlebars

app.set('view engine', 'hbs');

// path: trả về đường dẫn trong ứng dụng của mình
//__dirname: name của ứng dụng của mình

//console.log( "__dirname: "+ __dirname);
//console.log( "PATH: ", path.join(__dirname, 'resources/views'));

app.set('views', path.join(__dirname, 'resources','views'));

// route init - chỉ cần gọi tới thôi không cần khởi tạo nữa
// thông qua function route thì nó sẽ vào đó check xem các route đó đc định nghĩa không
route(app);

// 127.0.0.1 -> localhost
app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});

// run app --> node appName.js


