import React, { Component } from 'react';
import Results from './Results.jsx';

// Class for home page. Returns header for a list
// of all played matches and the list itself.
export default class Home extends Component {

    render() {
        return (
            <>
                <center>
                    <h2 className='ResultsHeader'>Match Results</h2>
                    <hr />
                </center>

                <Results />
            </>
        )
    }
}