// Requiring our models
var db = require("../models");


// CREATE FLASHCARD PAGE NEEDS:
  //

// Routes =============================================================
module.exports = function(app) {

  // Create all our routes and set up logic within those routes where required.
//  app.get("/create", function(req, res) {
//      console.log("here in create route");
//      res.render("create.handlebars");
//  });

  app.get("/create", function(req, res) {

    db.Category.findAll({
    }).then(function(data) {
      console.log("here in create route");
      res.render("create.handlebars", data);
    });
  });
  // app.get("/:id", function(req, res) {

  //   db.Set.findAll({
  //   }).then(function(data) {
  //     console.log("SET data: " + data);
  //     console.log("SET title: " + data[0].title);
  //     console.log("SET url: " + data[0].url);
  //     res.render("index", data);
  //   });
  // });


  // app.get("/:user_id", function(req, res) {
  //
  //   db.User.findOne({
  //     displayname: req.params.displayname,
  //     username: req.params.username
  //   }).then(function(data) {
  //     console.log("USER data: " + data);
  //     res.render("index", data);
  //   });
  // });


  // app.post("/", function(req, res) {
  //   db.Burger.create({
  //     burger_name: req.body.burger_name,
  //     devoured: req.body.devoured
  //   }).then(function(data){
  //     // res.render("index", data);
  //     res.redirect("/");
  //     // return res.json(data);
  //     // res.redirect("/");
  //   });
  // });

  // app.put("/:id", function(req, res) {
  //   db.Burger.update({
  //     devoured: req.body.devoured
  //   }, {
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //   .then(function(data) {
  //     // return res.json(data);
  //     res.redirect("/");
  //   });
  // });

};
