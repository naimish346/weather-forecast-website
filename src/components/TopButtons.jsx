export default function TopButtons({ setQuery, darkMode }) {
  const cities = [
    { id: 1, name: 'Mumbai' },
    { id: 2, name: 'Paris' },
    { id: 3, name: 'Berlin' },
    { id: 4, name: 'Sydney' },
    { id: 5, name: 'Tokyo' },
    { id: 6, name: 'London' },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {cities.map(city => (
        <button
          key={city.id}
          onClick={() => setQuery({ q: city.name })}
          className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-md transition hover:-translate-y-0.5 ${darkMode ? 'bg-white/10 border border-white/10 text-emerald-100 hover:bg-white/20' : 'bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100'}`}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
}
