import React, { useState } from 'react';
import './App.css';

function App() {

  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const handleBalls = () => {
    if (balls > 2) {
      setBalls(0)
    } else {
      setBalls(balls + 1)
    }
  }

  const handleStrikes = () => {
    if (strikes > 1) {
      setStrikes(0)
    } else {
      setStrikes(strikes + 1)
    }
  }

  const handleFouls = () => {
    if (strikes > 1) {
      setStrikes(2)
    } else {
      setStrikes(strikes + 1)
    }
  }

  const handleHits = () => {
    setBalls(0)
    setStrikes(0)
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="score_count">
          <div>
            <h2 className="balls">Balls</h2>
            <div>{balls}</div>
          </div>

          <div>
            <h2 className="strikes">Srikes</h2>
            <div>{strikes}</div>
          </div>
        </div>

        <div className="bottom_row">
        </div>
      </section>
      <section className="buttons">
        <div>
          <button onClick={handleBalls} className="handle_balls">Ball</button>

          <button onClick={handleStrikes} className="handle_strikes">Strike</button>

          <button onClick={handleFouls} className="handle_fouls">Foul</button>

          <button onClick={handleHits} className="handle_hits">Hit</button>
        </div>

      </section>
    </div>
  );
}
export default App;