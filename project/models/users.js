///引入套件
const mongoose = require('mongoose');

///該資料表的格式設定
const usersSchema = new mongoose.Schema({
    account: {
        type: String,
        required: true
    },
    password: {
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
module.exports = mongoose.model("Users", usersSchema);