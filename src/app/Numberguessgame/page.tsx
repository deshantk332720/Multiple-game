"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {

  const [number, setNumber] = useState(generateRandomNumber()); 
  const [guess, setGuess] = useState(''); 
  const [message, setMessage] = useState(''); 
  const [attempts, setAttempts] = useState(0); 

  
  function generateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
  }

 
  const handleGuess = (e:any) => {
    e.preventDefault();
    
    
    const userGuess = parseInt(guess);

    
    if (isNaN(userGuess) || userGuess < 0 || userGuess > 5 ) {
      setMessage('Please enter a valid number between 1 and 5.');
      return;
    }

  
    setAttempts(attempts + 1);

    
    if (userGuess < number) {
      setMessage('Too low! Try again.');
    } else if (userGuess > number) {
      setMessage('Too high! Try again.');
    } else {
      setMessage(`Congratulations! You guessed the number in ${attempts + 1} attempts.`);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold mb-6 text-center text-yellow-300">Number Guessing Game</h1>
        
        <form onSubmit={handleGuess} className="space-y-4">
          <div>
            <label htmlFor="guess" className="block text-lg">Enter your guess (1-5):</label>
            <input
              type="number"
              id="guess"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Guess
          </button>
        </form>

        {message && <p className="mt-4 text-center text-xl text-blue-500">{message}</p>}

        <p className="mt-6 text-center text-black">
          {attempts > 0 ? `Attempts: ${attempts}` : "Start guessing!"}
        </p>
      </div>
      
      
    </div>
    
  );
}
