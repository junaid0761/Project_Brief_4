import { useState } from "react";
import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

function Orders() {
  const [quantity, setQuantity] = useState(2);

  const price = 199;
  const deliveryFee = 40;

  const subtotal = price * quantity;
  const total = subtotal + deliveryFee;

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const removeItem = () => {
    setQuantity(0);
  };

  return (
    <div className="orders-page">

      {/* Orders Header */}
      <section className="orders-header">
        <PageTitle
          title="My Orders"
          subtitle="Review your selected items before placing your order."
        />
      </section>

      {/* Orders Content */}
      <section className="orders-content">

        {quantity > 0 ? (
          <Card className="order-item">

            <div className="order-image">🍔</div>

            <div className="order-details">
              <h3>Classic Burger</h3>
              <p>Juicy burger with fresh vegetables.</p>
              <strong>₹{price}</strong>
            </div>

            <div className="quantity-control">
              <button onClick={decreaseQuantity}>−</button>

              <span>{quantity}</span>

              <button onClick={increaseQuantity}>+</button>
            </div>

            <div className="item-total">
              <strong>₹{subtotal}</strong>
            </div>

            <button
              className="remove-btn"
              onClick={removeItem}
            >
              Remove
            </button>

          </Card>
        ) : (
          <div className="empty-orders">
            <h2>Your cart is empty</h2>
            <p>Add some delicious food from the menu.</p>
          </div>
        )}

        {/* Order Summary */}
        {quantity > 0 && (
          <div className="order-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Items</span>
              <span>{quantity}</span>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <strong>₹{total}</strong>
            </div>

            <Button className="checkout-btn">
              Proceed to Checkout
            </Button>
          </div>
        )}

      </section>
    </div>
  );
}

export default Orders;