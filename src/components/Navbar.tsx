import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Shop
        </Link>
        <Link to="/cart" className="font-medium">
          Cart({totalItems})
        </Link>
      </div>
    </header>
  );
};
export default Navbar;
