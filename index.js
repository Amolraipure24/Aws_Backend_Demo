const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDB = require("./src/config/database");
const userRoutes = require("./src/routes/userRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
