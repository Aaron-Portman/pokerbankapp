import React, { useEffect, useState } from "react";

const GameCard = () => {
    const [playersList, setPlayersList] = useState([]);
    const [gameId, setGameId] = useState();
    

    const getGamePlayers = async (gameId) => {
        //query db for player data for given game
    }

    useEffect(() => {
        
        setPlayersList(getGamePlayers(gameId))
    },[])
    return (
        <div className="wrapper">
            <div className="recap">
                <div className="game-settings">

                </div>
                <div className="winner">

                </div>
                <div className="loser">

                </div>
            </div>
            <div className="players-list">
                <table className="player-table">
                    <th className="name"></th>
                    <th className="in"></th>
                    <th className="out"></th>
                    <th className="net"></th>
                    <th className="num-rebuys"></th>
                    {playersList?.map((player) => {
                        <>
                        <tr>{player.name}</tr>
                        <tr>{player.in}</tr>
                        <tr>{player.out}</tr>
                        <tr>{player.net}</tr>
                        <tr>{player.numRebuys}</tr>
                        </>
                    })}
                </table>
            </div>
        </div>

        
    )
}

export default GameCard;