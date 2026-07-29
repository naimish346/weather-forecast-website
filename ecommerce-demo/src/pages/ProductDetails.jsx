import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import products from '../data/products.js'
import { formatPrice, useCart } from '../context/CartContext.jsx'
import Rating from '../components/Rating.jsx'
import ProductCard from '../components/ProductCard.jsx'
import EmptyState from '../components/EmptyState.jsx'

export default function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)

  const product = products.find((p) => String(p.id) === id)
  if (!product) {
    return <EmptyState title="Product not found" message="That product doesn’t exist in this demo catalogue." />
  }

  const out = product.stock === 0
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  return (
    <div>
      <nav className="text-sm text-slate-500">
        <Link to="/" className="hover:underline">Products</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
          <img src={product.image} alt={product.name} className="aspect-[4/3] w-full object-cover" />
        </div>

        <div>
          <span className="text-xs font-medium uppercase tracking-wide text-slate-400">{product.category}</span>
          <h1 className="mt-1 text-3xl font-semibold">{product.name}</h1>
          <div className="mt-2"><Rating value={product.rating} /></div>
          <p className="mt-4 text-3xl font-semibold">{formatPrice(product.price)}</p>
          <p className={`mt-1 text-sm ${out ? 'text-red-600' : 'text-emerald-600'}`}>
            {out ? 'Out of stock' : `In stock — ${product.stock} available`}
          </p>
          <p className="mt-5 leading-relaxed text-slate-600">{product.description}</p>

          <ul className="mt-5 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />{f}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <div className="flex items-center rounded-lg border border-slate-300 bg-white">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} disabled={out} className="px-3 py-2 text-lg disabled:text-slate-300">−</button>
              <span className="w-10 text-center text-sm font-medium">{qty}</span>
              <button onClick={() => setQty((q) => Math.min(product.stock, q + 1))} disabled={out} className="px-3 py-2 text-lg disabled:text-slate-300">+</button>
            </div>
            <button
              onClick={() => addItem(product, qty)}
              disabled={out}
              className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700 disabled:bg-slate-300"
            >
              Add to cart
            </button>
            <button
              onClick={() => { addItem(product, qty); navigate('/checkout') }}
              disabled={out}
              className="rounded-lg border border-slate-900 px-5 py-2.5 text-sm font-medium hover:bg-slate-100 disabled:border-slate-300 disabled:text-slate-300"
            >
              Buy now
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-semibold">You might also like</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  )
}
