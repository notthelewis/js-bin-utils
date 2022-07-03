# Getting started
Clone this repository, then run npm i -D to install all the dev dependencies.

#### Info
This project uses [commitizen](https://github.com/commitizen/cz-cli) for uniform commit messages. 
In order to use it, install commitizen locally on your machine `npm i -g commitizen cz-conventional-changelog`
When commiting code, use `git cz`.

#### Testing
Test suites are run using jest (npm run test). New additions must pass all previously existing tests, or provide good reason to fail or replace 
the test with an alternative.

