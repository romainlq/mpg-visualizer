import React, { Component } from 'react';

import Player from './Player';

class PlayerList extends Component {



    renderPlayer = (player) => {
        return (
            <Player data={player} />
        );
    }



    render() {
        // const { list } = this.props;

        const list = [
            {
                "id": "player_6744",
                "firstname": "Lee",
                "lastname": "Grant",
                "position": 1,
                "ultraPosition": 10,
                "teamId": 1,
                "quotation": 1,
                "club": "Man. United",
                "stats": {
                    "avgRate": "-",
                    "sumGoals": 0,
                    "currentChampionship": 2,
                    "percentageStarter": null
                }
            },
            {
                "id": "player_7645",
                "firstname": "Phil",
                "lastname": "Jagielka",
                "position": 2,
                "ultraPosition": 20,
                "teamId": 49,
                "quotation": 8,
                "club": "Sheffield",
                "stats": {
                    "avgRate": "-",
                    "sumGoals": 0,
                    "currentChampionship": 2,
                    "percentageStarter": null
                }
            },
        ]


        return (
            list.map((player) => {
                return this.renderPlayer(player)
            })
        )
    }

}

export default PlayerList;