import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Products from "../components/Products";
import { listProducts } from "../actions/productActions";
// import axios from "axios";
// import products from "./../resources/products";

const HomeScreen = () => {
	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);
	const { loading, error, products } = productList;

	useEffect(() => {
		dispatch(listProducts());

		// const fetchProducts = async () => {
		// 	const { data } = await axios.get("/api/products");
		// 	setProducts(data);
		// };
		// fetchProducts();
	}, [dispatch]);

	return (
		<div className="browse">
			{loading ? (
				<h1>Loading...</h1>
			) : error ? (
				<h3>{error}</h3>
			) : (
				<Row>
					{products.map((product) => (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
							{/* <h3>{product.name}</h3>
						<h3>{product.price}</h3> */}
							<Products product={product} />
						</Col>
					))}
				</Row>
			)}
		</div>
	);
};

export default HomeScreen;
