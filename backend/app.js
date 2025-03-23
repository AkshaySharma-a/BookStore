// impoet
const express = require("express");
require("dotenv").config();
let PORT = process.env.PORT || 5001;

// locle Imports
require("./config/connection/mongodbConn");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const booksRoutes = require("./routes/bookRouts");

const app = express();

app.use(express.json());

app.use("/api/v1", authRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", booksRoutes);

app.listen(PORT, () => {
  console.log("server is running on ", PORT);
});
