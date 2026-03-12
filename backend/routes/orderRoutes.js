const express = require("express")
const router = express.Router()

const Order = require("../models/Order")

// GET all orders
router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find()
    res.json(orders)
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders" })
  }
})

// CREATE an order
router.post("/orders", async (req, res) => {
  try {
    const { userId, products, totalPrice } = req.body

    if (!products || !Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ message: "Order must include products" })
    }

    const order = new Order({
      userId: userId || "guest",
      products,
      totalPrice,
      status: "Pending"
    })

    const saved = await order.save()
    res.status(201).json(saved)
  } catch (error) {
    res.status(400).json({ message: "Error creating order" })
  }
})

module.exports = router