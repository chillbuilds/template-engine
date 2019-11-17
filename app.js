const inquirer = require("inquirer");
const jest = require("jest");
const employee = require("./lib/employee");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const teamMembers = [];
const ids = [];
var numOfEmployees = 0;

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
      numOfEmployees = numOfEmployees + 1;
    const x = new employee(data.name, data.email, data.position, numOfEmployees);
    console.log(x);
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
            //create engineer from class
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
            //create intern from class
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
      }
})}

function addEmployee(){
    numOfEmployees = numOfEmployees + 1;
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
            addQuery();
        })}
  })
}

