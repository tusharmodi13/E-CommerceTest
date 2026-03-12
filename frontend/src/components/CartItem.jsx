import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ item }) {
  const { removeFromCart } = useContext(CartContext);

  const title = item.name || item.title;

  return (
    <div className="flex items-center justify-between border p-4 rounded">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={title}
          className="w-16"
        />

        <div>
          <h2 className="font-semibold">{title}</h2>
          <p>₹{Number(item.price).toFixed(0)}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <p>Qty: {item.quantity}</p>
        <button
          onClick={() => removeFromCart(item._id || item.id)}
          className="bg-red-600 text-white px-3 py-1 rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;