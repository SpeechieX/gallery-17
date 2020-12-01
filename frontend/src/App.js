import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import { Container } from "react-bootstrap";

const App = () => {
	return (
		<Router>
			<Header />

			<main className="py-3">
				<Container>
					<h1>Welcome to Gallery 17!</h1>
					<Route path="/" component={HomeScreen} exact />
					<Route path="/product/:id" component={ProductScreen} />
					<Route path="/cart/:id?" component={CartScreen} />
				</Container>
			</main>

			<Footer />
		</Router>
	);
};

export default App;
