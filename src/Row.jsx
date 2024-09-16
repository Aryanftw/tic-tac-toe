import React, { useState } from 'react';
import Square from './Square';

export default function Row() {
  const [state, setState] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);

  const handleClick = (index) => {
    const copyState = [...state];
    if (copyState[index] || checkWinner()) return;
    copyState[index] = turn ? 'X' : 'O';
    setState(copyState);
    setTurn(!turn);
  };

  const checkWinner = () => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  return (
    <>
      {isWinner ? (
        <>{isWinner} won the game ! <button onClick = {() => {
          setState(Array(9).fill(null));
        }}>Play Again</button></>
      ) : (
        <>
          <div className='row-container'>
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className='row-container'>
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className='row-container'>
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </>
  );
}
