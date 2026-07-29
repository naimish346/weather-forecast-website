import { Link } from 'react-router-dom'
import { formatPrice, useCart } from '../context/CartContext.jsx'
import Rating from './Rating.jsx'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const out = product.stock === 0

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-lg">
      <Link to={`/product/${product.id}`} className="relative block aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        {out && (
          <span className="absolute left-3 top-3 rounded-full bg-slate-900/90 px-2.5 py-1 text-xs font-semibold text-white">
            Out of stock
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-400">{product.category}</span>
        <Link to={`/product/${product.id}`} className="mt-1 font-semibold leading-snug hover:underline">
          {product.name}
        </Link>
        <p className="mt-1 line-clamp-2 text-sm text-slate-500">{product.short}</p>
        <div className="mt-2"><Rating value={product.rating} /></div>
        <div className="mt-4 flex items-center justify-between gap-2">
          <span className="text-lg font-semibold">{formatPrice(product.price)}</span>
          <button
            onClick={() => addItem(product, 1)}
            disabled={out}
            className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {out ? 'Sold out' : 'Add to cart'}
          </button>
        </div>
      </div>
    </div>
  )
}
