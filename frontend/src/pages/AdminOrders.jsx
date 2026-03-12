import { useEffect, useState } from "react"
import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL || "https://eshop-backend-99l1.onrender.com";

function AdminOrders() {

  const [orders, setOrders] = useState([])

  useEffect(() => {

    axios
      .get(`${API_URL}/api/orders`)
      .then(res => setOrders(res.data))
      .catch(err => console.log(err))

  }, [])

  return (

    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Admin Orders
      </h1>

      <table className="w-full border">

        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Order ID</th>
            <th className="p-2">User</th>
            <th className="p-2">Total Price</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>

        <tbody>

          {orders.map(order => (

            <tr key={order._id} className="text-center border">

              <td className="p-2">{order._id}</td>

              <td className="p-2">{order.userId}</td>

              <td className="p-2">₹{order.totalPrice}</td>

              <td className="p-2">{order.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )
}

export default AdminOrders