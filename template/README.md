# Application name

> Application description

## Prerequisites

Make sure you have installed all the following prerequisites on your development machine:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org) (version 14 LTS or higher)

## Live environments

- [Testing](https://testing.env)
- [Stage](https://stage.env)
- [Production](https://production.env)

## Features

1. [Feature Name](path/to/feature/folder) - Feature description.

## Dependencies

After cloning the repository in the project folder, run the following command:

```
npm install
```

It installs the all application dependencies.

## Development

To run the application locally, use the following command:

```
npm start
```

The app will be started at [http://localhost:3000](http://localhost:3000) in the development mode.
The page will reload after any edits.

The development mode uses a proxy for the API requests, which you can configure in the `setupProxy.js` file.

## Production

To get the production build, use the following command:

```
npm run build
```

It correctly bundles React in production mode and optimizes the build for the best performance.
The build is in the `build` folder and ready to be deployed, it is minified and the filenames include the hashes.

## Configuration

The application loads the configuration from following files:

- `.env.production` - for production build
- `.env.development` - for locally development
- `.env.test` - for running tests

See the section about [advanced configuration](https://create-react-app.dev/docs/advanced-configuration) for more information.

## Testing

Tests can be run using the following command:

```
npm test
```

To run the tests in the interactive watch mode, use the following command:

```
npm run test:watch
```

To collect test coverage information, use the following command:

```
npm run test:coverage
```

The test coverage report is in the `coverage` folder.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Code quality

To run the code quality checking use the following command:

```
npm run lint
```

It runs styles and scripts checking.

To run the scripts checking separately use the following command:

```
npm run lint:scripts
```

The scripts checking uses the [@byndyusoft/eslint-config](https://www.npmjs.com/package/@byndyusoft/eslint-config) configuration.

To run the styles checking separately use the following command:

```
npm run lint:styles
```

The scripts checking uses the [@byndyusoft/stylelint-config](https://www.npmjs.com/package/@byndyusoft/stylelint-config) configuration.

## Code formatting

To check the code for formatting issues, use the following command:

```
npm run prettier:check
```

To fix code formatting issues, use the following command:

```
npm run prettier:write
```

## Other available scripts

> List of available scripts with descriptions

## Branches

- `master` - Default git branch.
- `develop` - Default development branch.
- `release` - Release branch. Each release has its own tag.

All development branches must begin with the `feature/` prefix.

## Maintainers

- [Name Surname](mailto:surname@email.com)

---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [@byndyusoft/cra-template](https://www.npmjs.com/package/@byndyusoft/cra-template).
