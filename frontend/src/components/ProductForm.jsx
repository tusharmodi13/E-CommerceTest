import { useState } from "react";

function ProductForm({ onSubmit }) {

  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    category: ""
  });

  const handleChange = (e) => {

    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();
    onSubmit(product);

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 shadow rounded"
    >

      <input
        name="name"
        placeholder="Product Name"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="price"
        placeholder="Price"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="category"
        placeholder="Category"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <button className="bg-black text-white px-4 py-2 rounded">
        Save Product
      </button>

    </form>
  );
}

export default ProductForm;