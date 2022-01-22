import React from 'react';
import { Link } from 'react-router-dom';
import Live from './Live'

// Returns navigation bar with live matches
function Navigation() {
    return (
        <div className="navbar">
            <Live />
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Players">Players</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
            </ul>
        </div>
        
    )
}

export default Navigation;