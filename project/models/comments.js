///引入套件
const Model = require('./model.js');

class Comments extends Model {
    table = "comments";

    ///該資料表的格式設定
    constructor(object) {
        super();
    }
}

// 匯出 Comments 
module.exports = Comments;