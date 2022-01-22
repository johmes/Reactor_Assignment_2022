// Gets player A and B names and played hands as a parameters and 
// returns an object with keys name and outcome. Name refers to winners name 
// and hand to with what hand did the player win with.
export function getWinner(playerAname, playerBname, playerAplayed, playerBplayed) {
    const players = [
        {
            "name": playerAname,
            "hand": playerAplayed.trim()
        },
        {
            "name": playerBname,
            "hand": playerBplayed.trim()
        }
    ];

    if (players[0].hand === "PAPER") {
        if (players[1].hand === "ROCK") {
            return {
                name: players[0].name,
                outcome: "PAPER"
            };

        } else {
            if (players[1].hand === "SCISSORS") {
                return {
                    name: players[1].name,
                    outcome: "SCISSORS"
                };
            }

        }

    }

    if (players[0].hand === "SCISSORS") {
        if (players[1].hand === "ROCK") {
            return {
                name: players[1].name,
                outcome: "ROCK"
            };
        } else {
            if (players[1].hand === "PAPER") {
                return {
                    name: players[1].name,
                    outcome: "SCISSORS"
                };
            }
        }
    }

    if (players[0].hand === "ROCK") {
        if (players[1].hand === "SCISSORS") {
            return {
                name: players[1].name,
                outcome: "SCISSORS"
            };

        } else {
            if (players[1].hand === "PAPER") {
                return {
                    name: players[1].name,
                    outcome: "PAPER"
                };

            }
        }
    }

    if (players[0].hand === players[1].hand) {
        return {
            name: null,
            outcome: "DRAW"
        };

    }

}

export function calculateWinRatio(allGames, wins) {
    const ratio = allGames !== 0 ? wins / allGames : 0;
    return Math.round(ratio * 100) / 100;
}

export function getMostPlayedHand(games, username) {
    let hands = [];
    let mostFrequent = 1;
    let most = 0;
    let hand = "Undefined";

    games.forEach((match) => {
        if (match.playerA.name === username) {
            hands.push(match.playerA.played);
        } else if (match.playerB.name === username) {
            hands.push(match.playerB.played);
        }
    });
    // Nested for loop to find most used hand (rock, paper or scissors)
    for (let i = 0; i < hands.length; i++) {

        for (let j = i; j < hands.length; j++) {
            if (hands[j] === hands[i]) {
                most++;
            }

            if (mostFrequent < most) {
                mostFrequent = most;
                hand = hands[i];
            }

        }
        most = 0;
    }

    return {
        hand: hand,
        count: mostFrequent,
    };
}

export function countWins(username, all) {
    let wins = 0;

    all.forEach(match => {
        const winner = getWinner(
            match.playerA.name,
            match.playerB.name,
            match.playerA.played,
            match.playerB.played
        );
        if (winner.name === username) {
            wins += 1;

        }
    });

    return wins;

}

// Looping through all matches and adding games where 
// given username appears to a list named "all"
export function getAllPlayedGames(list, username) {
    let all = [];

    list.forEach(game => {
        if (game.playerA.name === username || game.playerB.name === username) {
            all.push(game);
        }
    });

    return all;
}