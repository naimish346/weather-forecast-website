import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

export default function Inputs({ setQuery, setUnits, darkMode }) {
  const [city, setCity] = useState("")
  const handleSearchClick = () => { if (city !== '') setQuery({ q: city }) };
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords
        setQuery({ lat: latitude, lon: longitude })
      })
    }
  }
  return (
    <div className="flex flex-wrap justify-center gap-4 my-6">
      <div className={`flex w-full md:w-2/3 items-center gap-3 p-2 rounded-2xl shadow-lg backdrop-blur-md transition ${darkMode ? 'bg-white/10 border border-white/10' : 'bg-white/60 border border-emerald-200'}`}>
        <input value={city} onChange={(e) => setCity(e.currentTarget.value)} type="text" placeholder="Search city..." className={`text-lg w-full bg-transparent outline-none ${darkMode ? 'text-white placeholder:text-emerald-200' : 'text-emerald-900 placeholder:text-emerald-500'}`} />
        <BiSearch size={28} className={`${darkMode ? 'text-emerald-200' : 'text-emerald-600'} cursor-pointer hover:scale-110`} onClick={handleSearchClick} />
        <BiCurrentLocation size={28} className={`${darkMode ? 'text-emerald-200' : 'text-emerald-600'} cursor-pointer hover:scale-110`} onClick={handleLocationClick} />
      </div>
      <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl shadow-lg backdrop-blur-md transition ${darkMode ? 'bg-white/10 border border-white/10' : 'bg-white/60 border border-emerald-200'}`}>
        <button className={`font-semibold text-lg transition hover:scale-110 ${darkMode ? 'text-emerald-100' : 'text-emerald-700'}`} onClick={() => setUnits('metric')}>°C</button>
        <span className={`${darkMode ? 'text-white/40' : 'text-emerald-300'}`}>|</span>
        <button className={`font-semibold text-lg transition hover:scale-110 ${darkMode ? 'text-emerald-100' : 'text-emerald-700'}`} onClick={() => setUnits('imperial')}>°F</button>
      </div>
    </div>
  );
}
