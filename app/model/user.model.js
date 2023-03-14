const connect = require("../../core/connection.js");

//constructor
const User = function (user) {
  this.first_name = user.first_name;
  this.last_name = user.last_name;
  this.email_id = user.email_id;
  this.password = user.password;
};

User.create = (newUser, result) => {
  connect.query("INSERT INTO user SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error", err);
      result(err, null);
      return;
    }

    console.log("Created user : ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

User.userLogin = (userData, result) => {
  connect.query(
    "SELECT * FROM `user` WHERE `email_id` = ? AND `password` = ?", [userData.email_id, userData.password],
    (err, res) => {
      if (err) {
        console.log("error", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("Found user : ", res[0]);
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null);
    }
  );
};

module.exports = User;
