// node packages needed for application
const fs = require('fs');
const inquirer = require('inquirer');

// employee profiles needed for the application
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/generatePage');
const Employee = require('./lib/Employee');

// array that holds the teams info
const teamData = [];

// start with prompts for manager info
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
                    console.log("Please enter the team manager's email.");
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
            //console.log(manager);
        })
};

// prompts for the employees; engineers and interns
const promptTeam = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'teamMemberRole',
            message: 'Please select an employee to add to the team.',
            choices: ['Add Engineer', 'Add Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter a name for the employee.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's Id?",
            validate: idInput => {
                if (idInput) {
                    return true;
                }
                else {
                    console.log("Please enter the employee's Id.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log("Please enter the employee's email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUser',
            message: "Please enter the engineer's GitHub username.",
            when: (input) => input.teamMemberRole === 'Add Engineer',
            validate: githubUserInput => {
                if (githubUserInput) {
                    return true;
                }
                else {
                    console.log("Please enter the engineer's GitHub username.")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the school the intern attends.',
            when: (input) => input.teamMemberRole === 'Add Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                }
                else {
                    console.log("Please enter the intern's school.")
                }
            }
        },
        {
            type: 'confirm',
            name: 'addTeamMember',
            message: 'Do you want to add another employee to the team?',
            default: false
        }
    ])

    // generate employee data
    .then(({ name, id, email, teamMemberRole, githubUser, school, addTeamMember }) => {
        let employee;

        if (teamMemberRole === 'Add Engineer') {
            employee = new Engineer (name, id, email, githubUser);
            //console.log(employee);
        }

        if (teamMemberRole === 'Add Intern') {
            employee = new Intern (name, id, email, school);
            //console.log(employee);
        }

        // take the employee data and add it to the teamData array
        teamData.push(employee);
        //console.log(teamData);

        // run promptTeam if addTeamMember is performed
        if (addTeamMember) {
            return promptTeam(teamData);
        }
        else {
            return teamData;
        }
    });
};

// function to write the file for the html
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        }
        else {
            console.log(teamData);
            console.log('The team profile has been created!')
        }
    });
};

// call function to start prompts and generate the html page with user input
promptManager()
    // after manager input, prompt the input for the rest of the employees
    .then(promptTeam)

    // then collect all the employee data to create page with it
    .then(teamData => {
        return generatePage(teamData);
    })

    // create the file as an HTML page
    .then(pageHTML => {
        return writeFile(pageHTML);
    })

    .catch(err => {
        console.log(err);
        const myTeamPage = generatePage(err);
        writeFile(myTeamPage);
    });


