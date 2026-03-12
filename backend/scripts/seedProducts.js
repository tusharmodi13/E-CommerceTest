const dotenv = require("dotenv")
const connectDB = require("../config/db")
const Product = require("../models/Product")

dotenv.config()

async function seedProducts() {
  try {
    await connectDB()

    await Product.deleteMany({}) // Clear existing before seeding a fresh set of categories
    console.log("Cleared existing products.")

    await Product.insertMany([
      // --- Men (8 Items) ---
      {
        name: "Classic White T-Shirt",
        price: 499,
        description: "Soft cotton crew-neck t-shirt in classic white.",
        image: "https://images.pexels.com/photos/10026491/pexels-photo-10026491.jpeg",
        category: "Men",
        stock: 50
      },
      {
        name: "Casual Denim Shirt",
        price: 1299,
        description: "Comfortable and stylish casual denim shirt for everyday wear.",
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
        category: "Men",
        stock: 40
      },
      {
        name: "Sports Running Shoes",
        price: 2999,
        description: "Lightweight and breathable running shoes for maximum performance.",
        image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
        category: "Men",
        stock: 25
      },
      {
        name: "Formal Black Trousers",
        price: 1899,
        description: "Elegant fit formal trousers for office wear and special occasions.",
        image: "https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg",
        category: "Men",
        stock: 30
      },
      {
        name: "Winter Bomber Jacket",
        price: 3499,
        description: "Warm and trendy bomber jacket with a soft inner lining.",
        image: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg",
        category: "Men",
        stock: 15
      },
      {
        name: "Polo Collar T-Shirt",
        price: 899,
        description: "Classic polo shirt with breathable fabric for comfort.",
        image: "https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg",
        category: "Men",
        stock: 45
      },
      {
        name: "Leather Oxford Shoes",
        price: 4599,
        description: "Premium leather oxford shoes for formal occasions.",
        image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
        category: "Men",
        stock: 20
      },
      {
        name: "Comfortable Sweatpants",
        price: 1199,
        description: "Cozy sweatpants perfect for lounging or hitting the gym.",
        image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg",
        category: "Men",
        stock: 35
      },

      // --- Women (8 Items) ---
      {
        name: "Blue Denim Jacket",
        price: 2499,
        description: "Slim-fit blue denim jacket with metal buttons.",
        image: "https://images.pexels.com/photos/7671166/pexels-photo-7671166.jpeg",
        category: "Women",
        stock: 20
      },
      {
        name: "Floral Summer Dress",
        price: 1599,
        description: "Light and breezy floral pattern dress perfect for summer days.",
        image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg",
        category: "Women",
        stock: 35
      },
      {
        name: "Elegant Evening Gown",
        price: 5999,
        description: "Stunning evening gown for formal events and special occasions.",
        image: "https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg",
        category: "Women",
        stock: 15
      },
      {
        name: "High-Waist Jeans",
        price: 1899,
        description: "Comfortable high-waist jeans offering a flattering fit.",
        image: "https://images.pexels.com/photos/2034988/pexels-photo-2034988.jpeg",
        category: "Women",
        stock: 40
      },
      {
        name: "Silk Blouse",
        price: 2199,
        description: "Premium silk blouse with delicate details for a sophisticated look.",
        image: "https://images.pexels.com/photos/7525048/pexels-photo-7525048.jpeg",
        category: "Women",
        stock: 25
      },
      {
        name: "Knitted Cardigan",
        price: 1499,
        description: "Cozy and warm knitted cardigan ideal for layering in autumn.",
        image: "https://images.pexels.com/photos/6603176/pexels-photo-6603176.jpeg",
        category: "Women",
        stock: 30
      },
      {
        name: "Leather Ankle Boots",
        price: 3299,
        description: "Stylish ankle boots crafted from durable genuine leather.",
        image: "https://images.pexels.com/photos/3313175/pexels-photo-3313175.jpeg",
        category: "Women",
        stock: 18
      },
      {
        name: "Athletic Yoga Pants",
        price: 1299,
        description: "Stretchy, breathable yoga pants for workout or daily comfort.",
        image: "https://images.pexels.com/photos/3621415/pexels-photo-3621415.jpeg",
        category: "Women",
        stock: 50
      },

      // --- Electronics (8 Items) ---
      {
        name: "Wireless Headphones",
        price: 3999,
        description: "Over-ear wireless headphones with noise cancellation.",
        image: "https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg",
        category: "Electronics",
        stock: 30
      },
      {
        name: "Smart Watch Series X",
        price: 4999,
        description: "Feature-packed smartwatch with health tracking and notifications.",
        image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
        category: "Electronics",
        stock: 40
      },
      {
        name: "Portable Bluetooth Speaker",
        price: 1999,
        description: "Waterproof portable speaker with deep bass and 12-hour battery life.",
        image: "https://images.pexels.com/photos/1034653/pexels-photo-1034653.jpeg",
        category: "Electronics",
        stock: 60
      },
      {
        name: "Gaming Mouse RGB",
        price: 1499,
        description: "Ergonomic gaming mouse with customizable RGB lighting and high DPI.",
        image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg",
        category: "Electronics",
        stock: 45
      },
      {
        name: "Mechanical Keyboard",
        price: 3499,
        description: "Tactile mechanical keyboard with cherry MX switches and RGB backlit.",
        image: "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg",
        category: "Electronics",
        stock: 25
      },
      {
        name: "4K Action Camera",
        price: 8999,
        description: "Waterproof 4K action camera to record all your extreme adventures.",
        image: "https://images.pexels.com/photos/15729792/pexels-photo-15729792.jpeg",
        category: "Electronics",
        stock: 10
      },
      {
        name: "Fast Charging Power Bank",
        price: 1299,
        description: "20,000mAh power bank supporting ultra-fast charging capabilities.",
        image: "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg",
        category: "Electronics",
        stock: 55
      },
      {
        name: "Wireless Earbuds Pro",
        price: 2999,
        description: "Compact wireless earbuds with active noise cancellation and crystal-clear sound.",
        image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg",
        category: "Electronics",
        stock: 40
      },

      // --- Accessories (8 Items) ---
      {
        name: "Leather Wallet",
        price: 899,
        description: "Genuine leather bi-fold wallet with card slots.",
        image: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg",
        category: "Accessories",
        stock: 40
      },
      {
        name: "Aviator Sunglasses",
        price: 1199,
        description: "Classic aviator sunglasses with UV protection.",
        image: "https://images.pexels.com/photos/2112651/pexels-photo-2112651.jpeg",
        category: "Accessories",
        stock: 80
      },
      {
        name: "Minimalist Wristwatch",
        price: 2499,
        description: "Sleek and minimalist wristwatch with a comfortable leather band.",
        image: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg",
        category: "Accessories",
        stock: 30
      },
      {
        name: "Canvas Backpack",
        price: 1899,
        description: "Durable canvas backpack suitable for school, work, or day trips.",
        image: "https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg",
        category: "Accessories",
        stock: 50
      },
      {
        name: "Woven Belt",
        price: 599,
        description: "Stretchable woven belt with a sturdy metal buckle.",
        image: "https://images.pexels.com/photos/5920038/pexels-photo-5920038.jpeg",
        category: "Accessories",
        stock: 65
      },
      {
        name: "Beanie Hat",
        price: 499,
        description: "Warm woolen beanie hat to keep you cozy during winter.",
        image: "https://images.pexels.com/photos/936021/pexels-photo-936021.jpeg",
        category: "Accessories",
        stock: 75
      },
      {
        name: "Silver Necklace",
        price: 1599,
        description: "Elegant sterling silver necklace with a minimalist pendant.",
        image: "https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg",
        category: "Accessories",
        stock: 25
      },
      {
        name: "Travel Duffel Bag",
        price: 2799,
        description: "Spacious duffel bag perfect for weekend getaways and gym sessions.",
        image: "https://images.pexels.com/photos/4065608/pexels-photo-4065608.jpeg",
        category: "Accessories",
        stock: 20
      }
    ])

    console.log("Seeded initial products.")
    process.exit(0)
  } catch (error) {
    console.error("Error seeding products:", error.message)
    process.exit(1)
  }
}

seedProducts()
