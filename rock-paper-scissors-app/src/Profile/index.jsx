import React, { Component } from "react";
import LoadingIcon from "../components/LoadingIcon";
import Card from "../components/Card";
import axios from "axios";
import { getAllPlayedGames, getMostPlayedHand, calculateWinRatio, countWins } from "../components/Statistics/Statistics";

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            history: [],
            isLoading: true,
            isError: false,
            error: null,
            username: props.username,
            winratio: 0.00,
            wins: 0,
            mostPlayedHand: "Undefined",
            totalGames: 0,

        }

    }

    componentDidMount() {
    
        axios.get('../rps/history')
            .then((response) => {

                this.setState({
                    isLoading: false,
                    history: response.data.data,
                });
            })
            .catch((error) => {
                this.setState({
                    isLoading: false,
                    isError: true,
                    error: error
                });
                console.error(error);

            });

    }

    componentWillUnmount() {
        this.setState({
            isLoading: false,
            history: [],
            error: null,
            username: null,
            isError: false,
            totalGames: 0,
            wins: 0,
            winratio: 0.00,
            mostPlayedHand: "Undefined",
        });
    }

    render() {

        const allGames = getAllPlayedGames(this.state.history, this.state.username);
        const wins = countWins(this.state.username, allGames);
        const winratio = calculateWinRatio(allGames.length, wins);
        const mostPlayed = getMostPlayedHand(allGames, this.state.username);

        if (this.state.isLoading) {
            return <LoadingIcon />
        }

        return (
            <div>
                {this.state.isError && <div>{this.state.error}</div>}
                <div className="Scoreboard-div">
                    <center>
                        <label className="ProfileHeader" htmlFor="info">{this.state.username}</label>
                        <hr />
                        <table name="info">
                            <tbody>
                                <tr>
                                    <th>Total Number of Matches Played:</th>
                                    <td>{allGames.length}</td>
                                </tr>
                                <tr>
                                    <th>Most Used Hand:</th>
                                    <td>{mostPlayed.hand}</td>
                                </tr>
                                <tr>
                                    <th>Win Ratio:</th>
                                    <td>{winratio}</td>
                                </tr>
                            </tbody>
                        </table>
                    </center>
                </div>
                {/* <center><h2>Played Matches</h2></center> */}

                {allGames && allGames.map((item) => (
                    <Card
                        key={item.gameId}
                        playerAname={item.playerA.name}
                        playerBname={item.playerB.name}
                        playerAplayed={item.playerA.played}
                        playerBplayed={item.playerB.played}
                        gameId={item.gameId}
                        time={item.t}
                    />
                ))}
            </div>

        );
    }


}
