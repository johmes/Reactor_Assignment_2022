# Rock Paper Scissors Match Result App

Developer © 2022 Johannes Mensalo

This app is created as a pre-assignment for Reaktor summer trainee 2022 job application. It is a web app developed using React. 
The app uses an API (https://bad-api-assignment.reaktor.com/) to get on going matches and history data. Live match data is available through a WebSocket protocol.

Home page shows a list of matches. A list item contains following infromation: match opponents names, the winners name and winning hand, what hands did the players play and the date and time of the match. Results are decending by date and time.

Clicking players names you can inspect their statistics. Player profile shows the total number of matches played, most played hand and win ratio. The profile page also contains a list of players own matches.

# Required dependencies
This application uses following dependencies. The link will redirect you to the documentation and installing guide.
    - react-router-dom [https://reactrouter.com/docs/en/v6/getting-started/installation]
    - react-use-websocket [https://github.com/robtaussig/react-use-websocket]
    - axios [https://github.com/axios/axios]


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

