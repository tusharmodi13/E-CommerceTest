import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";

const API_URL = import.meta.env.VITE_API_URL || "https://eshop-backend-99l1.onrender.com";

function Checkout() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const total = useMemo(
    () =>
      cart.reduce(
        (sum, item) => sum + Number(item.price || 0) * (item.quantity || 1),
        0
      ),
    [cart]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      await axios.post(`${API_URL}/api/orders`, {
        userId: "guest",
        products: cart.map((item) => ({
          productId: item._id || item.id,
          quantity: item.quantity || 1
        })),
        totalPrice: total
      });

      navigate("/");
    } catch {
      setError("Failed to place order. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-10 max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">
        Checkout
      </h1>

      <div className="border p-4 rounded">
        <h2 className="text-xl font-semibold mb-2">
          Order Summary
        </h2>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <ul className="space-y-1">
            {cart.map((item) => (
              <li key={item._id || item.id}>
                {item.name || item.title} × {item.quantity || 1}
              </li>
            ))}
          </ul>
        )}
        <p className="mt-3 font-semibold">
          Total: ₹{total.toFixed(0)}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          placeholder="Full Name"
          className="border p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Address"
          className="border p-2 w-full"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <input
          placeholder="Phone"
          className="border p-2 w-full"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        {error && (
          <p className="text-red-600">
            {error}
          </p>
        )}

        <button
          disabled={submitting || cart.length === 0}
          className="bg-black text-white px-4 py-2 rounded w-full disabled:opacity-60"
        >
          {submitting ? "Placing Order..." : "Place Order"}
        </button>
      </form>
    </div>
  );
}

export default Checkout;