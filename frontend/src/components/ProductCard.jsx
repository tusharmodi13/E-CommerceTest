import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);

  const title = product.name || product.title;
  const price = Number(product.price || 0);
  const priceINR = price.toFixed(0);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1000); // Reset after 1 second
  };

  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-xl transition flex flex-col h-full cursor-pointer relative overflow-hidden group">
      <img
        src={product.image}
        alt={title}
        className="h-40 mx-auto object-contain group-hover:scale-105 transition-transform duration-300"
      />

      <h2 className="font-semibold mt-4 flex-grow line-clamp-2">
        {title}
      </h2>

      <p className="text-green-600 font-bold mt-2">
        ₹{priceINR}
      </p>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleAddToCart}
        className={`px-4 py-2 mt-3 rounded transition font-medium w-full shadow-sm text-sm ${
          isAdded ? "bg-green-600 text-white" : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "Added ✔" : "Add To Cart"}
      </motion.button>
    </div>
  );
}

export default ProductCard;