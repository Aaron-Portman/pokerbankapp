import React, {useState, useEffect} from "react";
import "./GamesList.css"
import GameCard from "./GameCard";
import { Loader } from "@aws-amplify/ui-react";

const GamesList = () => {

    const [games, setGames] = useState({});
    const [loading, setLoading] = useState(false);

    // const getRecentGames = async () => {
    //     //fetch most recent # of games from DB
    //     const mockData = [{
    //         gameId: 1,
    //         numPlayers: 8,
    //         settings : {
    //             stake: "25/50",
    //             straddle: true,
    //         },
    //         players: {
    //             "Aaron Portman": {
    //                 venmo: "@aaronportman29",
    //             },
    //             "Ryan Xu": {
    //                 venmo: "@ryxu",
    //             },
    //              "Max Chang": {
    //                 venmo: "@Maxfieldchange",
    //             }
    //         },
    //         nets: {
                
    //         }

    //     }];
    //     return mockData;
    // }

    // useEffect(() => { 
    //     setLoading(true)
    //     setGames(getRecentGames)
    // },[])

    useEffect(() => {
        setLoading(false)
    },[games])
    return (
        <div className="games-list-wrapper">
            <div className="games-list-title">Recent Games</div>
            <div className="games-list-table">

            {loading? <Loader/>: 
                // games?.map((game) => {
                //     <GameCard game={game}/>
                // })
                <span className="test"></span>
            }
            </div>
        </div>
    )
}

export default GamesList;