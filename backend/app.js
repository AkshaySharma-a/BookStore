// impoet
const express = require("express");
require("dotenv").config();
let PORT = process.env.PORT || 5001;

// locle Imports
require("./config/connection/mongodbConn");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.use("/api/v1", authRoutes);

app.listen(PORT, () => {
  console.log("server is running on ", PORT);
});
