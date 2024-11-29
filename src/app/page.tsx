import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-yellow-200 text-white">
      {/* Header */}
      <header className="py-8 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to GameHub</h1>
        <p className="text-xl">Choose your favorite game and have fun!</p>
      </header>

      {/* Main Game Cards Section */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Game Card 1 */}
        <div className="bg-gray-800 rounded-lg shadow-xl hover:scale-105 transition-transform">
          <img
            className="w-full h-48 object-cover rounded-t-lg"
            src="dk.jpg"
            alt="Game 1"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-black"> Number Guess Game</h2>
            
            <Link href="/Numberguessgame">
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full w-full">
                PlayGame
              </button>
            </Link>
          </div>
        </div>

        {/* Game Card 2 */}
        <div className="bg-gray-800 rounded-lg shadow-xl hover:scale-105 transition-transform">
          <img
            className="w-full h-48 object-cover rounded-t-lg"
            src="dkj.png"
            alt="Game 2"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-black"> Riddle Game</h2>
            
            <Link href="/Riddlequiz">
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full w-full">
                Play Game 
              </button>
            </Link>
          </div>
        </div>

        {/* Game Card 3 */}
        <div className="bg-gray-800 rounded-lg shadow-xl hover:scale-105 transition-transform">
          <img
            className="w-full h-48 object-cover rounded-t-lg"
            src="dkl.png"
            alt="Game 3"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-black"> General Knowledge Quiz</h2>
            
            <Link href="/Generalknowledge">
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full w-full">
                Play Game 
              </button>
            </Link>
          </div>
        </div>
      </div>
      
       
     
</div>
  );
}

