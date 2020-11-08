const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

const productRoute = require("./routes/productRoutes");

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
	res.send("API IS RUNNING");
});

app.use("/api/products", productRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server up / 5K ${PORT}`));
