// Hello World!

const express = require('express')  // express chính là thư viện mà ta đã tải về
        // nếu ta gõ thẳng như vậy thì nó đi vào thư mục node_modules 
        //nó tải xuống rồi nó lưu vào biến express

const app = express() // function express đã được tạo sẵn trong express
const port = 3000   // run website ở port 3000

// định nghĩa route
// app.get('/', (req, res) => {        // => được hiểu là around function
//   res.send('Hello World!')
// })

// có thể chỉnh sửa route
app.get('/tin-tuc', function(req, res) {
    var a = 9;
    var b = 10;
    var c = a + b;
    res.send('c = a + b =  '+ c);
    res.send('Hello World  ');
})

// 127.0.0.1 -> localhost
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

// run app --> node appName.js