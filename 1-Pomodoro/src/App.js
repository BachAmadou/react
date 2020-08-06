import React, {useState} from 'react';
import './App.css';

export default function App() {

  const [title, setTitle] = useState('LET THE COUNTDOWN BEGIN!');
  const [timeLeft, setTimeLeft] = useState(10);
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, 0); 
  const seconds = (timeLeft - minutes * 60).toString().padStart(2, 0);
  // padStart: js function that adds a number to the beginning of another number


  function startTimer() {
    setInterval(() => {
      setTimeLeft(timeLeft => {
        if(timeLeft >= 1) return timeLeft - 1;
        return 0;
      });
    }, 1000);
  }

  return (
    <div className="app">
      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        <button onClick={startTimer}>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}
