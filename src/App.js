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
  async function handleSignSelect(e) {
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
    setNewSignDetected(true)
    setTimeout(() => {
      setNewSignDetected(false)
    }, 500)
  }
  return (
    <div className="text-center py-4 h-screen text-neutral-200">
    <h1 className="text-6xl z-30 relative"><strong>The Horrible Horoscope</strong></h1>
    <div className="stars"></div>
    <div className="twinkling"></div>
    <ul className="flex flex-wrap gap-8 justify-center px-1 py-8 md:text-lg font-bold">
    <button id="Aries"       className="text-black z-30 rounded-full py-2 px-4 bg-red-500" onClick={(e) => handleSignSelect(e)}>Aries</button>
    <button id="Taurus"      className="text-black z-30 rounded-full py-2 px-4 bg-green-500 "onClick={(e) => handleSignSelect(e)}>Taurus</button>
    <button id="Gemini"      className="text-black z-30 rounded-full py-2 px-4 bg-yellow-500 "onClick={(e) => handleSignSelect(e)}>Gemini</button>
    <button id="Cancer"      className="text-black z-30 rounded-full py-2 px-4 bg-gray-300"onClick={(e) => handleSignSelect(e)}>Cancer</button>
    <button id="Leo"         className="text-black z-30 rounded-full py-2 px-4 bg-orange-500 "onClick={(e) => handleSignSelect(e)}>Leo</button>
    <button id="Virgo"       className="text-black z-30 rounded-full py-2 px-4 bg-yellow-900 "onClick={(e) => handleSignSelect(e)}>Virgo</button>
    <button id="Libra"       className="text-black z-30 rounded-full py-2 px-4 bg-pink-500 "onClick={(e) => handleSignSelect(e)}>Libra</button>
    <button id="Scorpio"     className="text-black z-30 rounded-full py-2 px-4 bg-neutral-200"onClick={(e) => handleSignSelect(e)}>Scorpio</button>
    <button id="Sagittarius" className="text-black z-30 rounded-full py-2 px-4 bg-purple-500 "onClick={(e) => handleSignSelect(e)}>Sagittarius</button>
    <button id="Capricorn"   className="text-black z-30 rounded-full py-2 px-4 bg-gray-500 "onClick={(e) => handleSignSelect(e)}>Capricorn</button>
    <button id="Aquarius"    className="text-black z-30 rounded-full py-2 px-4 bg-blue-500 "onClick={(e) => handleSignSelect(e)}>Aquarius</button>
    <button id="Pisces"      className="text-black z-30 rounded-full py-2 px-4 bg-green-300"onClick={(e) => handleSignSelect(e)}>Pisces</button>
    </ul>
    {sign ?
    <div className={newSignDetected ? "fade-in-slow relative z-30" : "relative z-30"}>
    <h2 className="p-1 text-xl md:text-4xl">Daily Horrible Horoscope for {sign}</h2>
    <p className="p-1 py-8 md:text-lg">Today {sign} {horoscope}</p>
    <p>Want to contribute to the project? <a className="underline" href='/'>Write some horrible horoscopes</a> of your own to be added to the mix.</p>
    </div> 
    : <h2 className="p-1 text-xl md:text-4xl relative z-30">Select your sign from the list above.</h2>}
    
    <a href="https://github.com/joayo13/horrible-horoscope"><img className="absolute bottom-2 left-2 w-6 h-6" alt='github logo' src={githubMark}></img></a>
    <footer className="absolute bottom-2 overflow-hidden left-10">
    </footer>
    </div>
  );
}

export default App;
