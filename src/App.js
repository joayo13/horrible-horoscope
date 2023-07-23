import { useState } from "react";
import './animations.css'
import githubMark from './github-mark-white.png'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACnLM3Ha4CZZ8GGsFPh2iTOKQRZ-Kwyn0",
  authDomain: "horrible-horoscope.firebaseapp.com",
  projectId: "horrible-horoscope",
  storageBucket: "horrible-horoscope.appspot.com",
  messagingSenderId: "525137369496",
  appId: "1:525137369496:web:c87998b71ce201101ef3ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


function App() {
  const [sign, setSign] = useState(undefined)
  const [newSignDetected, setNewSignDetected] = useState(false)
  const [horoscope, setHoroscope] = useState(undefined)
  const [color, setColor] = useState(false)
  async function handleSignSelect(e, color) {
    const signName = e.target.id
    let horoscopeArray = []
    console.log(signName)
    const querySnapshot = await getDocs(collection(db, "horoscopes"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    horoscopeArray.push(doc.data().horoscope);
});
    setHoroscope(horoscopeArray[Math.floor(Math.random() * horoscopeArray.length)])
    setSign(signName)
    setColor(`${color} bg-opacity-50 p-4`)
    setNewSignDetected(true)
    setTimeout(() => {
      setNewSignDetected(false)
    }, 500)
  }
  return (
    <div className="text-center py-4 text-neutral-200">
    <h1 className="text-6xl z-30 relative"><strong>The Horrible Horoscope</strong></h1>
    <div className="stars"></div>
    <div className="twinkling"></div>
    <ul className="flex flex-wrap gap-8 justify-center px-1 py-8 md:text-lg font-bold">
    <button id="Aries"       className="z-30 border-2 rounded-full py-2 px-4 border-red-500 text-red-500"  onClick={(e) => handleSignSelect(e, 'bg-red-500')}>Aries</button>
    <button id="Taurus"      className="z-30 border-2 rounded-full py-2 px-4 border-green-500 text-green-500 "onClick={(e) => handleSignSelect(e, 'bg-green-500')}>Taurus</button>
    <button id="Gemini"      className="z-30 border-2 rounded-full py-2 px-4 border-yellow-500 text-yellow-500 "onClick={(e) => handleSignSelect(e, 'bg-yellow-500')}>Gemini</button>
    <button id="Cancer"      className="z-30 border-2 rounded-full py-2 px-4 border-gray-200 text-gray-200"onClick={(e) => handleSignSelect(e, 'bg-gray-200')}>Cancer</button>
    <button id="Leo"         className="z-30 border-2 rounded-full py-2 px-4 border-orange-500 text-orange-500 "onClick={(e) => handleSignSelect(e, 'bg-orange-500')}>Leo</button>
    <button id="Virgo"       className="z-30 border-2 rounded-full py-2 px-4 border-yellow-800 text-yellow-800 "onClick={(e) => handleSignSelect(e, 'bg-yellow-800')}>Virgo</button>
    <button id="Libra"       className="z-30 border-2 rounded-full py-2 px-4 border-pink-500 text-pink-500 "onClick={(e) => handleSignSelect(e, 'bg-pink-500')}>Libra</button>
    <button id="Scorpio"     className="z-30 border-2 rounded-full py-2 px-4 border-gray-200 text-gray-200"onClick={(e) => handleSignSelect(e, 'bg-gray-200')}>Scorpio</button>
    <button id="Sagittarius" className="z-30 border-2 rounded-full py-2 px-4 border-purple-500 text-purple-500 "onClick={(e) => handleSignSelect(e, 'bg-purple-500')}>Sagittarius</button>
    <button id="Capricorn"   className="z-30 border-2 rounded-full py-2 px-4 border-gray-400 text-gray-400 "onClick={(e) => handleSignSelect(e, 'bg-gray-400')}>Capricorn</button>
    <button id="Aquarius"    className="z-30 border-2 rounded-full py-2 px-4 border-blue-500 text-blue-500 "onClick={(e) => handleSignSelect(e, 'bg-blue-500')}>Aquarius</button>
    <button id="Pisces"      className="z-30 border-2 rounded-full py-2 px-4 border-green-300 text-green-300"onClick={(e) => handleSignSelect(e, 'bg-green-300')}>Pisces</button>
    </ul>
    {sign ?
    <div className={newSignDetected ? "fade-in-slow relative z-30" : "relative z-30"}>
    <div className={color}>
    <h2 className="p-1 text-xl md:text-4xl">Daily Horrible Horoscope for {sign}:</h2>
    <p className="p-1 py-8 md:text-lg">Today {sign} {horoscope}</p>
    <p>Want to contribute to the project? <a className="underline" href='/'>Write some horrible horoscopes</a> of your own to be added to the mix.</p>
    </div> 
    </div>
    : <h2 className="p-1 text-xl md:text-4xl relative z-30">Select your sign from the list above.</h2>}
    
    <a href="https://github.com/joayo13/horrible-horoscope"><img style={horoscope ? {display:"none"} : null} className="absolute bottom-2 left-2 w-6 h-6" alt='github logo' src={githubMark}></img></a>
    <footer className="absolute bottom-2 overflow-hidden left-10">
    </footer>
    </div>
  );
}

export default App;
