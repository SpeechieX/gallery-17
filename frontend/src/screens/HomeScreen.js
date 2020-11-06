import React from "react";
import { Row, Col } from "react-bootstrap";
import Products from "../components/Products";
import products from "./../resources/products";

const HomeScreen = () => {
	return (
		<div className="browse">
			<Row>
				{products.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<h3>{product.name}</h3>
						<h3>{product.price}</h3>
						<Products product={product} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default HomeScreen;
