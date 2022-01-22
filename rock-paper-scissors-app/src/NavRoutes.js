import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './About'
import Home from './Home'
import Profile from './Profile';
import NoResult from './NoResult'
import Navigation from './components/Navigation/Navigation';
import Players from './Players';


export default class NavRoutes extends Component {
    render() {
        return (
            <Router >
                <Navigation />
                <Routes>
                    <Route
                        exact path='/'
                        element={<Home />}
                    />
                    <Route
                        path='/About'
                        element={<About />}
                    />

                    <Route path='/Players' element={<Players />}>
                        <Route path={'/Players/:user'} element={<Profile />} />
                    </Route>
                    <Route
                        path="*"
                        element={<NoResult />}
                    />
                </Routes>
            </Router>

        )
    }

}