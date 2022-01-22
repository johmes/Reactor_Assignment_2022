import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { getWinner } from "../Statistics/Statistics";

// Card class returns a react element
export default class Card extends Component {
    
    winnerToString() {
        const winner = getWinner(
            this.props.playerAname,
            this.props.playerBname,
            this.props.playerAplayed,
            this.props.playerBplayed
            );

        if (winner.name !== null && winner.outcome !== "DRAW") {
            return `${winner.name}  wins with ${winner.outcome}` 
        }
        return "DRAW"
        
    }

    render() {
    
        return (
            <div className="Scoreboard-div">
                <div className="CardHeader">
                    <h5 className="CardTitle">
                        {this.props.playerAname} VS {this.props.playerBname}
                    </h5>
                    <p className="CardDate">
                        {new Date(this.props.time).toLocaleString("fi-FI")}
                    </p>
                </div>

                <div className="CardList">
                    <ul>
                        <li>
                            <Link 
                                type="button"
                                to={`${process.env.PUBLIC_URL}/Players/${this.props.playerAname}`}
                                onClick={this.forceUpdate}>{this.props.playerAname}
                            </Link>
                            &#160;played {this.props.playerAplayed.toLowerCase()}
                        </li>
                        <li>
                        <Link 
                            type="button"
                            to={`${process.env.PUBLIC_URL}/Players/${this.props.playerBname}`}
                           >{this.props.playerBname}
                            </Link>
                            &#160;played {this.props.playerBplayed.toLowerCase()}
                        </li>
                    </ul>
                </div>

                <center>
                    <p className='ResultText'>
                        {this.winnerToString()}
                    </p>
                </center>
            </div>
        )
        
    }
}