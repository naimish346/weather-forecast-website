export default function TimeAndLocation({ weather: { formattedLocalTime, name, country }, darkMode }) {
  return (
    <div className="text-center my-4">
      <p className={`text-base font-light tracking-wide ${darkMode ? 'text-emerald-100/90' : 'text-emerald-800'}`}>{formattedLocalTime}</p>
      <h2 className={`text-4xl font-extrabold tracking-tight mt-2 ${darkMode ? 'text-white drop-shadow-md' : 'text-emerald-900'}`}>{name}, {country}</h2>
    </div>
  );
}
