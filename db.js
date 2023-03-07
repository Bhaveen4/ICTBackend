const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://bhaveen:bencbr250@cluster0.w1cqhgy.mongodb.net/?retryWrites=true&w=majority");

const Schema = mongoose.Schema

var courseSchema = new Schema ({
    cName        : String,
    cDesc        : String,
    cDuration    : Number,
    cStartdate   : Date  ,

})  

 var courseInfo = mongoose.model("Courses", courseSchema);
module.exports = courseInfo;