# frugali-TEA

## What on earth are you talking about
We are just a group of frugal tea-lovers. The less money you spend each month, the more you can spend on TEA.

## the TEAm
* Eunice Redbush Kontor
* Grace Earl Grey Farren
* Hatairy Dos-Fruity Santos
* Ollie Chamomile Kennedy
* Rhianna Peppermint Stuart
* Sabarinth Oolong Kunnambath

## MVP
* income
* categories
  * bills, groceries, entertainment, travel, loans, hobbies, savings
  * amount can be set against each of these
* net

## Iteration 2
* login & authentication (add the notion of a user)
  * check the user knows how to make tea
  * front end page with fields
  * bcrypt / encryption
  * database for username and passwords
    * collection for x
* custom categories
* ideal spending / savings target
* outgoings
* pie-chart for budget split
* multiple sources of income
* separate months

## Set-up
It uses:
- [Express](https://expressjs.com/) web framework for Node.js.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [Handlebars](https://handlebarsjs.com/) to render view templates.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [ESLint](https://eslint.org) for linting.
- [Jest](https://jestjs.io/) for testing.
- [Cypress](https://www.cypress.io/) for end-to-end testing.
## Card wall
https://trello.com/b/QN4T3w6L/final-project-covid-comparision
## Project set-up
### Install Node.js
1. Install Node Version Manager (NVM)
    ```
    brew install nvm
    npm i express
    ```
    Then follow the instructions to update your `~/.bash_profile`.
1. Open a new terminal
1. Install the latest long term support (LTS) version of [Node.js](https://nodejs.org/en/), currently `12.14.1`.
    ```
    nvm install 12.14.1
    ```
### Set up your project
1. Fork this repository
1. Rename your fork to `acebook-<team name>`
1. Clone your fork to your local machine
1. Install Node.js dependencies
    ```
    npm install
    ```
1. Install an ESLint plugin for your editor. For example: [linter-eslint](https://github.com/AtomLinter/linter-eslint) for Atom.
1. Install MongoDB
    ```
    brew tap mongodb/brew
    brew install mongodb-community@4.4
    ```
1. Start MongoDB
    ```
    brew services start mongodb-community@4.4
    ```
### Start
1. Start the server
    ```
    npm start
    ```
1. Browse to [http://localhost:3000](http://localhost:3000)
### Test
* Run all tests
    ```
    npm test
    ```
* Run a check
    ```bash
    npm run lint              # linter only
    npm run test:unit         # unit tests only
    npm run test:integration  # integration tests only
    ```
#### Start test server
The server must be running locally with test configuration for the
integration tests to pass.
```
npm run start:test
```
This starts the server on port `3030` and uses the `acebook_test` MongoDB database,
so that integration tests do not interact with the development server.

#### Database setup
```
Mongo

use frugali_TEA_test
db.createCollection('budget')
db.budget.insert({
 Bills: 1500,
 Entertainment: 250,
 Travel: 250,
 Loans: 250,
 Tea: 250,
 Hobbies: 250,
 Savings: 250
})

```
```
use frugali_TEA
db.createCollection('transaction')
db.transaction.insert({
 Description: 'YORKSHIRE GOLD',
 Category: 'TEA',
 Amount: 5
})
```

```
use frugali_TEA_test
db.createCollection('transaction')
db.transaction.insert({
 Description: 'YORKSHIRE GOLD',
 Category: 'TEA',
 Amount: 5
})
```
