// creates the manager section/card
const managerCard = function(manager) {
    return `
    <div (put in size the card will be)>
        <div (put in what the outer shell of card will look like)>
            <div (put in header class and look)>
                <h4>${manager.name}</h4>
                <h5>Manager</h5>
            </div>
            <div (put in what card info/content will look like)>
                <p>ID: ${manager.id}</p>
                <p>Email: <a href= "mailto:${manager.email}">${manager.email}</a></p>
                <p>Office Number: ${manager.officeNumber}</p>
            </div<
        </div>
    </div>
    `;
}

// creates the engineer section/card
const engineerCard = function(engineer) {
    return `
    <div (put in size the card will be)>
        <div (put in what the outer shell of card will look like)>
            <div (put in header class and look)>
                <h4>${engineer.name}</h4>
                <h5>Engineer</h5>
            </div>
            <div (put in what card info/content will look like)>
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href= "mailto:${engineer.email}">${engineer.email}</a></p>
                <p>GitHub: <a href= "https://github.com/${engineer.githubUser}">${engineer.githubUser}</a></p>
            </div<
        </div>
    </div>
    `;
}

// creates the intern section/card
const internCard = function(intern) {
    return `
    <div (put in size the card will be)>
        <div (put in what the outer shell of card will look like)>
            <div (put in header class and look)>
                <h4>${intern.name}</h4>
                <h5>Intern</h5>
            </div>
            <div (put in what card info/content will look like)>
                <p>ID: ${intern.id}</p>
                <p>Email: <a href= "mailto:${intern.email}">${intern.email}</a></p>
                <p>School: ${intern.school}</p>
            </div<
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
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav>
                <span>My Team</span>
            </nav>
        </header>
        <main>
            <div>
                <div>
                </div>
            </div>
        </main>
    </body>
    `;
}