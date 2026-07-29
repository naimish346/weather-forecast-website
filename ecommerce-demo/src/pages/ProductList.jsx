import { useMemo, useState } from 'react'
import products, { categories } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'
import EmptyState from '../components/EmptyState.jsx'

export default function ProductList() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('featured')

  const visible = useMemo(() => {
    let list = products.filter(
      (p) =>
        (category === 'All' || p.category === category) &&
        (p.name + p.short).toLowerCase().includes(query.trim().toLowerCase()),
    )
    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
    if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating)
    return list
  }, [query, category, sort])

  return (
    <div>
      <section className="rounded-3xl bg-slate-900 px-8 py-12 text-white">
        <p className="text-sm font-medium uppercase tracking-widest text-slate-400">Shoply demo store</p>
        <h1 className="mt-2 max-w-xl text-3xl font-semibold sm:text-4xl">Well-made things for desk, travel, and everyday.</h1>
        <p className="mt-3 max-w-lg text-slate-300">Free shipping on orders over $150. This is a frontend-only demo — no real payments are processed.</p>
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products…"
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-slate-900 sm:max-w-xs"
        />
        <div className="flex flex-wrap gap-2 sm:ml-auto">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-3 py-1.5 text-sm transition ${
                category === c ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-300 bg-white hover:border-slate-500'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-slate-900"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
          <option value="rating">Top rated</option>
        </select>
      </div>

      <p className="mt-4 text-sm text-slate-500">{visible.length} product{visible.length === 1 ? '' : 's'}</p>

      {visible.length === 0 ? (
        <div className="mt-4"><EmptyState title="No matches" message="Try a different search term or category filter." action="Clear filters" to="/" /></div>
      ) : (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  )
}
