const db = require("../models");

db.sequelize.sync({ force: true }).then(() => {
  employeeSeeds.forEach((item) => {
    db.Employee.create(item);
    console.log("employees created");
  });

  userSeeds.forEach((item) => {
    db.User.create(item);
    console.log("guest user created");
  });
});

const userSeeds = [
  {
    email: "guest@gmail.com",
    password: "1234",
  },
];

const employeeSeeds = [
  {
    first_name: "Kevin",
    last_name: "Garcia",
    birthday: "1993-09-24",
    email: "kevin@gmail.com",
    hire_date: "2020-08-15",
    orientationComplete: "2020-08-20",
    compliance_trainingComplete: "2020-08-27",
    food_preference: "No Preference",
    allergy: "Nut",
    hobby: "Foodie",
  },
  {
    first_name: "Rachel",
    last_name: "Shelton",
    birthday: "1992-01-09",
    email: "rachel@gmail.com",
    hire_date: "2019-08-01",
    orientationComplete: "2019-08-21",
    compliance_trainingComplete: "2019-09-01",
    food_preference: "Vegan",
    allergy: "Fish",
    hobby: "Foodie",
  },
  {
    first_name: "Taylor",
    last_name: "Johnson",
    birthday: "1980-04-17",
    email: "taylor@gmail.com",
    hire_date: "2018-07-03",
    orientationComplete: "2018-07-05",
    compliance_trainingComplete: "1900-01-01",
    food_preference: "Vegetarian",
    allergy: "Nut",
    hobby: "Sports",
  },
  {
    first_name: "Tyler",
    last_name: "Davis",
    birthday: "1993-04-05",
    email: "tyler@gmail.com",
    hire_date: "2018-02-26",
    orientationComplete: "2018-03-01",
    compliance_trainingComplete: "2018-04-21",
    food_preference: "Vegetarian",
    allergy: "Shellfish",
    hobby: "Foodie",
  },
  {
    first_name: "Jane",
    last_name: "Doe",
    birthday: "1987-09-29",
    email: "jane@gmail.com",
    hire_date: "2010-09-17",
    orientationComplete: "1900-01-01",
    compliance_trainingComplete: "2010-09-11",
    food_preference: "Vegan",
    allergy: "Gluten",
    hobby: "Outdoors",
  },
  {
    first_name: "John",
    last_name: "Smith",
    birthday: "1982-11-30",
    email: "john@gmail.com",
    hire_date: "2008-11-29",
    orientationComplete: "2008-12-11",
    compliance_trainingComplete: "2008-12-13",
    food_preference: "No Preference",
    allergy: "Nut",
    hobby: "Outdoors",
  },
  {
    first_name: "Susan",
    last_name: "Dee",
    birthday: "1985-07-31",
    email: "susan@gmail.com",
    hire_date: "2020-08-30",
    orientationComplete: "2020-09-05",
    compliance_trainingComplete: "1900-01-01",
    food_preference: "Vegan",
    allergy: "Fish",
    hobby: "Sports",
  },
  {
    first_name: "Ivan",
    last_name: "Santos",
    birthday: "1993-12-23",
    email: "ivan@gmail.com",
    hire_date: "2019-07-12",
    orientationComplete: "2019-07-20",
    compliance_trainingComplete: "2019-07-30",
    food_preference: "No Preference",
    allergy: "Soy",
    hobby: "Art",
  },
  {
    first_name: "Christie",
    last_name: "Jones",
    birthday: "1991-09-18",
    email: "christie@gmail.com",
    hire_date: "2018-12-20",
    orientationComplete: "2019-01-16",
    compliance_trainingComplete: "2019-02-19",
    food_preference: "Vegetarian",
    allergy: "Shellfish",
    hobby: "Art",
  },
  {
    first_name: "Jeff",
    last_name: "Millstone",
    birthday: "1970-02-28",
    email: "jeff@gmail.com",
    hire_date: "2013-06-07",
    orientationComplete: "2013-07-11",
    compliance_trainingComplete: "2013-07-12",
    food_preference: "No Preference",
    allergy: "Nut",
    hobby: "Sports",
  },
  {
    first_name: "Channa",
    last_name: "Mik Carlson",
    birthday: "1992-01-09",
    email: "channa@gmail.com",
    hire_date: "2015-11-29",
    orientationComplete: "2015-12-02",
    compliance_trainingComplete: "2015-12-02",
    food_preference: "No Preference",
    allergy: "",
    hobby: "Art",
  },
  {
    first_name: "Lionel",
    last_name: "Carlson",
    birthday: "1988-08-12",
    email: "lionel@gmail.com",
    hire_date: "2018-08-30",
    orientationComplete: "2018-09-01",
    compliance_trainingComplete: "2018-09-01",
    food_preference: "No Preference",
    allergy: "Milk",
    hobby: "Sports",
  },
  {
    first_name: "Rachel",
    last_name: "Wilson",
    birthday: "1993-07-15",
    email: "rachel@gmail.com",
    hire_date: "2019-07-12",
    orientationComplete: "2019-07-20",
    compliance_trainingComplete: "2019-07-30",
    food_preference: "No Preference",
    allergy: "Soy",
    hobby: "Art",
  },
  {
    first_name: "Sierra",
    last_name: "Jacobs",
    birthday: "1990-02-18",
    email: "Sierra@gmail.com",
    hire_date: "2020-09-01",
    orientationComplete: "1900-01-01",
    compliance_trainingComplete: "1900-01-01",
    food_preference: "No Preference",
    allergy: "",
    hobby: "Art",
  },
];
