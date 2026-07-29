import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { formatPrice, useCart } from '../context/CartContext.jsx'
import EmptyState from '../components/EmptyState.jsx'
import OrderSummary from '../components/OrderSummary.jsx'

const FIELDS = [
  { name: 'email', label: 'Email', type: 'email', span: 2 },
  { name: 'name', label: 'Full name', span: 2 },
  { name: 'address', label: 'Address', span: 2 },
  { name: 'city', label: 'City' },
  { name: 'zip', label: 'ZIP / Postal code' },
  { name: 'card', label: 'Card number', placeholder: '4242 4242 4242 4242', span: 2 },
  { name: 'expiry', label: 'Expiry (MM/YY)', placeholder: '04/28' },
  { name: 'cvc', label: 'CVC', placeholder: '123' },
]

const EMPTY = Object.fromEntries(FIELDS.map((f) => [f.name, '']))

function validate(values) {
  const errors = {}
  FIELDS.forEach((f) => {
    if (!values[f.name].trim()) errors[f.name] = 'Required'
  })
  if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Enter a valid email'
  if (values.card && values.card.replace(/\s/g, '').length < 12) errors.card = 'Card number looks too short'
  if (values.expiry && !/^\d{2}\/\d{2}$/.test(values.expiry)) errors.expiry = 'Use MM/YY'
  if (values.cvc && !/^\d{3,4}$/.test(values.cvc)) errors.cvc = '3–4 digits'
  return errors
}

export default function Checkout() {
  const { items, total, clearCart } = useCart()
  const navigate = useNavigate()
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  if (items.length === 0) {
    return <EmptyState title="Nothing to check out" message="Your cart is empty — add a product first." />
  }

  const change = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) return
    setSubmitting(true)
    const orderTotal = total
    setTimeout(() => {
      clearCart()
      navigate('/order-confirmed', {
        state: { orderId: 'SHP-' + Math.random().toString(36).slice(2, 8).toUpperCase(), email: values.email, total: orderTotal },
      })
    }, 900)
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold">Checkout</h1>
      <p className="mt-1 text-sm text-slate-500">Demo only — do not enter real card details.</p>

      <form onSubmit={submit} noValidate className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {FIELDS.map((f) => (
              <div key={f.name} className={f.span === 2 ? 'sm:col-span-2' : ''}>
                <label htmlFor={f.name} className="text-sm font-medium">{f.label}</label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type || 'text'}
                  value={values[f.name]}
                  onChange={change}
                  placeholder={f.placeholder}
                  className={`mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-slate-900 ${
                    errors[f.name] ? 'border-red-400' : 'border-slate-300'
                  }`}
                />
                {errors[f.name] && <p className="mt-1 text-xs text-red-600">{errors[f.name]}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <OrderSummary>
            <ul className="mt-4 space-y-1 border-t border-slate-200 pt-4 text-sm text-slate-500">
              {items.map((i) => (
                <li key={i.id} className="flex justify-between gap-2">
                  <span className="truncate">{i.qty} × {i.name}</span>
                  <span>{formatPrice(i.price * i.qty)}</span>
                </li>
              ))}
            </ul>
            <button
              type="submit"
              disabled={submitting}
              className="mt-5 w-full rounded-lg bg-slate-900 py-2.5 text-sm font-medium text-white hover:bg-slate-700 disabled:bg-slate-400"
            >
              {submitting ? 'Placing order…' : `Pay ${formatPrice(total)}`}
            </button>
          </OrderSummary>
        </div>
      </form>
    </div>
  )
}
