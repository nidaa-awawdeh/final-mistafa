import React from "react";
// require("mongoose-currency").loadType(mongoose);



function Cart({ cartItems }) {
  const total = cartItems
    ? cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    : 0;

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems && cartItems.length === 0 && <p>Your cart is empty</p>}
      {cartItems && cartItems.length > 0 && (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.qty}
            </li>
          ))}
        </ul>
      )}
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
}

export default Cart;
