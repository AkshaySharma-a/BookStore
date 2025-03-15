const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    avater: {
      type: String,
      default:
        "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png",
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    favorurites: [
      {
        type: mongoose.Types.ObjectId,
        ref: "books",
      },
    ],
    cart: [
      {
        type: mongoose.Types.ObjectId,
        ref: "books",
      },
    ],
    orders: [
      {
        type: mongoose.Types.ObjectId,
        ref: "order",
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", user);
