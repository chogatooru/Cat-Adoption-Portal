import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json"; 
import { formatCurrency } from "../utilities/formatCurrency";

type ShoppingCartProps = {
    isOpen: boolean;
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart();

    const total = cartItems.reduce((total, cartItem) => {
        const item = storeItems.find(i => i.id === cartItem.id);
        return total + (item?.price || 0) * cartItem.quantity;
    }, 0);

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </Stack>
                <div className="ms-auto fw-bold fs-5 mt-3">
                    Total: {formatCurrency(total)}
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
