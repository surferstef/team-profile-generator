const inquirer = require("inquirer");
const fs = require("fs");
//const genEmployee = require("./lib/Employee");
const genEngineer = require("./lib/Engineer");
const genIntern = require("./lib/Intern");
const genManager = require("./lib/Manager");

const promptQuestions = function() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is your name?",
          name: "name",
        },
        {
          type: "id",
          message: "What is your ID num?",
          name: "id",
        },
        {
          type: "input",
          message: "What is your email addr?",
          name: "email",
        },
        {
          type: "list",
          message: "What is your role?",
          name: "role",
          choices: ["Engineer", "Intern", "Manager"], //employee?
        },
      ])
      .then(function ({ name, id, email, role}) {
          switch (role) {
            case "Engineer":
                inquirer
                  .prompt({
                    type: "input",
                    message: "What is your GitHub username?",
                    name: "github",
              }) 
             .then(function ({ github }) {
              genEngineer(name, id, email, github);
              addEmp();
            });
          break;
            case "Manager":
                inquirer
                  .prompt({
                    type: "input",
                    message: "What is the Number of your Office?",
                    name: "officeNumber",
                  })
                  .then(function ({ officeNumber }) {
                    genManager(name, id, email, officeNumber);
                    addEmp();
                  });
                break;  
             case "Intern":
                inquirer
                 .prompt({
                   type: "input",
                    message: "What school are you going to?",
                    name: "school",
                    })
                    .then(function ({ school }) {
                     genIntern(name, id, email, school);
                     addEmp();
                 });
                 break;
       
          }
      });
    }

    

    function addEmp() {
        inquirer
            .prompt({
                type: "list",
                message: "Will you be adding a new employee?",
                choices: ["Yes", "No"],
            })
            .then(function ({ addEmp }) {
                if ( addEmp ) {
                    promptQuestions();
                }
                else {
                    `<div class="card" style="width: 25rem">
                        <section class="card-body">
                          <h5 class="card-title">Name: /h5>
                          <h6 class="card-subtitle mb-2 text-muted"></h6>
                              <p class="card-text">
                               Id: 
                                </p>
                            <p>Email: <a href="mailto: " class="card-subtitle"></a></p>
                            <p><a class="card-subtitle" target="_blank"></a></p>
                           </section>
                          </div>`
                         }
                     })
                    .catch((err) => {
                      console.log("Error when you tried to add a new emp!", err);
                      throw err;
                  });
        
        }
    

    promptQuestions();
