# Test Assignment

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Execution Overseeing](#test-execution-overseeing)
- [Project Structure](#project-structure)

## Requirements

- Node.js >= 22.x
- npm >= 10.x
- _recommendation:_
  - use nvm(node version manager) for needed version switching.
  - to add [node version auto-switching script for zsh](https://gist.github.com/Xotabu4/bbe73528641a1f5ab198c9f44f0a26ed) (as project has `.nvmrc` file) for version changing on project open. May be found for other terminals or made for needed with ChatGPT help.

## Installation

Use npm to install needed packages.

```bash
npm install

# in case of the first Playwright installation, specific browsers are required:
npx playwright install
```

## Running Tests

### Using Playwright Test Extension

For running single tests / debugging - highly recommended way, to use [Playwright Test extension](vscode:extension/ms-playwright.playwright). In the "Testing" tab you should check all the projects to be able to run any test using the play button next to the test(in test file located by project path).

### Running Tests via CLI

To run a group of tests via CLI, you can use the following commands:

```bash
# to run list of desktop / api tests
npm run test-desktop
npm run test-api
```

## Test execution overseeing

For local report viewing use following command:

```bash
# to see generated html report of tests execution
npx playwright show-report
```

## Project structure

- **app** - test framework code and application logic.
  - **api** - API related functionality and API models.
  - **data** - test data (authorization profiles, component data, error messages).
  - **fixtures** - custom Playwright fixtures for tests.
  - **pages** - page objects and component classes used in tests.
    - **common** - shared page objects.
    - **components** - UI component classes.
  - **types** - TypeScript type definitions.
  - **utils** - helper functions and utilities.
- **tests** - test specifications.
  - **desktop** - desktop tests.
  - **api** - API tests.

## Author - Alex Chub
