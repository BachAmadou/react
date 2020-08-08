import React, {useState, useRef} from 'react';
import './App.css';

export default function App() {

  const [title, setTitle] = useState('LET THE COUNTDOWN BEGIN!');
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  // padStart: js function that adds a number to the beginning of another number
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, 0); 
  const seconds = (timeLeft - minutes * 60).toString().padStart(2, 0);
  const intervalRef = useRef(null);


  function startTimer() {
    if(intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft(timeLeft => {
        if(timeLeft >= 1) return timeLeft - 1;
        resetTimer();
        return 0;
      });
    }, 1000);
  }

  function stopTimer() {
    if(intervalRef.current === null) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle('KEEP IT UP!');
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle('READY TO GO ANOTHER ROUND');
    setTimeLeft(25 * 60);
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
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
