import React from 'react';
import Dino from 'react-chrome-dino';

const DinoGame = () => {
  const handleEvent = (event) => {
    console.log('Game Event:', event);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Play the Dino Game!</h1>
      <Dino onEvent={handleEvent} />
    </div>
  );
};

export default DinoGame;
