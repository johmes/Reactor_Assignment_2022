import React, { Component } from 'react';
import Card from '../components/Card';

// Class for list. Returns list of matches when no errors occure or 
// list length is more than 0.  
export default class List extends Component {

    render() {
        if (this.props.list.length === 0) {
            return (
                <center>
                    <p className='ListEndText'>No Matches Found</p>
                </center>
            )
        }

        return (
            <div className='ListBody'>

                {this.props.list && this.props.list.map(item => (
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

                <center>
                    <p className='ListEndText'>That's it for now!</p>
                </center>

            </div>
        )
    }
}