const dotenv = require("dotenv");
const connectDB = require("../config/db");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

dotenv.config();

async function seedAdmin() {
  try {
    await connectDB();

    const existingAdmin = await User.findOne({ email: "admin@eshop.com" });
    if (existingAdmin) {
      console.log("Admin user already exists. Email: admin@eshop.com");
      process.exit(0);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("admin123", salt);

    const adminUser = new User({
      name: "Admin",
      email: "admin@eshop.com",
      password: hashedPassword,
      role: "admin",
    });

    await adminUser.save();
    console.log("Admin user created!");
    console.log("Login email: admin@eshop.com");
    console.log("Password: admin123");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding admin:", error.message);
    process.exit(1);
  }
}

seedAdmin();
