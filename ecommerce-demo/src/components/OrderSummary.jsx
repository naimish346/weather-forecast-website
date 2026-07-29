import { formatPrice, useCart } from '../context/CartContext.jsx'

export default function OrderSummary({ children }) {
  const { subtotal, shipping, tax, total } = useCart()
  const row = 'flex justify-between text-sm'
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="text-lg font-semibold">Order summary</h2>
      <dl className="mt-4 space-y-2 text-slate-600">
        <div className={row}><dt>Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div>
        <div className={row}><dt>Shipping</dt><dd>{shipping === 0 ? 'Free' : formatPrice(shipping)}</dd></div>
        <div className={row}><dt>Tax (8%)</dt><dd>{formatPrice(tax)}</dd></div>
      </dl>
      <div className="mt-4 flex justify-between border-t border-slate-200 pt-4 text-base font-semibold">
        <span>Total</span><span>{formatPrice(total)}</span>
      </div>
      {subtotal > 0 && subtotal < 150 && (
        <p className="mt-3 text-xs text-slate-500">Add {formatPrice(150 - subtotal)} more for free shipping.</p>
      )}
      {children}
    </div>
  )
}
