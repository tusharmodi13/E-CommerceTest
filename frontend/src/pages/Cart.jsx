import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart } = useContext(CartContext);

  const total = useMemo(
    () =>
      cart.reduce(
        (sum, item) => sum + Number(item.price || 0) * (item.quantity || 1),
        0
      ),
    [cart]
  );

  if (cart.length === 0) {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-6">
          Shopping Cart
        </h1>
        <p className="mb-4">Your cart is empty.</p>
        <Link
          to="/products"
          className="inline-block bg-black text-white px-4 py-2 rounded"
        >
          Shop Products
        </Link>
      </div>
    );
  }

  return (
    <div className="p-10 space-y-6">
      <h1 className="text-3xl font-bold">
        Shopping Cart
      </h1>

      {cart.map((item) => (
        <CartItem key={item._id || item.id} item={item} />
      ))}

      <div className="flex items-center justify-between mt-6 border-t pt-4">
        <p className="text-xl font-semibold">
          Total: ₹{total.toFixed(0)}
        </p>

        <Link
          to="/checkout"
          className="bg-black text-white px-6 py-2 rounded"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;