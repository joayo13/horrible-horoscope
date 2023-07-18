import { useState } from "react";
import './animations.css'

function App() {
  const [sign, setSign] = useState(undefined)
  function handleSignSelect(e) {
    const signName = e.target.id
    console.log(signName)
    setSign(signName)
  }
  return (
    <div className="text-center bg-neutral-900 h-screen text-white">
    <h1 className="text-6xl"><strong>The Horrible Horoscope</strong></h1>
    <ul className="flex flex-wrap gap-8 justify-center px-1 py-8 md:text-lg">
    <button id="Aries" className="text-red-500 underline" onClick={(e) => handleSignSelect(e)}>Aries</button>
    <button id="Taurus" className="text-green-500 underline"onClick={(e) => handleSignSelect(e)}>Taurus</button>
    <button id="Gemini" className="text-yellow-500 underline"onClick={(e) => handleSignSelect(e)}>Gemini</button>
    <button id="Cancer" className="text-gray-300 underline"onClick={(e) => handleSignSelect(e)}>Cancer</button>
    <button id="Leo" className="text-orange-500 underline"onClick={(e) => handleSignSelect(e)}>Leo</button>
    <button id="Virgo" className="text-yellow-900 underline"onClick={(e) => handleSignSelect(e)}>Virgo</button>
    <button id="Libra" className="text-pink-500 underline"onClick={(e) => handleSignSelect(e)}>Libra</button>
    <button id="Scorpio" className="white underline"onClick={(e) => handleSignSelect(e)}>Scorpio</button>
    <button id="Sagittarius" className="text-purple-500 underline"onClick={(e) => handleSignSelect(e)}>Sagittarius</button>
    <button id="Capricorn" className="text-gray-500 underline"onClick={(e) => handleSignSelect(e)}>Capricorn</button>
    <button id="Aquarius" className="text-blue-500 underline"onClick={(e) => handleSignSelect(e)}>Aquarius</button>
    <button id="Pisces" className="text-green-200 underline"onClick={(e) => handleSignSelect(e)}>Pisces</button>
    </ul>
    {sign ?
    <div className="fade-in-slow">
    <h2 className="p-1 text-xl md:text-4xl">Daily Horrible Horoscope for {sign}</h2>
    <p className="p-1 py-8 md:text-lg">Example horoscope font</p>
    </div> 
    : <h2 className="p-1 text-xl md:text-4xl">Select your sign from the list above.<br></br>...Or don't. Nobody really cares.</h2>}
    <footer className="absolute bottom-0 p-1">Github link</footer>
    </div>
  );
}

export default App;
