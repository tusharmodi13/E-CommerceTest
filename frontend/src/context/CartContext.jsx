import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  // Load cart from localStorage
  useEffect(() => {

    const savedCart = JSON.parse(localStorage.getItem("cart"))

    if (savedCart) {
      setCart(savedCart)
    }

  }, [])

  // Save cart whenever it changes
  useEffect(() => {

    localStorage.setItem("cart", JSON.stringify(cart))

  }, [cart])

  const addToCart = (product) => {
    const id = product._id || product.id

    setCart((prev) => {
      const existing = prev.find((item) => (item._id || item.id) === id)
      if (existing) {
        return prev.map((item) =>
          (item._id || item.id) === id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      }

      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(item => (item._id || item.id) !== id))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}