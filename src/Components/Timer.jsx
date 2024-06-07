import React, { useState,useRef } from "react";
import "./Timer.css";

export default function Timer() {
  const [time, setTime] = useState("");
  const [displayTime, setDisplayTime] = useState(null);
  const stop = useRef(null);

  function handleInput(event) {
    setTime(event.target.value);
  }

  function handleSet() {
    setDisplayTime(time);
  }

    const handleStart = () => {
      stop.current = setInterval(() => {
        setDisplayTime((prev) => prev - 1);
      }, 1000);
    };

    const handleStop = () => {
      clearInterval(stop.current);
    };

    const handleReset = () => {
      setDisplayTime(null)
      setTime("");
    }

  return (
    <>
      <div className="app-container">
        <div className="stop-watch-container">
          <h1 className="heading">Countdown Timer</h1>
          <div className="stopwatch-card">
            <div className="stopwatch-card-header">
              <div className="timer-top">
                <p className="timer-heading">Timer</p>
                <div className="input-time">
                  <input
                    type="number"
                    className="time"
                    placeholder="Enter the time in seconds... "
                    value={time}
                    onChange={handleInput}
                  />
                  <button className="set-button button" onClick={handleSet}>
                    Set
                  </button>
                </div>
              </div>
            </div>
            <h1 className="time-display">
              {(displayTime>=0 && displayTime!=null) ? `${displayTime} s` : ""}
            </h1>
            <div className="buttons-container">
              <button className="start-button button" onClick={handleStart}>
                Start
              </button>
              <button className="stop-button button" onClick={handleStop}>Stop</button>
              <button className="restart-button button" onClick={handleReset}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}