import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Navbar() {
  const { count } = useCart()
  const link = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium rounded-lg transition ${
      isActive ? 'text-slate-900 bg-slate-100' : 'text-slate-500 hover:text-slate-900'
    }`

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3">
        <Link to="/" className="mr-auto flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-900 text-sm font-bold text-white">S</span>
          <span className="text-lg font-semibold tracking-tight">Shoply</span>
        </Link>
        <NavLink to="/" className={link} end>Products</NavLink>
        <NavLink to="/checkout" className={link}>Checkout</NavLink>
        <NavLink
          to="/cart"
          className="relative ml-1 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Cart
          {count > 0 && (
            <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-emerald-500 px-1 text-xs font-bold text-white">
              {count}
            </span>
          )}
        </NavLink>
      </div>
    </header>
  )
}
