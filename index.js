const inquirer = require("inquirer");
const fs = require("fs");
//const genEmployee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
//let renderFile = require("./lib/RenderFile");
//const renderForm = renderFile.renderMain;

const employeeArray = [];
const promptQuestions= function () {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is your name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is your id number?",
        },
        {
          type: "input",
          name: "email",
          message: "What is your email?",
        },
        {
          type: "list",
          name: "role",
          message: "What is your role?",
          choices: ["Engineer", "Intern", "Manager"],
        },
      ])
      .then((answers) => {
        if (answers.role === "Engineer") {
          inquirer
            .prompt({
              type: "input",
              name: "github",
              message: "What is your GitHub username?",
            })
            .then((roleInfo) => {
              employeeArray.push(
                new Engineer(
                  answers.name,
                  answers.id,
                  answers.email,
                  answers.role,
                  roleInfo.github
                )
              );
              addEmp();
            });
        } else if (answers.role === "Intern") {
          inquirer
            .prompt({
              type: "input",
              name: "school",
              message: "Where do you go to school?",
            })
            .then((roleInfo) => {
              employeeArray.push(
                new Intern(
                  answers.name,
                  answers.id,
                  answers.email,
                  answers.role,
                  roleInfo.school
                )
              );
              addEmp();
            });
        } else if (answers.role === "Manager") {
          inquirer
            .prompt({
              type: "input",
              name: "officeNumber",
              message: "What is your office number?",
            })
            .then((roleInfo) => {
              employeeArray.push(
                new Manager(
                  answers.name,
                  answers.id,
                  answers.email,
                  answers.role,
                  roleInfo.officeNumber
                )
              );
              addEmp();
            });
        }
      });
  };
  

    

    function addEmp() {
        inquirer
            .prompt({
                type: "confirm",
                message: "Will you be adding a new employee?",
                name: "addEmp",
             //   choices: ["Yes", "No"],
            })
            .then(function ({ addEmp }) {
                if (addEmp) {
                  promptQuestions();
                } else {
                    //renderForm();
                         }
                     })
                    .catch((err) => {
                      console.log("Error when you tried to add a new emp!", err);
                      throw err;
                  });
        
        }
    

    promptQuestions();
