import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hero from "../assets/images/hero.png";

function Home() {
  const categories = ["Electronics", "Men", "Women", "Accessories"];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">
              Shop the Latest Trends
            </h1>

            <p className="text-gray-600 mb-6">
              Discover amazing products at unbeatable prices.
            </p>

            <Link
              to="/products"
              className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
            >
              Shop Now
            </Link>
          </motion.div>

          <motion.img
            src={hero}
            alt="shopping"
            className="rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/products?category=${encodeURIComponent(cat)}`}
              className="bg-white shadow hover:shadow-lg p-8 text-center rounded transition"
            >
              <h3 className="font-semibold text-lg">{cat}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;