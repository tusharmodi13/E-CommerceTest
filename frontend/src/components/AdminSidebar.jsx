import { Link } from "react-router-dom";
import { FaBox, FaShoppingCart, FaTachometerAlt } from "react-icons/fa";

function AdminSidebar() {
  return (
    <div className="w-60 bg-gray-900 text-white h-screen p-5">

      <h2 className="text-xl font-bold mb-6">
        Admin Panel
      </h2>

      <ul className="space-y-4">

        <li>
          <Link to="/admin" className="flex items-center gap-2">
            <FaTachometerAlt /> Dashboard
          </Link>
        </li>

        <li>
          <Link to="/admin/products" className="flex items-center gap-2">
            <FaBox /> Products
          </Link>
        </li>

        <li>
          <Link to="/admin/orders" className="flex items-center gap-2">
            <FaShoppingCart /> Orders
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default AdminSidebar;