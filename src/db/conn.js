const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/comments-api", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("*********mongodb is connected**********");
}).catch((e) => {
    console.log("no connection");
});