import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useParams, Navigate } from "react-router-dom";

function CustomerDashboard() {
  const { user } = useContext(AuthContext);
  const { username } = useParams();

  // Basic security check: ensure the logged-in user matches the URL
  // If no user is logged in, the CustomerRoute in App.jsx already handles redirect to /login
  if (user && user.name !== username) {
    return <Navigate to="/" />;
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Welcome back, {user?.name}!</h1>
      
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Account Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 p-4 rounded bg-gray-50">
            <p className="text-sm text-gray-500 uppercase font-bold">Name</p>
            <p className="text-lg">{user?.name}</p>
          </div>
          <div className="border border-gray-200 p-4 rounded bg-gray-50">
            <p className="text-sm text-gray-500 uppercase font-bold">Email Address</p>
            <p className="text-lg">{user?.email}</p>
          </div>
          <div className="border border-gray-200 p-4 rounded bg-gray-50">
            <p className="text-sm text-gray-500 uppercase font-bold">Account Type</p>
            <p className="text-lg capitalize">{user?.role}</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <p className="text-gray-600">You have no recent orders.</p>
        {/* In the future, you can fetch and map over the user's orders here */}
      </div>

    </div>
  );
}

export default CustomerDashboard;
