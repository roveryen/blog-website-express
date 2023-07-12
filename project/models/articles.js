///引入套件
const mongoose = require('mongoose');

///該資料表的格式設定
const articlesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: false,
        default: 1
    },
    createdDate: {
        type: Date,
        default: Date.now,
        required: false
    },
    updatedDate: {
        type: Date,
        default: Date.now,
        required: false
    },
})
//匯出該資料表
module.exports = mongoose.model("Articles", articlesSchema);