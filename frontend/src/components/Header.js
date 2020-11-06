import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import {
	Navbar,
	Nav,
	NavDropdown,
	Form,
	FormControl,
	Button,
} from "react-bootstrap";

const Header = () => {
	return (
		<header>
			<Navbar bg="light" expand="lg">
				<LinkContainer to="/">
					<Navbar.Brand>Shop G17</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<LinkContainer to="/cart">
							<Nav.Link>
								<i
									className="fas fa-shoppiing-cart"
									style={{ backgroundColor: "#333" }}
								></i>{" "}
								Cart
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/login">
							<Nav.Link>Login</Nav.Link>
						</LinkContainer>
						<Nav.Link href="/login">Eyewear</Nav.Link>
						<Nav.Link href="/login">Streetwear</Nav.Link>
						<Nav.Link href="/login">Home Care</Nav.Link>
						<Nav.Link href="/login">Makeup</Nav.Link>
						<Nav.Link href="/login">Accessories</Nav.Link>
						<Nav.Link href="/about">Manifesto | Gallery 17</Nav.Link>
						<NavDropdown title="FAQ " id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
};

export default Header;
