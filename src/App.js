
import './App.css';
/* import Player from './Component/Player';

import Players from './Component/Players'; */
import PlayersList from './Component/PlayersList';


    const App = () => {
      return (
        /**.................sans utiliser le componemt playerlist.......... */
         <div className="App">
          {/*<div className="d-flex  justify-content-center">
            {Players.map((player, index) => (
              <Player
                key={index}
                name={player.name}
                team={player.team}
                nationality={player.nationality}
                num={player.num}
                age={player.age}
                imageURL={player.imageURL}
              />
            ))}
            </div>
            */}
          <h1>FIFA Player Cards</h1>
            <PlayersList/>

          
        </div> 
        
      );
    };
    
    export default App;
