import AdminSidebar from "../components/AdminSidebar";

function AdminDashboard() {

  return (
    <div className="flex">

      <AdminSidebar />

      <div className="p-10 flex-1">

        <h1 className="text-3xl font-bold mb-6">
          Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-6">

          <div className="bg-white p-6 shadow rounded">
            <h2>Total Products</h2>
            <p className="text-2xl font-bold">120</p>
          </div>

          <div className="bg-white p-6 shadow rounded">
            <h2>Total Orders</h2>
            <p className="text-2xl font-bold">80</p>
          </div>

          <div className="bg-white p-6 shadow rounded">
            <h2>Revenue</h2>
            <p className="text-2xl font-bold">$5400</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;