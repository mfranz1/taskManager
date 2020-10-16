//Connection logic to MongoDB
const mongoose = require('mongoose');
const url='mongodb://root:example@localhost:27017';

mongoose.Promise=global.Promise;
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(() => {
    console.log("Connected to DB");
}).catch((e)=>{
    console.log("Error attempting to connect to MongoDB");
    console.log(e);
});

module.exports = {
    mongoose
};