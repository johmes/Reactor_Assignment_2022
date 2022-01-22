import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Profile from "../Profile";
import axios from "axios";
import LoadingIcon from "../components/LoadingIcon";

// Gets parameter user from useParams() and returns a Profile
// element of the desired user. If pathname does not contain any usernames,
// function will return list of all players.
export default function Players() {
    const [history, setHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const { user } = useParams();

    const fetchData = () => {
        axios.get('../rps/history')
            .then((response) => {
                const data = response.data.data.sort((a, b) => {
                    return new Date(b.t) - new Date(a.t);
                });
                setIsLoading(false);
                setHistory(data);
            })
            .catch((error) => {
                setIsLoading(false);
                setIsError(true);
                console.error(error);

            });
    };

    useEffect(() => {
        fetchData();
        return () => {
            setHistory([]);
            setIsError(false);
            setIsLoading(false);

        };
    }, []);

    function getPlayers() {
        let list = [];
        history.forEach(match => {
            list.push(match.playerB.name);
            list.push(match.playerA.name);
        });
        list = Array.from(new Set(list));

        return list;
    }

    const players = getPlayers();


    if (isLoading) {
        return <LoadingIcon />;
    }

    if (window.location.pathname === '/Players') {
        return (
            <div>
                <center><h1>Player List ({players.length})</h1></center>
                {isError && <center><p className="ListEndText error">Couldn't load content...</p></center>}
                <ul>
                    {players && players.map((item, index) => <li key={index}><Link to={`./${item}`}>{item}</Link></li>)}
                </ul>
            </div>
        )

    } else {
        return (
            <Profile username={user} />
        )
    }

}