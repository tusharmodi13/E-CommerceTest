import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "https://eshop-backend-99l1.onrender.com";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  useEffect(() => {
    setLoading(true);
    setError("");

    const params = category ? `?category=${encodeURIComponent(category)}` : "";

    axios
      .get(`${API_URL}/api/products${params}`)
      .then((res) => setProducts(res.data))
      .catch(() => {
        setError("Failed to load products");
      })
      .finally(() => setLoading(false));
  }, [category]);

  const heading = category ? `Showing ${category}` : "Our Products";

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4 text-center">
        {heading}
      </h1>

      {error && (
        <p className="text-center text-red-600 mb-4">
          {error}
        </p>
      )}

      {loading ? (
        <p className="text-center">Loading products...</p>
      ) : (
        <div className="grid md:grid-cols-4 gap-6">
          {products.map((product) => (
            <motion.div
              key={product._id || product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;