import { Link, Navigate, useLocation } from 'react-router-dom'
import { formatPrice } from '../context/CartContext.jsx'

export default function OrderConfirmed() {
  const { state } = useLocation()
  if (!state?.orderId) return <Navigate to="/" replace />

  return (
    <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white p-10 text-center">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-2xl text-emerald-600">✓</div>
      <h1 className="mt-5 text-2xl font-semibold">Thanks for your order!</h1>
      <p className="mt-2 text-sm text-slate-500">
        Order <span className="font-medium text-slate-900">{state.orderId}</span> for {formatPrice(state.total)} is confirmed.
        A receipt would normally be sent to {state.email}.
      </p>
      <Link to="/" className="mt-6 inline-block rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700">
        Continue shopping
      </Link>
    </div>
  )
}
