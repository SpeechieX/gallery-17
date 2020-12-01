import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	Rol,
	Col,
	ListGroup,
	Image,
	Form,
	Button,
	Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart } from "../actions/cartActions";

const CartScreen = ({ match, location, history }) => {
	const productId = match.params.useDispatch;

	const qty = location.search ? Number(location.search.split("=")[1]) : 1;

	const dispatch = useDispatch();

	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, qty));
		}
	}, [dispatch, productId, qty]);
};

export default CartScreen;
