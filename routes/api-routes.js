// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
      });
    }
  });

  // Route for getting all information from Employee table
  app.get("/api/employees", function(req, res) {
    db.Employee.findAll({}).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });

  // POST route for saving a new employee
  app.post("/api/employees", function(req, res) {
    console.log(req);
    db.Employee.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      birthday: req.body.birthday,
      email: req.body.email,
      hire_date: req.body.hire_date,
      orientationComplete: req.body.orientationComplete,
      compliance_trainingComplete: req.body.compliance_trainingComplete,
      food_preference: req.body.food_preference,
      allergy: req.body.allergy,
      hobby: req.body.hobby,
    })
      .then(function(user) {
        // user.setAllergies(1);
        res.json(user);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
  });

  // PUT route for updating an employee. We can get the updated employee data from req.body
  app.put("/api/employees/:id", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Employee.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        birthday: req.body.birthday,
        email: req.body.email,
        allergyID: req.body.allergyID,
        hobbyID: req.body.hobbyID,
        orientation: req.body.orientation,
        compliance_training: req.body.compliance_training,
        food_preference: req.body.food_preference,
        allergy: req.body.allergy,
        hobby: req.body.hobby,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then(function(dbEmployee) {
        res.json(dbEmployee);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // Route for getting information about a specific employee
  app.get("/api/employees/:id", function(req, res) {
    db.Employee.findOne(
      {},
      {
        where: {
          id: req.body.id,
        },
      }
    )
      .then(function(dbEmployee) {
        res.json(dbEmployee);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // DELETE route for deleting an employee.
  app.delete("/api/employees/:id", function(req, res) {
    db.Employee.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });

  // Route for getting all food preferences
  app.get("/api/veggie", function(req, res) {
    db.Employee.findAll({
      where: {
        food_preference: "Vegetarian",
      },
    }).then(function(dbveggie) {
      res.json(dbveggie);
    });
  });

  app.get("/api/vegan", function(req, res) {
    db.Employee.findAll({
      where: {
        food_preference: "Vegan",
      },
    }).then(function(dbvegan) {
      res.json(dbvegan);
    });
  });

  app.get("/api/np", function(req, res) {
    db.Employee.findAll({
      where: {
        food_preference: "No Preference",
      },
    }).then(function(dbnp) {
      res.json(dbnp);
    });
  });

  // routes for getting allergies
  app.get("/api/nut", function(req, res) {
    db.Employee.findAll({
      where: {
        allergy: "Nut",
      },
    }).then(function(data) {
      res.json(data);
    });
  });

  app.get("/api/milk", function(req, res) {
    db.Employee.findAll({
      where: {
        allergy: "Milk",
      },
    }).then(function(data) {
      res.json(data);
    });
  });

  app.get("/api/soy", function(req, res) {
    db.Employee.findAll({
      where: {
        allergy: "Soy",
      },
    }).then(function(data) {
      res.json(data);
    });
  });

  app.get("/api/fish", function(req, res) {
    db.Employee.findAll({
      where: {
        allergy: "Fish",
      },
    }).then(function(data) {
      res.json(data);
    });
  });

  app.get("/api/shellfish", function(req, res) {
    db.Employee.findAll({
      where: {
        allergy: "Shellfish",
      },
    }).then(function(data) {
      res.json(data);
    });
  });

  // routes for getting hobbies
  app.get("/api/foodie", function(req, res) {
    db.Employee.findAll({
      where: {
        hobby: "Foodie",
      },
    }).then(function(data) {
      res.json(data);
    });
  });

  app.get("/api/outdoors", function(req, res) {
    db.Employee.findAll({
      where: {
        hobby: "Outdoors",
      },
    }).then(function(data) {
      res.json(data);
    });
  });

  app.get("/api/Sports", function(req, res) {
    db.Employee.findAll({
      where: {
        hobby: "Sports",
      },
    }).then(function(data) {
      res.json(data);
    });
  });

  app.get("/api/Art", function(req, res) {
    db.Employee.findAll({
      where: {
        hobby: "Art",
      },
    }).then(function(data) {
      res.json(data);
    });
  });
};
