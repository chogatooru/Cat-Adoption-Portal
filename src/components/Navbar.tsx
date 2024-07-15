import {Button, Container, Navbar as NavbarBs, NavLink} from "react-bootstrap"
import { Nav } from "react-bootstrap"

export function Navbar(){
    
    return(
        <NavbarBs className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                </Nav>
                <Button style={{width:"3rem",height:"3rem"}}variant="outline-primary" className="rounded-circle">
                <img src="/public/shopping-cart.svg" width="25" height="25"></img>
                </Button>
            </Container>
        </NavbarBs>
    ) 
}