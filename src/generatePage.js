// creates the manager section/card
const managerCard = function(manager) {
    return `
    <div class="col s12 m4">
        <div class="card z-depth-4">
            <div class="card-title cyan darken-3 white-text">
                <h4>${manager.name}</h4>
                <h5><i class="fa-solid fa-people-roof"></i>Manager</h5>
            </div>
            <ul class="card-content collection">
                <li class="collection-item">ID: ${manager.id}</li>
                <li class="collection-item">Email: <a href= "mailto:${manager.email}">${manager.email}</a></li>
                <li class="collection-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
    `;
}

// creates the engineer section/card
const engineerCard = function(engineer) {
    return `
    <div class="col s12 m4">
        <div class="card z-depth-4">
            <div class="card-title cyan darken-3 white-text">
                <h4>${engineer.name}</h4>
                <h5><i class="fa-solid fa-gears"></i>Engineer</h5>
            </div>
            <ul class="card-content collection">
                <li class="collection-item">ID: ${engineer.id}</li>
                <li class="collection-item">Email: <a href= "mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="collection-item">GitHub: <a href= "https://github.com/${engineer.githubUser}">${engineer.githubUser}</a></li>
            </ul>
        </div>
    </div>
    `;
}

// creates the intern section/card
const internCard = function(intern) {
    return `
    <div class="col s12 m4">
        <div class="card z-depth-4">
            <div class="card-title cyan darken-3 white-text">
                <h4>${intern.name}</h4>
                <h5><i class="fa-solid fa-chalkboard-user"></i>Intern</h5>
            </div>
            <ul class="card-content collection">
                <li class="collection-item">ID: ${intern.id}</li>
                <li class="collection-item">Email: <a href= "mailto:${intern.email}">${intern.email}</a></li>
                <li class="collection-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>
    `;
}

// creates the template for the entire html page

const myTeamPage = function(myTeamInfo) {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Page</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header class="red lighten-2">
            <h2 class="white-text center">My Team</h2>
        </header>
        <main class="valign-wrapper>
            <div class="valign-wrapper" style="width:100%;height:100%;">
                <div class="valign" style="width:100%;">
                    <div class="container">
                        <div class="row">
                            ${myTeamInfo}
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <script src="https://kit.fontawesome.com/91a4da6089.js" crossorigin="anonymous"></script>
    </body>
    `;
}

// generate page with the data from the employee array
generatePage = (data) => {

    // creates the array to hold the employee data
    employeeArray = [];

    // loop through the data to get the role of each employee
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        // if the getRole() function returns manager push the manager's info into employeeArray
        if (role === 'Manager') {
            const managerInfo = managerCard(employee);
            employeeArray.push(managerInfo);
        }

        // if the getRole() function returns engineer push the engineer's info into the employeeArray
        if (role === 'Engineer') {
            const engineerInfo = engineerCard(employee);
            employeeArray.push(engineerInfo);
        }

        // if the getRole() function returns intern push the intern's info into the employeeArray
        if (role === 'Intern') {
            const internInfo = internCard(employee);
            employeeArray.push(internInfo);
        }
    }

    // join the manager, engineer, and intern info into one place
    const myTeamInfo = employeeArray.join('');

    // apply the myTeamInfo to the teamPage function to generate and return the team
    const generateMyTeam = myTeamPage(myTeamInfo);
    return generateMyTeam;
}

module.exports = generatePage;