const CartItem = ({ cartItem }) => {
    // const { name, quantity } = CartItem;
    return (
        <div>
            {cartItem.name} x {cartItem.quantity}
        </div>
    )
}

export default CartItem;