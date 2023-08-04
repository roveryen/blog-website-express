///引入套件
const Model = require('./model.js');

class Users extends Model {    
    ///該資料表的格式設定
    table = "users";

    constructor(object) {
        super();        
    }
}

// 匯出 Users 
module.exports = Users;
