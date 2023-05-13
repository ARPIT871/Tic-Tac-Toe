import React from 'react';

export const Square = ({ value, onClick}) => {
  const style = {
    color: value === 'X' ? '#ff6fa4' : '#73e5ff'
  };
  return (
    <button className="square" onClick={onClick} style={style}>
      {value}
    </button>
  );
};
