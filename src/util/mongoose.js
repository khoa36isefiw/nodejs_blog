// this is mongoose helper

module.exports = {
    // Array thì ta map --> to Obect
    mutipleMongooseToObject:function (mongooseArrays) {
        return mongooseArrays.map(mongoose => mongoose.toObject());

    },

    // nếu là một bản ghi document thì ta return về 1 object
    mongooseToObject: function(mongoose) { 
        // nếu nó tồn tại thì trả về Object, không thì trả về mongoose
        return mongoose ? mongoose.toObject() :mongoose;
    }
};