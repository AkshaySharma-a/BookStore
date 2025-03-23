// impoet
const express = require("express");
require("dotenv").config();
let PORT = process.env.PORT || 5001;
const cors = require("cors"); // ✅ Import CORS
// locle Imports
require("./config/connection/mongodbConn");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const booksRoutes = require("./routes/bookRouts");

const app = express();
// ✅ Correct CORS Configuration
const corsOptions = {
  origin: "http://localhost:3000", // Allow frontend requests
  methods: "GET,POST", // Allow only GET & POST
  credentials: true, // Allow cookies if needed
  optionsSuccessStatus: 200, // Fix for preflight requests
};

app.use(cors(corsOptions)); // ✅ Apply CORS properly
app.use(express.json());

app.use("/api/v1", authRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", booksRoutes);

app.listen(PORT, () => {
  console.log("server is running on ", PORT);
});
