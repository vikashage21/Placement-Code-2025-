import React, { useState } from 'react';
import Icon from './components/icon';
import { ToastContainer, toast } from 'react-toastify';
import { Card, CardBody, Container, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const itemArray = new Array(9).fill('empty');

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState('');
  const winSound = new Audio('/sounds/badge-coin-win-14675.mp3');
  const clickSound = new Audio('/sounds/mouse-click-331781.mp3');
  const reloadGame = () => {
    setIsCross(false);
    setWinMessage('');
    itemArray.fill('empty', 0, 9);
  };

  const checkIsWinner = () => {
    if (itemArray[0] === itemArray[1] && itemArray[0] === itemArray[2] && itemArray[0] !== 'empty') {
      setWinMessage(`${itemArray[0]} wins`);
      winSound.play()
    } else if (itemArray[3] !== 'empty' && itemArray[3] === itemArray[4] && itemArray[3] === itemArray[5]) {
      setWinMessage(`${itemArray[3]} wins`);
      winSound.play()
    } else if (itemArray[6] !== 'empty' && itemArray[6] === itemArray[7] && itemArray[6] === itemArray[8]) {
      setWinMessage(`${itemArray[6]} wins`);
      winSound.play()
    } else if (itemArray[0] !== 'empty' && itemArray[0] === itemArray[3] && itemArray[0] === itemArray[6]) {
      setWinMessage(`${itemArray[0]} wins`);
      winSound.play()
    } else if (itemArray[1] !== 'empty' && itemArray[1] === itemArray[4] && itemArray[1] === itemArray[7]) {
      setWinMessage(`${itemArray[1]} wins`);
    } else if (itemArray[2] !== 'empty' && itemArray[2] === itemArray[5] && itemArray[2] === itemArray[8]) {
      setWinMessage(`${itemArray[2]} wins`);
      winSound.play()
    } else if (itemArray[0] !== 'empty' && itemArray[0] === itemArray[4] && itemArray[0] === itemArray[8]) {
      setWinMessage(`${itemArray[0]} wins`);
      winSound.play()
    } else if (itemArray[2] !== 'empty' && itemArray[2] === itemArray[4] && itemArray[2] === itemArray[6]) {
      setWinMessage(`${itemArray[2]} wins`);
    } else if (!itemArray.includes('empty')) {
      setWinMessage("It's a draw");
    } else {
      setWinMessage('');
    }
  };

  // const ChangeItem = (itemNumber) => {
  //   clickSound.play();
  //   if (winMessage) {
  //     return toast(winMessage, { type: 'success' });
  //   }

  //   if (itemArray[itemNumber] === 'empty') {
  //     itemArray[itemNumber] = isCross ? 'cross' : 'circle';
  //     setIsCross(!isCross);
  //   } else {
  //     return toast('Already filled', { type: 'error' });
  //   }

  //   checkIsWinner();
  // };

  const ChangeItem = (itemNumber) => {
  if (winMessage) {
    return toast(winMessage, { type: 'success' });
  }

  if (itemArray[itemNumber] === 'empty') {
    itemArray[itemNumber] = isCross ? 'cross' : 'circle';
    clickSound.play();
    setIsCross(!isCross);
    checkIsWinner();

    // If AI's turn (cross), let AI play next
    if (!isCross) {
      setTimeout(() => {
        aiMove();
      }, 500); // delay for realism
    }
  } else {
    return toast('Already filled', { type: 'error' });
  }
};

// AI Move Logic
const aiMove = () => {
  if (winMessage) return;

  const emptyIndices = itemArray
    .map((item, index) => (item === 'empty' ? index : null))
    .filter(index => index !== null);

  if (emptyIndices.length === 0) return;

  const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
  itemArray[randomIndex] = 'cross';
  clickSound.play();
  setIsCross(false);
  checkIsWinner();
};

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-primary text-uppercase text-center">{winMessage}</h1>
              <Button variant="success" className="w-100" onClick={reloadGame}>
                Reload the game
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-warning text-uppercase">
              {isCross ? 'Cross' : 'Circle'} turns
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card key={index} onClick={() => ChangeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
