import { Button, Container, Navbar as NavbarBs } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Nav } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Navbar() {
    const {openCart, cartQuantity} = useShoppingCart()
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/store">Store</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                </Nav>
                { cartQuantity > 0 && (
                    <Button 
                onClick={openCart}
                style={{ width: "3rem", height: "3rem", position: "relative" }} variant="outline-primary" className="rounded-circle">
                    <img src="../shopping-cart.svg" width="25" height="25" alt="Shopping Cart" />
                    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{ color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0, transform: "translate(25%, 25%)" }}>
                        {cartQuantity}
                    </div>
                </Button>
                )
                }

            </Container>
        </NavbarBs>
    )
}
