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
    <div className="text-center py-4 bg-neutral-900 h-screen text-neutral-200">
    <h1 className="text-6xl z-30 relative"><strong>The Horrible Horoscope</strong></h1>
    <div className="stars"></div>
    <div className="twinkling"></div>
    <ul className="flex flex-wrap gap-8 justify-center px-1 py-8 md:text-lg">
    <button id="Aries"       className="z-30 rounded-full bg-neutral-900 py-2 px-4 text-red-500" onClick={(e) => handleSignSelect(e)}>Aries</button>
    <button id="Taurus"      className="z-30 rounded-full bg-neutral-900 py-2 px-4 text-green-500 "onClick={(e) => handleSignSelect(e)}>Taurus</button>
    <button id="Gemini"      className="z-30 rounded-full bg-neutral-900 py-2 px-4 text-yellow-500 "onClick={(e) => handleSignSelect(e)}>Gemini</button>
    <button id="Cancer"      className="z-30 rounded-full bg-neutral-900 py-2 px-4 text-gray-300 "onClick={(e) => handleSignSelect(e)}>Cancer</button>
    <button id="Leo"         className="z-30 rounded-full bg-neutral-900 py-2 px-4 text-orange-500 "onClick={(e) => handleSignSelect(e)}>Leo</button>
    <button id="Virgo"       className="z-30 rounded-full bg-neutral-900 py-2 px-4 text-yellow-900 "onClick={(e) => handleSignSelect(e)}>Virgo</button>
    <button id="Libra"       className="z-30 rounded-full bg-neutral-900 py-2 px-4 text-pink-500 "onClick={(e) => handleSignSelect(e)}>Libra</button>
    <button id="Scorpio"     className="z-30 rounded-full bg-neutral-900 py-2 px-4 text-neutral-200 "onClick={(e) => handleSignSelect(e)}>Scorpio</button>
    <button id="Sagittarius" className="z-30 rounded-full bg-neutral-900 py-2 px-4 text-purple-500 "onClick={(e) => handleSignSelect(e)}>Sagittarius</button>
    <button id="Capricorn"   className="z-30 rounded-full bg-neutral-900 py-2 px-4 text-gray-500 "onClick={(e) => handleSignSelect(e)}>Capricorn</button>
    <button id="Aquarius"    className="z-30 rounded-full bg-neutral-900 py-2 px-4 text-blue-500 "onClick={(e) => handleSignSelect(e)}>Aquarius</button>
    <button id="Pisces"      className="z-30 rounded-full bg-neutral-900 py-2 px-4 text-green-200 "onClick={(e) => handleSignSelect(e)}>Pisces</button>
    </ul>
    {sign ?
    <div className="fade-in-slow relative z-30">
    <h2 className="p-1 text-xl md:text-4xl">Daily Horrible Horoscope for {sign}</h2>
    <p className="p-1 py-8 md:text-lg">{sign} horoscope</p>
    </div> 
    : <h2 className="p-1 text-xl md:text-4xl relative z-30">Select your sign from the list above.</h2>}
    <footer className="absolute bottom-0">Github link</footer>
    </div>
  );
}

export default App;
