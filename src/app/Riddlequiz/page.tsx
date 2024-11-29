
"use client"
import Link from 'next/link';
import { useState } from 'react';

const riddles = [
  {
    question: "What has keys but can't open locks?",
    answers: ["A piano", "A car", "A lock", "A computer"],
    correct: 0, 
  },
  {
    question: "The more you take, the more you leave behind. What am I?",
    answers: ["Footsteps", "Time", "Love", "Money"],
    correct: 0,
  },
  {
    question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
    answers: ["The letter M", "A second", "A blink", "The sun"],
    correct: 0,
  },
  {
    question: "I’m tall when I’m young, and I’m short when I’m old. What am I?",
    answers: ["A candle", "A tree", "A pencil", "A mountain"],
    correct: 0,
  },
  
];

export default function Home() {
  const [currentRiddleIndex, setCurrentRiddleIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (i:any) => {
    if (i === riddles[currentRiddleIndex].correct) {
      setScore(score + 1);
    }

    if (currentRiddleIndex < riddles.length - 1) {
      setCurrentRiddleIndex(currentRiddleIndex + 1);
    } else {
      setShowResult(true); 
    }
  };

  const resetGame = () => {
    setCurrentRiddleIndex(0);
    setScore(0);
    setShowResult(false);
  };

  const currentRiddle = riddles[currentRiddleIndex];

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 className='text-4xl'>Riddle Quiz Game</h1>

      {!showResult ? (
        <>
          <p style={{ fontSize: '20px', marginBottom: '20px' }}>
            {currentRiddle.question}
          </p>
          <div>
            {currentRiddle.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                style={{
                  margin: '10px',
                  padding: '10px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                }}
              >
                {answer}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div>
          <h2>Game Over!</h2>
          <p>Your Score: {score} / {riddles.length}</p>
          <button onClick={resetGame} style={{ padding: '10px', backgroundColor: '#ff5733', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Play Again
          </button>
        </div>
      )}
      
    </div>
  );
}
