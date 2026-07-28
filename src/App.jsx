import { useEffect, useState } from 'react'
import Forecast from './components/Forecast'
import Inputs from './components/Inputs'
import TempAndDetails from './components/TempAndDetails'
import TimeAndLocation from './components/TimeAndLocation'
import TopButtons from './components/TopButtons'
import ThemeToggle from './components/ThemeToggle'
import getFormattedWeatherData from './services/weatherService'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const App = () => {
  const [query, setQuery] = useState({ q: "Mumbai" })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)
  const [darkMode, setDarkMode] = useState(true)

  const getWeather = async () => {
    const cityName = query.q ? query.q : 'current location';
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`);
    await getFormattedWeatherData({ ...query, units }).then((data) => {
      toast.success(`Fetch weather data for ${data.name}, ${data.country}`)
      setWeather(data);
    });
  };

  useEffect(() => { getWeather(); }, [query, units])

  return (
    <div className={`${darkMode ? 'bg-gradient-to-br from-[#0f172a] via-[#14532d] to-[#064e3b]' : 'bg-gradient-to-br from-[#ecfdf5] via-[#d1fae5] to-[#a7f3d0]'} min-h-screen transition-all duration-700`}>
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className={`text-3xl font-extrabold tracking-tight ${darkMode ? 'text-emerald-200 drop-shadow-lg' : 'text-emerald-800'}`}>🌿 Nature Weather</h1>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <TopButtons setQuery={setQuery} darkMode={darkMode} />
        <Inputs setQuery={setQuery} setUnits={setUnits} darkMode={darkMode} />
        {weather && (
          <>
            <TimeAndLocation weather={weather} darkMode={darkMode} />
            <TempAndDetails weather={weather} units={units} darkMode={darkMode} />
            <Forecast title="Today's Forecast" data={weather.hourly} darkMode={darkMode} />
            <Forecast title="Weekly Forecast" data={weather.daily} darkMode={darkMode} />
          </>
        )}
        <ToastContainer autoClose={2500} hideProgressBar={true} theme={darkMode ? 'dark' : 'light'} />
      </div>
    </div>
  )
}

export default App
