import { useState } from "react";


function App() {
  const [sign, setSign] = useState(undefined)
  return (
    <div className="text-center bg-red-700 h-screen text-white">
    <h1 className="text-6xl">The Horrible Horoscope</h1>
    <ul className="flex flex-wrap gap-8 justify-center px-1 py-8 md:text-lg underline">
    <button>Aries</button>
    <button>Taurus</button>
    <button>Gemini</button>
    <button>Cancer</button>
    <button>Leo</button>
    <button>Virgo</button>
    <button>Libra</button>
    <button>Scorpio</button>
    <button>Sagittarius</button>
    <button>Capricorn</button>
    <button>Aquarius</button>
    <button>Pisces</button>
    </ul>
    {sign ?
    <div>
    <h2 className="p-1 text-xl md:text-4xl">Daily Horrible Horoscope for {'Sagittarius'}</h2>
    <p className="p-1 py-8 md:text-lg">Example horoscope font</p>
    </div> 
    : <h2 className="p-1 text-xl md:text-4xl">Select your sign from the list above.<br></br>...Or don't. Nobody really cares.</h2>}
    <footer className="absolute bottom-0 p-1">Github link</footer>
    </div>
  );
}

export default App;
