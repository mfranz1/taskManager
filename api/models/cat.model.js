const mongoose = require('mongoose');

const CatSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        minlength: 1,
        trim: true
    }
})

const Cat = mongoose.model("Category", CatSchema);

module.exports = {Cat}