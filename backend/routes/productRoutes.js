const express = require("express")
const router = express.Router()

const Product = require("../models/Product")

// GET products (optionally filtered by category)
router.get("/products", async (req, res) => {
  try {
    const { category } = req.query
    const query = category ? { category } : {}
    const products = await Product.find(query)
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" })
  }
})

// CREATE a product
router.post("/products", async (req, res) => {
  try {
    const { name, price, image, category, description, stock } = req.body

    if (!name || !price || !image || !category) {
      return res.status(400).json({ message: "Missing required fields" })
    }

    const product = new Product({
      name,
      price,
      image,
      category,
      description: description || "",
      stock: stock ?? 0
    })

    const saved = await product.save()
    res.status(201).json(saved)
  } catch (error) {
    res.status(400).json({ message: "Error creating product" })
  }
})

// DELETE a product
router.delete("/products/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.json({ message: "Product deleted" })
  } catch (error) {
    res.status(400).json({ message: "Error deleting product" })
  }
})

module.exports = router