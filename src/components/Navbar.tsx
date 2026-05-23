import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <header className="border-b border-gray-400">
      <div className="max-w-7xl mx-auto p-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Sembark Shop
        </Link>
        <Link to="/cart" className="font-medium">
          {"Cart (" + totalItems + ")"}
        </Link>
      </div>
    </header>
  );
};
export default Navbar;
