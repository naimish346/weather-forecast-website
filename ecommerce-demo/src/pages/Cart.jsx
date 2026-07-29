import { Link } from 'react-router-dom'
import { formatPrice, useCart } from '../context/CartContext.jsx'
import EmptyState from '../components/EmptyState.jsx'
import OrderSummary from '../components/OrderSummary.jsx'

export default function Cart() {
  const { items, setQty, removeItem, clearCart } = useCart()

  if (items.length === 0) {
    return <EmptyState title="Your cart is empty" message="Once you add something, it will show up here and stay saved in your browser." />
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold">Your cart</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4">
              <Link to={`/product/${item.id}`} className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
              </Link>
              <div className="flex flex-1 flex-col">
                <Link to={`/product/${item.id}`} className="font-medium hover:underline">{item.name}</Link>
                <span className="text-sm text-slate-500">{formatPrice(item.price)} each</span>
                <div className="mt-auto flex items-center gap-3 pt-2">
                  <div className="flex items-center rounded-lg border border-slate-300">
                    <button onClick={() => setQty(item.id, item.qty - 1)} className="px-2.5 py-1 text-lg">−</button>
                    <span className="w-8 text-center text-sm">{item.qty}</span>
                    <button onClick={() => setQty(item.id, item.qty + 1)} className="px-2.5 py-1 text-lg">+</button>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-sm text-slate-500 hover:text-red-600">Remove</button>
                </div>
              </div>
              <span className="font-semibold">{formatPrice(item.price * item.qty)}</span>
            </li>
          ))}
          <li>
            <button onClick={clearCart} className="text-sm text-slate-500 hover:text-red-600">Clear cart</button>
          </li>
        </ul>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <OrderSummary>
            <Link to="/checkout" className="mt-5 block rounded-lg bg-slate-900 py-2.5 text-center text-sm font-medium text-white hover:bg-slate-700">
              Proceed to checkout
            </Link>
            <Link to="/" className="mt-2 block py-2 text-center text-sm text-slate-500 hover:text-slate-900">Continue shopping</Link>
          </OrderSummary>
        </div>
      </div>
    </div>
  )
}
