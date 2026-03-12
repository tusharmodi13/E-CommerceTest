import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold tracking-wide">
        E-Shop
      </h1>

      <div className="space-x-6 flex items-center">
        <Link className="hover:text-gray-300" to="/">Home</Link>
        <Link className="hover:text-gray-300" to="/products">Products</Link>
        
        <Link className="hover:text-gray-300 relative flex items-center pr-2" to="/cart">
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-3 -right-2 bg-red-600 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>

        {user ? (
          <>
            {user.role === "admin" ? (
              <Link className="hover:text-gray-300" to="/admin">Admin Dashboard</Link>
            ) : (
              <Link className="hover:text-gray-300" to={`/${user.name}`}>My Dashboard</Link>
            )}
            <button 
              onClick={handleLogout}
              className="bg-white text-black px-3 py-1 rounded text-sm hover:bg-gray-200 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <Link className="hover:text-gray-300" to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;