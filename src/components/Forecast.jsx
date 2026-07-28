export default function Forecast({ title, data, darkMode }) {
  return (
    <div className="my-8">
      <h3 className={`text-xl font-extrabold mb-3 tracking-tight ${darkMode ? 'text-emerald-200' : 'text-emerald-800'}`}>{title}</h3>
      <div className={`rounded-3xl p-6 shadow-xl backdrop-blur-xl border transition ${darkMode ? 'bg-gradient-to-r from-white/10 to-white/5 border-white/10' : 'bg-gradient-to-r from-emerald-50/90 to-white border-emerald-100'}`}>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin">
          {data.map((d, index) => (
            <div key={index} className={`flex-1 min-w-[110px] rounded-2xl p-4 text-center shadow-lg transition hover:-translate-y-1 ${darkMode ? 'bg-white/10 border border-white/10 text-white' : 'bg-white border border-emerald-100 text-emerald-900'}`}>
              <p className="text-xs font-semibold uppercase tracking-wide opacity-80">{d.title}</p>
              <img src={d.icon} alt="icon" className="w-12 mx-auto my-2 drop-shadow-md" />
              <p className="text-xl font-extrabold">{`${d.temp?.toFixed()}°`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
