///引入套件
const Model = require('./model.js');

class Articles extends Model {
    table = "articles";

    ///該資料表的格式設定
    constructor(object) {
        super();
    }
}

// 匯出 Articles 
module.exports = Articles;