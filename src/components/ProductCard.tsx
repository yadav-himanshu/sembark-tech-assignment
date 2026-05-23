import { Link } from "react-router-dom";
import type { Product } from "../types/product";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  return (
    <div className="flex flex-col gap-3 border border-gray-400 rounded-lg p-2 hover:shadow-md hover:scale-102 duration-500 transition">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-52 w-full object-cover rounded-md"
        />
      </Link>

      <div className="flex flex-col gap-1">
        <p className="text-sm text-gray-500">{product.category.name}</p>

        <h2 className="font-semibold line-clamp-2">{product.title}</h2>

        <p className="text-lg font-bold">${product.price}</p>
      </div>
      <button
        onClick={() => addToCart(product)}
        className="mt-auto w-full bg-black text-white px-6 py-2 rounded-lg hover:opacity-90"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
