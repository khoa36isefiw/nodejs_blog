// import slug in
const mongoose  = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug); // them plugins vao

// define model
const Course = new Schema({
  name: {type: String, requierd: true },
  description: {type: String },
  videoID: {type: String, requierd: true  },
  level: {type: String },
  image: {type :String, },
  // sẽ thêm slug vào trong db
  slug: {type: String, slug: 'name', unique: true},
  
}, {
  timestamps:  true,
});

// export model
module.exports = mongoose.model('Course', Course); // Nếu nó không có trong databse thì nó sẽ tự tạo ra