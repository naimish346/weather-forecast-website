import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'shoply.cart'

function reducer(state, action) {
  switch (action.type) {
    case 'add': {
      const { product, qty = 1 } = action
      const existing = state.find((i) => i.id === product.id)
      if (existing) {
        return state.map((i) =>
          i.id === product.id ? { ...i, qty: Math.min(i.qty + qty, product.stock || 99) } : i,
        )
      }
      return [...state, { id: product.id, name: product.name, price: product.price, image: product.image, stock: product.stock, qty }]
    }
    case 'setQty':
      return state
        .map((i) => (i.id === action.id ? { ...i, qty: Math.max(1, Math.min(action.qty, i.stock || 99)) } : i))
        .filter((i) => i.qty > 0)
    case 'remove':
      return state.filter((i) => i.id !== action.id)
    case 'clear':
      return []
    default:
      return state
  }
}

function init() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, undefined, init)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const value = useMemo(() => {
    const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)
    const shipping = items.length === 0 || subtotal >= 150 ? 0 : 9.95
    const tax = subtotal * 0.08
    return {
      items,
      count: items.reduce((n, i) => n + i.qty, 0),
      subtotal,
      shipping,
      tax,
      total: subtotal + shipping + tax,
      addItem: (product, qty) => dispatch({ type: 'add', product, qty }),
      setQty: (id, qty) => dispatch({ type: 'setQty', id, qty }),
      removeItem: (id) => dispatch({ type: 'remove', id }),
      clearCart: () => dispatch({ type: 'clear' }),
    }
  }, [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside a CartProvider')
  return ctx
}

export const formatPrice = (n) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
