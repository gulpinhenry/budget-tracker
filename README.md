# Online/Offline Budget Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Table of Contents

- [Online/Offline Budget Tracker](#onlineoffline-budget-tracker)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Usage](#usage)
  - [Built With](#built-with)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)
  - [Questions](#questions)
  - [User Story](#user-story)
  - [Business Context](#business-context)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Commit Early and Often](#commit-early-and-often)
  - [Submission on BCS](#submission-on-bcs)
  - [Hint](#hint)
  

## Description
A progressive web application for tracking deposits and expenses. Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success. The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online. I used this app to explore indexDb as well as webpacks and progressive web application features

 <br />



[Demo walkthrough]()

## Usage

[View Deployment](https://techblog-henrykam.herokuapp.com/)

<br>

## Built With
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  * [bcrypt](https://www.npmjs.com/package/bcrypt)
  * [dotenv](https://www.npmjs.com/package/dotenv)
  * [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
  * [MySQL2](https://www.npmjs.com/package/mysql2)
  * [Node.js](https://nodejs.org/en/)
  * [nodemon](https://nodemon.io/)
  * [Sequelize](https://sequelize.org/)
* [MySQL](https://www.mysql.com)



## Technologies Used

* [Microsoft Visual Studio Code](https://code.visualstudio.com/)
* [Git Bash](https://git-scm.com/downloads)
* [GitHub](https://github.com/)
* [Insomnia](https://insomnia.rest/)
* [Heroku](https://www.heroku.com/)
* [Robo 3T](https://robomongo.org/)
* [Lighthouse](https://developers.google.com/web/tools/lighthouse/)
* [Google Chrome Developer Tools](https://developer.chrome.com/docs/devtools/)

## Contributing


**Henry Kam**

- [Github](https://github.com/gulpinhenry)
- [LinkedIn](https://www.linkedin.com/in/kamhenry/)


## License

This application is covered under the MIT license

## Questions

For any questions, please reach out by creating an issue.


Add functionality to our existing Budget Tracker application to allow for offline access and functionality.



## User Story
AS AN avid traveller
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling

## Business Context




## Acceptance Criteria
GIVEN a user is on Budget App without an internet connection
WHEN the user inputs a withdrawal or deposit
THEN that will be shown on the page, and added to their transaction history when their connection is back online.

- - -

## Commit Early and Often

* One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

1. Your commit history is a signal to employers that you are actively working on projects and learning new skills

2. Your commit history allows you to revert your code base in the event that you need to return to a previous state

* Follow these guidelines for committing:

  * Make single purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits

  * Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history

  * Don't commit half done work, for the sake of your collaborators (and your future self!)

  * Test your application before you commit to ensure functionality at every step in the development process

* We would like you to have well over 200 commits by graduation, so commit early and often!

* Deploy your application with [Heroku and MongoDB Atlas.](../04-Important/MongoAtlas-Deploy.md)

## Submission on BCS

* You are required to submit the following:

  * the URL to the deployed application

  * the URL to the Github repository

- - -

## Hint

* In order to cache dynamic content, i.e. users' inputs for withdrawals or deposits, incorporate `indexedDB` from the previous module.

* Use [Google](https://www.google.com) or another search engine to research this topic.