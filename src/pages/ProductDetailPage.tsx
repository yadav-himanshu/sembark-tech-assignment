import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../services/productService";
import type { Product } from "../types/product";

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        if (!id) return;

        const data = await getSingleProduct(id);
        // console.log(data);
        setProduct(data);
      } catch (error) {
        // console.error(error);
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <h1 className="p-6">Loading product...</h1>;
  }
  if (error) {
    return <h1 className="p-6 text-red-500">{error}</h1>;
  }
  if (!product) {
    return <h1 className="p-6">Product Not fount</h1>;
  }
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-[450px] object-cover rounded-lg"
          />
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-2">{product.category.name}</p>

          <h1 className="text-3xl font-bold">{product.title}</h1>

          <p className="text-2xl font-semibold mt-4">${product.price}</p>

          <p className="text-gray-700 mt-6 leading-7">{product.description}</p>

          <button className="mt-8 bg-black text-white px-6 py-3 rounded-lg hover:opacity-90">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductDetailPage;
