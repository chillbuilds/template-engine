const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generateHTML = require("./templates/generateHTML");
const managerArr = [];
const engineerArr = [];
const internArr = [];
var id = 0;
var employeeData;


inquirer
  .prompt([
      {
      type: "text",
      name: "name",
      message: "What's Your Name?"
      },
      {
      type: "text",
      name: "email",
      message: "What's Your Email?"
      },
      {
      type: "list",
      name: "position",
      message: "What's Your Position At The Company?",
      choices: ["Manager", "Engineer", "Intern"]
      }
  ])

  .then(function (data) {
    employeeData = data;
      id = id + 1;
    if (data.position === "Manager") {
        inquirer
        .prompt([
            {
                type: "number",
                name: "officenum",
                message: "What Is Your Office Number?"
            }
        ]).then(function(data){
            //create manager from class
            const x = new Manager(employeeData.name, id, employeeData.email, data.officenum);
            managerArr.push(x);
            addQuery();
        })
      } else if (data.position === "Engineer") {
        inquirer
        .prompt([
            {
                type: "input",
                name: "github",
                message: "What Is Your Github Username?"
            }
        ]).then(function(data){
            // create engineer from class
            const x = new Engineer(employeeData.name, id, employeeData.email, data.github);
            engineerArr.push(x);
            addQuery();
        })
      } else if(data.position === "Intern") {
        inquirer
        .prompt([
            {
                type: "input",
                name: "school",
                message: "What College Did You Attend?"
            }
        ]).then(function(data){
            // create intern from class
            const x = new Intern(employeeData.name, id, employeeData.email, data.school);
            internArr.push(x);
            addQuery();
        })}

})
function addQuery(){
inquirer
  .prompt([
      {
      type: "list",
      name: "addmore",
      message: "Would You Like To Add Another Employee?",
      choices: ["Yes", "No"]
      }
  ]).then(function(data){
      if(data.addmore === "Yes"){
          addEmployee();
      }else{
          generateHTML(managerArr, engineerArr, internArr);
          writeHTML(generateHTML(managerArr, engineerArr, internArr));
      }
})}

function addEmployee(){
    id = id + 1;
    inquirer
  .prompt([
      {
      type: "text",
      name: "name",
      message: "What's The Employee's Name?"
      },
      {
      type: "text",
      name: "email",
      message: "What's The Employee's Email?"
      },
      {
      type: "list",
      name: "position",
      message: "What's The Employee's Position Within The Company?",
      choices: ["Manager", "Engineer", "Intern"]
      }
  ])
  .then(function(data){
    employeeData = data;
    if (data.position === "Manager") {
        inquirer
        .prompt([
            {
                type: "number",
                name: "officenum",
                message: "What Is The Employee's Office Number?"
            }
        ]).then(function(data){
            //create manager from class
            const x = new Manager(employeeData.name, id, employeeData.email, data.officenum);
            managerArr.push(x);
            addQuery();
        })
      } else if (data.position === "Engineer") {
        inquirer
        .prompt([
            {
                type: "input",
                name: "github",
                message: "What Is The Employee's Github Username?"
            }
        ]).then(function(data){
            //create engineer from class
            const x = new Engineer(employeeData.name, id, employeeData.email, data.github);
            engineerArr.push(x);
            addQuery();
        })
      } else if(data.position === "Intern") {
        inquirer
        .prompt([
            {
                type: "input",
                name: "school",
                message: "What College Did The Employee's Attend?"
            }
        ]).then(function(data){
            //create intern from class
            const x = new Intern(employeeData.name, id, employeeData.email, data.school);
            internArr.push(x);
            addQuery();
        })}
  })
}


function writeHTML(generateHTML){
    fs.writeFile("./output/engineering-team.html", generateHTML, function (error){
        if(error) {console.log(error)
        }
        console.log(`\n\n****** HTML File Created ******\n\n`)
    });
  };

// function generateHTML(){
//     fs.readFile(`./templates/header.html`, "utf8", function(error, data) {
//         if (error) {
//             return console.log(error);}
//           // fs.readFileSync(`./templates/employee.html`, "utf8", function(error, resp){
//               //     if (error) {
//                   //         return console.log(error);}
//                   //     console.log(resp);
//                   //     x = resp
//                   // });
//         fs.writeFile(`./output/test.html`, data, function (err) {
//           if (err) console.log(err);
//             console.log("File written successfully");
//           });
//         });
// }
