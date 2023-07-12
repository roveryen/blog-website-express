///引入套件
const mongoose = require('mongoose');

///該資料表的格式設定
const commentsSchema = new mongoose.Schema({
    article_id: {
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
module.exports = mongoose.model("Comments", commentsSchema);