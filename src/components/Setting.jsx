 import React from 'react';

export const Setting= ({setPlayerXName,setPlayerOName, setStartGame}) => {
  return (
    <div className="setting">
    <h1>Enter Player Names</h1>
  
    <div className="inputdiv">
      <h3>X</h3>
      <input
        type="text"
        name="player1"
        onChange={(e) => setPlayerXName(e.target.value)}
      />
      
    </div>
    <div className="inputdiv">
      <h3>O</h3>
      <input
        type="text"
        name="player2"
        onChange={(e) => setPlayerOName(e.target.value)}
      />
    </div>
    <button class="button-1" role="button" className="startButton"
        onClick={() => {
          setStartGame(true);
        }}
      >
        Start
      </button>
  </div>
  )
};