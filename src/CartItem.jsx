import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculates total cost for all cart items
  const calculateTotalAmount = () => {
    return cart
      .reduce((total, item) => {
        const price = parseFloat(item.cost.substring(1));
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  // Calculates total number of plants in the cart
  const calculateTotalPlants = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Goes back to ProductList page
  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping(e);
  };

  // Increases quantity by 1
  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1,
      })
    );
  };

  // Decreases quantity by 1, or removes item if quantity becomes 0
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // Removes selected plant from cart completely
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Calculates subtotal for one plant type
  const calculateTotalCost = (item) => {
    const price = parseFloat(item.cost.substring(1));
    return (price * item.quantity).toFixed(2);
  };

  // Required checkout message
  const handleCheckoutShopping = () => {
    alert('Coming Soon');
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      <div className="cart-summary">
        <h3>Total Plants: {calculateTotalPlants()}</h3>
        <h3>Total Cart Amount: ${calculateTotalAmount()}</h3>
      </div>

      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />

            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">Unit Price: {item.cost}</div>

              <div className="cart-item-quantity">
                <button
                  className="cart-item-button cart-item-button-dec"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>

                <span className="cart-item-quantity-value">
                  {item.quantity}
                </span>

                <button
                  className="cart-item-button cart-item-button-inc"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>

              <div className="cart-item-total">
                Total: ${calculateTotalCost(item)}
              </div>

              <button
                className="cart-item-delete"
                onClick={() => handleRemove(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={handleContinueShopping}>
          Continue Shopping
        </button>

        <button className="get-started-button1" onClick={handleCheckoutShopping}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;