import { useCart } from "../context/CartContext";

function CartPage() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return <h1 className="p-6 text-xl">Your cart is Empty</h1>;
  }
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-4 border p-4 rounded-lg">
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-28 h-28 object-cover rounded-md"
            />
            <div className="flex-1">
              <h2 className="font-semibold">{item.title}</h2>
              <p>${item.price}</p>
              <div className="flex items-center gap-3">
                <button
                  className="border px-3 py-1"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="border px-3 py-1"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
            </div>

            <button
              className="text-red-500"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}

        <div className="mt-8 text-right">
          <h2 className="text-2xl font-bold">
            Total: ${totalPrice.toFixed(2)}
          </h2>
        </div>
      </div>
    </div>
  );
}
export default CartPage;
