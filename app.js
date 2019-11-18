const inquirer = require("inquirer");
const jest = require("jest");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const teamMembers = [];
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
    console.log(teamMembers);
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
            const x = new Manager(employeeData.name, employeeData.email, employeeData.position, id, data.officenum);
            teamMembers.push(x);
            console.log(teamMembers);
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
            const x = new Engineer(employeeData.name, employeeData.email, employeeData.position, id, data.github);
            teamMembers.push(x);
            console.log(teamMembers);
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
            const x = new Intern(employeeData.name, employeeData.email, employeeData.position, id, data.school);
            teamMembers.push(x);
            console.log(teamMembers);
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
            const x = new Manager(employeeData.name, employeeData.email, employeeData.position, id, data.officenum);
            teamMembers.push(x);
            console.log(teamMembers);
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
            const x = new Engineer(employeeData.name, employeeData.email, employeeData.position, id, data.github);
            teamMembers.push(x);
            console.log(teamMembers);
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
            const x = new Intern(employeeData.name, employeeData.email, employeeData.position, id, data.school);
            teamMembers.push(x);
            console.log(teamMembers);
            addQuery();
        })}
  })
}

