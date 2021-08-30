// const fs = require("fs");
// const path = require("path");
// //const templateDir = ("./dist");
// const Employee = require("./Employee");
// const Engineer = require("./Engineer");
// const Intern = require("./Intern");
// const Manager = require("./Manager");

// let teamMembers = ""

// function renderMain() {
//     // let mainTemplate = fs.readFileSync(path.resolve(templateDir, "template.html"), "utf-8");
//     // var mainHtml = ""
//     // mainHtml = mainHtml + mainTemplate.replace(/{ team }/g, teamMembers)
//     let file = path.join(__dirname, "/template.html");
//     fs.writeFile(file,  function (err) {
//         if (err) {
//             throw new Error(err)
//         }
//         console.log('Employee Successfully created!');
//     });
// };

// module.exports = {

//     renderMain: renderMain
// };