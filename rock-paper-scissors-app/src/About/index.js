import React, { Component } from "react";

// This class returns a react element with a class name "About" on the 
// about page of the app. 
export default class About extends Component {
    render() {
        return (
            <div className="About">
                <center>
                    <h1>About {process.env.REACT_APP_NAME}</h1>
                    <br />
                    <p>
                        This App is a demo for showing rock-paper-scissors game results from bad-api-assignment API created by Reaktor.
                        The landing page contains all the results from played games between two players.
                        A card from the list shows the two opponents, what hand did each of them play, date and time and who won the game.
                        <br />
                        <br />
                        Navigation bar on the top of the page is showing on going games. It is refreshed as new games appear. Live results
                        use websocket and the game history list is fetched as JSON data. As the data is fetched from the api, it appears misformatted and needs
                        to be handled twice with JSON.parse() function. After that we can handle it as a proper JSON data and get all the objects inside it.
                    </p>
                    <br />
                    <br />
                    <b>&copy; 2022 Johannes Mensalo</b>
                    <br />
                    <a href="mailto:johannesmensalo@gmail.com">johannesmensalo@gmail.com</a>
                </center>
            </div>

        )
    }
}