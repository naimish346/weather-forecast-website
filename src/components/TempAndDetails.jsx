import { FaThermometerEmpty, FaWind } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";

export default function TempAndDetails({ weather, units, darkMode }) {
  const {
    details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, visibility, uvIndex = 6
  } = weather;

  const cardsTop = [
    { Icon: FaThermometerEmpty, label: "Real Feel", value: `${feels_like?.toFixed()}°` },
    { Icon: BiSolidDropletHalf, label: "Humidity", value: `${humidity?.toFixed()}%` },
    { Icon: FaWind, label: "Wind", value: `${speed?.toFixed()} ${units === 'metric' ? 'km/h' : 'mph'}` },
  ];

  const cardsBottom = [
    { Icon: GiSunrise, label: "Sunrise", value: sunrise },
    { Icon: GiSunset, label: "Sunset", value: sunset },
    { Icon: MdKeyboardArrowUp, label: "High", value: `${temp_max?.toFixed()}°` },
    { Icon: MdKeyboardArrowDown, label: "Low", value: `${temp_min?.toFixed()}°` },
  ];

  return (
    <div className={`rounded-3xl p-6 shadow-2xl backdrop-blur-xl transition ${darkMode ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/10' : 'bg-gradient-to-br from-emerald-50/80 to-white border border-emerald-100'}`}>
      <div className="text-center font-medium text-sm uppercase tracking-wider mb-4 opacity-90">
        <span className={darkMode ? 'text-emerald-200' : 'text-emerald-700'}>{details}</span>
      </div>
      <div className="flex items-center justify-between">
        <img src={icon} alt="weather" className="w-24 drop-shadow-2xl animate-pulse" />
        <h3 className={`text-7xl font-extrabold tracking-tighter drop-shadow-sm ${darkMode ? 'text-white' : 'text-emerald-900'}`}>{`${temp?.toFixed()}°`}</h3>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-6">
        {cardsTop.map(({ Icon, label, value }) => (
          <div key={label} className={`rounded-2xl p-4 text-center shadow-md transition hover:-translate-y-1 ${darkMode ? 'bg-white/5 border border-white/10 text-white' : 'bg-white border border-emerald-100 text-emerald-800'}`}>
            <Icon size={24} className="mx-auto mb-2 text-amber-300" />
            <p className="text-xs font-semibold uppercase tracking-wide opacity-70">{label}</p>
            <p className="text-lg font-bold">{value}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 mt-4">
        {cardsBottom.map(({ Icon, label, value }) => (
          <div key={label} className={`flex-1 rounded-2xl p-3 shadow-md transition hover:-translate-y-0.5 ${darkMode ? 'bg-white/5 border border-white/10 text-white' : 'bg-white border border-emerald-100 text-emerald-800'}`}>
            <div className="flex items-center gap-2">
              <Icon size={22} className="text-amber-300" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide opacity-70">{label}</p>
                <p className="text-base font-bold">{value}</p>
              </div>
            </div>
          </div>
        ))}
        <div className={`flex-1 rounded-2xl p-3 shadow-md transition hover:-translate-y-0.5 ${darkMode ? 'bg-white/5 border border-white/10 text-white' : 'bg-white border border-emerald-100 text-emerald-800'}`}>
          <div className="flex items-center gap-2">
            <WiHumidity size={28} className="text-amber-300" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide opacity-70">UV Index</p>
              <p className="text-base font-bold">{uvIndex}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
