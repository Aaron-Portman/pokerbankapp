import { Loader } from "@aws-amplify/ui-react";
import React, { useEffect, useState } from "react";
import "./DataInput.css"

const DataInput = ({numPlayers}) => {

    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(false);

    const calculateBank = async () => {
        let bank = {}
        players.forEach((player) => {
            let net = player["out"] - player["in"]
            bank[player.name] = net
        })
        console.log(bank)
        return true
    }
    const submitGame = async (event) => {
        calculateBank().then(() => {
            setLoading(false)
        });
    }

    useEffect(() => {
        console.log(players)
    },[players])
    const getInfo = Array.from({length: numPlayers}, (_, index) => {
        const handleName = async (event) => {
            const tempPlayers = [...players];
            tempPlayers[index] = { 
                ...tempPlayers[index],
                name: event.target.value
            }
           setPlayers(tempPlayers)
        }
        const handleBuyIn = async (event) => {
            const tempPlayers = [...players];
            tempPlayers[index] = { 
                ...tempPlayers[index],
                in: event.target.value
            }
            setPlayers(tempPlayers)
        }
        const handleBuyOut = async (event) => {
            const tempPlayers = [...players];
            tempPlayers[index] = { 
                ...tempPlayers[index],
                out: event.target.value
            }
            setPlayers(tempPlayers)
        }
        const handleVenmo = async (event) => {
            const tempPlayers = [...players];
            tempPlayers[index] = { 
                ...tempPlayers[index],
                venmo: event.target.value
            }
            setPlayers(tempPlayers)
        }
        return <>                
            <label className="inputs-titles">Enter Players Name</label>
            <input className="inputs-inputs" type="text" required onChange={handleName}></input>
            <label className="inputs-titles">Buy In</label>
            <input className="inputs-inputs" type="number" required onChange={handleBuyIn}></input>
            <label className="inputs-titles">Buy Out</label>
            <input className="inputs-inputs" type="number" required onChange={handleBuyOut}></input>
            <label className="inputs-titles">Venmo</label>
            <input className="inputs-inputs" type="text" required onChange={handleVenmo}></input>
            <br/>
        </>;
    });
    
    return (
        <>
        {loading ?  <Loader/> : 
        <>
        {getInfo}
        <input className="inputs-submit" type="submit" onClick={submitGame}value="Submit Game"/>
        </>      
        }   
        </>
    )
}
export default DataInput