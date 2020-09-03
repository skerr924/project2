module.exports = function(sequelize, DataTypes) {
  const Employee = sequelize.define("Employee", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2],
      },
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2],
      },
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5],
      },
    },
    hire_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    orientationComplete: {
      type: DataTypes.DATEONLY,
    },
    compliance_trainingComplete: {
      type: DataTypes.DATEONLY,
    },
  });

  Employee.associate = function(models) {
    models.Employee.belongsToMany(models.Allergies, {
      through: "allergyAssociation",
    });
  };

  Employee.associate = function(models) {
    models.Employee.belongsToMany(models.Hobbies, {
      through: "allergyAssociation",
    });
  };
  return Employee;
};
