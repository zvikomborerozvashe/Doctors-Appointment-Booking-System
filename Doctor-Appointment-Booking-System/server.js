const express = require("express");
const colors = require("colors");
const morgan = require("morgan"); // Corrected spelling
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// dotenv config
dotenv.config();

// MongoDB connection
connectDB();

// Express app object
const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev")); // HTTP request logger

// Routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));

// Port configuration (using environment variable or default)
const port = process.env.PORT || 5000; // Use environment variable if set, otherwise default to 5000

// Server listener
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${port}`.bgCyan.white
  );
});
