import { Button, Container, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink, Link } from "react-router-dom"
import { Nav } from "react-bootstrap"

export function Navbar() {
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/store">Store</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                </Nav>
                <Button style={{ width: "3rem", height: "3rem", position: "relative" }} variant="outline-primary" className="rounded-circle">
                    <img src="/public/shopping-cart.svg" width="25" height="25" alt="Shopping Cart" />
                    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{ color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0, transform: "translate(25%, 25%)" }}>3</div>
                </Button>
            </Container>
        </NavbarBs>
    )
}
