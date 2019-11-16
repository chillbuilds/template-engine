const inquirer = require("inquirer");
const jest = require("jest");
const teamMembers = [];
const ids = [];

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
      message: "What's Your Position Within The Company?",
      choices: ["Manager", "Engineer", "Intern"]
      }
  ])

  .then(function (data) {
    if (data.position === "Manager") {
        console.log("Manager")
      } else if (data.position === "Engineer") {
        console.log("Engineer")
      } else if(data.position === "Intern") {
        console.log("Intern")}
        //generate from class
        addQuery();

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
      addQuery();
  })
}

