var db = require("../db/index.js");

module.exports = {
  getAll: function (callback) {
    let queryString = `SELECT * FROM cows;`;
    db.query(queryString, (err, results) => {
      if (err) {
        console.log("error in models getAll", err);
      }
      callback(null, results);
    });
  },

  create: function (params, callback) {
    let queryString = `INSERT INTO cows (name, description) VALUES (?, ?);`;
    db.query(queryString, params, (err, results) => {
      if (err) {
        console.log("error im models create", err);
      }
      callback(null, results);
    });
  },

  update: function (params, callback) {
    let queryString = `UPDATE cows SET name = (?) WHERE id =(?);`;
    db.query(queryString, params, (err, data) => {
      if (err) {
        console.log(err);
      }
      callback(null, data);
    });
  },

  delete: function (params, callback) {
    let queryString = `DELETE FROM cows where id = (?);`;
    //console.log(queryString);
    db.query(queryString, params, (err, data) => {
      if (err) {
        console.log(err);
      }
      callback(null, data);
    });
  },
};
