var connection = require("./connection.js");


var orm = {
    selectAll: function (tableInput, cb) {
        connection.query("select * from " + tableInput + ";", function (err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        })
    },
    insertOne: function (table, val, cb) {
        connection.query("insert into " + table + " (burger_name) values ('" + val + "');"), function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        };
    },
    updateOne: function (table, condition, cb) {
        connection.query("update " + table + " set devoured=true where id=" + condition + ";", function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
}

module.exports = orm;