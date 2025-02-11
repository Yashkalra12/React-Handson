import React, { useState } from 'react';
import './App.css';

// Helper function to determine if a number is prime
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// NumberBox Component
const NumberBox = ({ number }) => {
  let className = 'number-box';

  if (isPrime(number)) {
    className += ' prime';
  } else if (number % 2 === 0) {
    className += ' even';
  } else {
    className += ' odd';
  }

  return <div className={className}>{number}</div>;
};

// App Component
const App = () => {
  const numbers = Array.from({ length: 32 }, (_, i) => i); // Generates numbers from 0 to 31
  const [showExercise, setShowExercise] = useState(false);

  return (
    <div className="app">
      <h1>30 Days Of React</h1>
      <h2>Number Generator</h2>
      <div className="button-container">
        <button className="exercise-button" onClick={() => setShowExercise(!showExercise)}>
          {showExercise ? 'Back' : 'Exercise'}
        </button>
      </div>
      {showExercise ? (
        <div className="exercise-section">
          <h2>Exercise: Number Box</h2>
          <div className="number-grid">
            {numbers.map((number) => (
              <NumberBox key={number} number={number} />
            ))}
          </div>
        </div>
      ) : (
        <div className="intro">
          <p>Click the "Exercise" button to see the NumberBox examples.</p>
        </div>
      )}
    </div>
  );
};

export default App;
