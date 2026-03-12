import { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import ProductForm from "../components/ProductForm";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "https://eshop-backend-99l1.onrender.com";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = () => {
    setLoading(true);
    setError("");

    axios
      .get(`${API_URL}/api/products`)
      .then((res) => setProducts(res.data))
      .catch(() => setError("Failed to load products"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = (product) => {
    setError("");

    axios
      .post(`${API_URL}/api/products`, {
        ...product,
        price: Number(product.price),
      })
      .then(() => {
        fetchProducts();
      })
      .catch(() => setError("Failed to create product"));
  };

  const handleDelete = (id) => {
    setError("");

    axios
      .delete(`${API_URL}/api/products/${id}`)
      .then(() => {
        setProducts((prev) => prev.filter((p) => p._id !== id));
      })
      .catch(() => setError("Failed to delete product"));
  };

  return (
    <div className="flex">
      <AdminSidebar />

      <div className="p-10 flex-1 space-y-6">
        <h1 className="text-3xl font-bold mb-2">
          Manage Products
        </h1>

        {error && (
          <p className="text-red-600">
            {error}
          </p>
        )}

        <ProductForm onSubmit={handleAddProduct} />

        <div>
          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Existing Products
          </h2>

          {loading ? (
            <p>Loading products...</p>
          ) : products.length === 0 ? (
            <p>No products yet. Add one above.</p>
          ) : (
            <table className="w-full border mt-2">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">Name</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Category</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id} className="border text-center">
                    <td className="p-2">{product.name}</td>
                    <td className="p-2">₹{product.price}</td>
                    <td className="p-2">{product.category}</td>
                    <td className="p-2">
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminProducts;