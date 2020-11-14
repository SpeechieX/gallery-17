const express = require("express");
const asyncHandler = require("express-async-middleware");
const router = express.Router();
const Product = require("./../models/productModel");

// @desc    Fetch All Products
// @route   GET /api/products
// @access  Public
router.get(
	"/",
	asyncHandler(async (req, res) => {
		const products = await Product.find({});

		res.json(products);
	}),
);

// @desc    Fetch Single Product
// @route   GET /api/products
// @access  Public
router.get(
	"/:id",
	asyncHandler(async (req, res) => {
		// const product = products.find((p) => p._id === req.params.id);
		const product = await Product.findById(req.params.id);

		if (product) {
			res.json(product);
		} else {
			res.status(404).json({ message: "Product Not Found" });
		}
		res.json(product);
	}),
);

module.exports = router;
