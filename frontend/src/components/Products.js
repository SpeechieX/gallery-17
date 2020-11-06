import React from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Ratings from "../components/Ratings";

const Products = ({ product }) => {
	return (
		<Card className="my-3 p3 rounded">
			<LinkContainer to={`/product/${product._id}`}>
				<Card.Img src={product.image} variant="top" />
			</LinkContainer>

			<Card.Body>
				<Card.Title as="div">
					<strong>{product.name}</strong>
				</Card.Title>
				<Card.Text as="div">
					<Ratings value={product.name} text={`${product.numReviews}`} />
					<div className="my-3">
						{product.rating} from {product.numReviews} reviews
					</div>
					<strong>{product.name}</strong>
				</Card.Text>
				<Card.Text as="h3">${product.price}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Products;
