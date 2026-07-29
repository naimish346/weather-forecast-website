import { Link } from 'react-router-dom'

export default function EmptyState({ title, message, action = 'Browse products', to = '/' }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mx-auto mt-1 max-w-sm text-sm text-slate-500">{message}</p>
      <Link to={to} className="mt-5 inline-block rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
        {action}
      </Link>
    </div>
  )
}
