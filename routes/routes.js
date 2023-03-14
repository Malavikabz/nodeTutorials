module.exports = (app) => {
  var router = require("express").Router();
  const path = require("path");

  const user = require("../app/controller/controller.js");

  router.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname + "/../app/view/signup.html"));
  });

  router.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname + "/../app/view/login.html"));
  });

  router.post("/createUserAccount", user.create);
  router.post("/userLogin", user.userLogin);

  app.use("/", router);
};
