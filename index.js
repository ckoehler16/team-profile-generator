// node packages needed for application
const fs = require('fs');
const inquirer = require('inquirer');

// employee profiles needed for the application
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/generatePage');

// array that holds the teams info
const teamData = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager for this team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter a name for the team manager.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's employee Id?",
            validate: idInput => {
                if (idInput) {
                    return true;
                }
                else {
                    console.log("Please enter the manager's employee Id.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log("Please enter the team manager's email?");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                }
                else {
                    console.log("Please enter the manager's office number.");
                    return false;
                }
            }
        }
    ])

        .then(({ name, id, email, officeNumber }) => {
            const manager = new Manager(name, id, email, officeNumber);

            // put manager data into the teamData array
            teamData.push(manager);
            console.log(manager);
        })
};

// call function to start prompt
promptManager();

