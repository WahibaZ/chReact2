import React from 'react'
import Players from "./Players";
import Player from "./Player";

function PlayersList() {
  return (
    <div>
        <div className="d-flex  justify-content-center">
        {
            Players.map((player,index) => ( <Player key={index}{...player} />))
        } 
        </div>      
    </div>
  )
}

export default PlayersList