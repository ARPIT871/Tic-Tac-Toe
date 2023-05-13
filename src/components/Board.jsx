import React, { useState } from 'react';
import { Square } from './square';
import { Setting } from './Setting';

export const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentPlayerX, setCurrentPlayerX] = useState(true);
  const [playerXName, setPlayerXName] = useState('Player X');
  const [playerOName, setPlayerOName] = useState('Player O');
  const [startGame, setStartGame] = useState(false);

  const handleClick = (index) => {
    const copyState = [...state];
    if (copyState[index] === 'X' || copyState[index] === 'O') {
      setCurrentPlayerX(currentPlayerX);
    } else {
      copyState[index] = currentPlayerX ? 'X' : 'O';
      setState(copyState);
      setCurrentPlayerX(!currentPlayerX);
    }
    checkWinner(copyState); // Call checkWinner() whenever the board state changes
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
    setStartGame(false);
  };

  const checkWinner = () => {
    // Pass in the current board state as a parameter
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let validatingWinner of winner) {
      const [a, b, c] = validatingWinner;
      if (state[a] === state[b] && state[b] === state[c] && state[a] !== null) {
        if (a === 'X') return `${playerXName}-Wins`;
        else return `${playerOName}-wins`;
      }
    }
    if (state.every((value) => value !== null)) {
      return 'The match is a tie';
    }
    return false;
  };

  const isWinner = checkWinner();

  // rendering starts from here

  return (
    <>
      {/* if startGame is true means the game is start so will display name of person else setting will be displayed */}
      {startGame ? (
        <div className="displayName">
          {isWinner ? (
            <h1>{isWinner.toUpperCase()}-Wins</h1>
          ) : currentPlayerX ? (
            <h1>{playerXName.toUpperCase()}-Turns[X]</h1>
          ) : (
            <h1>{playerOName.toUpperCase()}-Turns[O]</h1>
          )}
        </div>
      ) : (
        <div className="displayName">
          <h1>SETTTING</h1>
        </div>
      )}

      {/* BOard start from here */}
      <div className="board">
        {/* iswinnner is true so we have to display the name of the winner and reset button
        else we will show the squares where user will provide input */}
        {isWinner ? (
          <h1>
            {isWinner}
            <button style={{ marginLeft: '10px' }} onClick={handleReset}>
              Play Again
            </button>
          </h1>
        ) : // startGame define that user is on setting page or not if user provide the name and complite the details then click on start then startGame will become true and it will display the board else it will show the setting page
        startGame ? (
          <>
            {state.map((square, index) => {
              return (
                <Square
                  key={index}
                  value={state[index]}
                  onClick={() => handleClick(index)}
                  color={currentPlayerX ? 'red' : 'blue'}
                />
              );
            })}
          </>
        ) : (
          // settings Page
          <Setting
            setPlayerXName={setPlayerXName}
            setPlayerOName={setPlayerOName}
            setStartGame={setStartGame}
          />
        )}
      </div>
    </>
  );
};
