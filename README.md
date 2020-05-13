This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Quick Setup and Info

### A simple app using the Movie Database API

* Search interface after clicking displays paginated result
* Clicking to the one of the search result take you to the movie detail page

### Decisions

* state management done with redux against props. For small Apps can also be done with the context api.  

* routing: react-router

* Code Quality: typescript, pre commit Hooks for linters and tests

* a11y:

  * is fully tabbable only focusable elements are used
  * search have a aria-label attribute. Can also be done with label
  * there is no hidden skip to content button. Cause of missing header
  * Pagination can be optimized. Screen reader only text for each button e.g. 'page'. And a general explanation text with aria-labelledby attribute e.g. 'Jump to '

* Optional Persistence

  * Search Page e.g. store the searchQuery in the session storage
  * Detail Page a own request with the movie id getting from the url

### Node Version

v12.11.1

### Package Manager

Yarn

```

git clone git@github.com:anvode/species.git directory
cd directory
yarn install
cp .env.example .env
yarn start

```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
