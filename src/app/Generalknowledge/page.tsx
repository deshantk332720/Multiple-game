
"use client"
import { useState } from 'react';
import Link from 'next/link';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2, 
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: 1,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: 1,
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
    correct: 2,
  },
  
];

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (index:any) => {
    setSelectedAnswer(index);
    setIsAnswered(true);
    if (index === questions[currentQuestionIndex].correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResult(true); 
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 className='text-3xl'>Multiple Choice Quiz Game</h1>

      {!showResult ? (
        <>
          <p style={{ fontSize: '20px', marginBottom: '20px' }}>
            <strong>Question {currentQuestionIndex + 1}:</strong> {currentQuestion.question}
          </p>
          <div>
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                style={{
                  margin: '10px',
                  padding: '10px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  backgroundColor: selectedAnswer === index ? (index === currentQuestion.correct ? '#4CAF50' : '#f44336') : '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                }}
                disabled={isAnswered} 
              >
                {option}
              </button>
            ))}
          </div>
          {isAnswered && (
            <div style={{ marginTop: '20px' }}>
              <p>{selectedAnswer === currentQuestion.correct ? "Correct!" : "Incorrect!"}</p>
              <button
                onClick={handleNextQuestion}
                style={{
                  padding: '10px',
                  backgroundColor: '#008CBA',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Next Question
              </button>
            </div>
          )}
        </>
      ) : (
        <div>
          <h2>Game Over!</h2>
          <p>Your Score: {score} / {questions.length}</p>
          <button
            onClick={() => {
              setScore(0);
              setCurrentQuestionIndex(0);
              setShowResult(false);
            }}
            style={{
              padding: '10px',
              backgroundColor: '#ff5733',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Play Again
          </button>
        </div>
      )}
     
       
       
    </div>
  );
}
