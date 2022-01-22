# Reactor_Assignment_2022
# Rock Paper Scissors Match Result App

Developed by © 2022 Johannes Mensalo

This app is created as a pre-assignment for Reaktor summer trainee 2022 job application. 
It is a web app developed using React. 
The app uses an API (https://bad-api-assignment.reaktor.com/) to get data of on going
matches and match history data. Live match data is available through a WebSocket API.

Home page shows a list of matches. A list item contains following infromation: match opponents
names, the winners name and winning hand, what hands did the players play and the date and time of 
the match. Results are decending by date and time.

Clicking players names you can inspect their statistics. Player profile shows the total 
number of matches played, most played hand and win ratio. The profile page also contains 
a list of players own matches.

# Required dependencies
This application uses following dependencies. The link will redirect you to the documentation and installation guide. - react-router-dom [https://reactrouter.com/docs/en/v6/getting-started/installation] - react-use-websocket [https://github.com/robtaussig/react-use-websocket] - axios [https://github.com/axios/axios]
