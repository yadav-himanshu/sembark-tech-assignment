import { Link } from "react-router-dom";
import type { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="border rounded-lg p-4 hover:shadow-md transition">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-52 w-full object-cover rounded-md"
        />

        <div className="mt-3">
          <p className="text-sm text-gray-500">{product.category.name}</p>

          <h2 className="font-semibold mt-1 line-clamp-2">{product.title}</h2>

          <p className="text-lg font-bold mt-2">${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
