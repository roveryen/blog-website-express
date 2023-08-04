///引入套件
const db = require('./db.js');

///該資料表的格式設定
class Model {

    table = "";

    constructor(object) {
    }
}

Model.prototype.getCurrentDateTime = function() {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    
    //return date.getTime();
};

Model.prototype.compositeConditions = function(conditions) {
    var condArray = [];

    conditions.forEach(condition => {
        condArray.push(condition[0] + " " + condition[1] + " '" + condition[2] + "'");
    });

    if ( condArray.length <= 0 ) {
        condArray.push("1=1");
    }

    return condArray;
};

Model.prototype.compositeObjectValues = function(valueObject) {
        var updateArray = [];

        for(var key in valueObject) {
            updateArray.push(key + " = '" + valueObject[key] + "'");
        }

        return updateArray;
    };

Model.prototype.create = function(valueObject, result) {
        valueObject.created_at = this.getCurrentDateTime();
        valueObject.updated_at = this.getCurrentDateTime();
        db.query("INSERT INTO " + this.table + " SET ?", valueObject, (err, res) => {
            console.log(res);
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
  
            console.log("created article: ", { id: res.insertId, ...valueObject });
            result(null, { id: res.insertId, ...valueObject });
        });
    };

Model.prototype.update = function (conditionArray, valueObject, result) {
        const condArray = this.compositeConditions(conditionArray);

        valueObject.updated_at = this.getCurrentDateTime();
        const updateArray = this.compositeObjectValues(valueObject);

        db.query("UPDATE " + this.table + " SET " + updateArray.join(',') + " WHERE " + condArray.join(' AND '), (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            result(null, null);
        });
    };

Model.prototype.findById = function (id, result) {
        db.query("SELECT * FROM " + this.table + " WHERE `id` = ?", id, (err, res)=>{
            if ( err ) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.length) {
                console.log("found tutorial: ", res[0]);
                result(null, res[0]);
                return;
            }

            // not found Tutorial with the id
            result({ kind: "not_found" }, null);
        });
    };

Model.prototype.find = function (conditionArray, result) {
    var condArray = this.compositeConditions(conditionArray);

    db.query("SELECT * FROM " + this.table + " WHERE " + condArray.join(' AND '), (err, res) => {
        if ( err ) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        result(null, res);
    });
};

Model.prototype.findOne = function(conditionArray, result) {
    var condArray = this.compositeConditions(conditionArray);

    db.query("SELECT * FROM " + this.table + " WHERE " + condArray.join(' AND '), (err, res) => {
        if ( err ) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if ( res.length <= 0 ) {
            result(null, null);
            return;
        }

        result(null, res[0]);
    });
};

Model.prototype.findAll = function (result) {
    this.find([], result);
    return;
};

Model.prototype.updateOrCreate = function (conditionObject, valueObject, result) {
    var conditionArray = [];
    for(var column in conditionObject) {
        conditionArray.push(
            [column,'=',conditionObject[column]]
        );
    }
    
    this.find(conditionArray, (err, articles) => {
        if ( err ) {
            result(err, articles);
            return;
        }
        
        if ( articles.length <= 0 ) {
            this.create(valueObject, result);            
            return;
        }

        this.update(conditionArray, valueObject, result);
    });

}



// 匯出 Model 
module.exports = Model;