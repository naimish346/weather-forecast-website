export default function Rating({ value }) {
  return (
    <div className="flex items-center gap-1 text-sm">
      <span aria-hidden className="text-amber-500">
        {'★★★★★'.slice(0, Math.round(value))}
        <span className="text-slate-300">{'★★★★★'.slice(Math.round(value))}</span>
      </span>
      <span className="text-slate-500">{value.toFixed(1)}</span>
    </div>
  )
}
