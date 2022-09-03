import React, {useState, useEffect} from "react";
import "./Generator.css"
import DataInput from "./DataInput";

const Generator = () => {

    const [numPlayers, setNumPlayers] = useState(0)
    const [allowEnterData, setAllowEnterData] = useState(false);


    const allowDataEntry = () => {
        if(numPlayers > 0){
            setAllowEnterData(true)
        } else {
            alert("Enter Valid Number of Players")
        }
    }
    const handleChange = (event) => {
        setNumPlayers(event.target.value)
    }

    return (
        <div className="generator-wrapper">
            <div className="generator-title">Enter Game Information Below</div>
            {!allowEnterData ?  
            <div className="player-num inputs">
                <label className="inputs-titles">Enter # of Players</label>
                <input className="inputs-inputs" type="number" placeholder="#" onChange={handleChange} required></input>
                <input className="inputs-submit" type="submit" value="Enter" onClick={allowDataEntry}/>
            </div>
            :
                <>
                <div className="game-data-inputs">
                    <DataInput numPlayers={numPlayers}/>
                </div>
                <div className="edit-player-num inputs">
                    <label className="inputs-titles">Wrong # of Players?</label>
                    <input className="wrong-num" type="submit" value="Enter" onClick={() => setAllowEnterData(false)}/>
                </div>
                </>
            }
        </div>
    )
}
export default Generator;