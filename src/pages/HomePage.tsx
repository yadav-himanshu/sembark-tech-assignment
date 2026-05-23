import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productService";
import type { Product } from "../types/product";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/pagination";

function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const Items_Per_Click = 8;
  const [visibleCount, setVisibleCount] = useState(Items_Per_Click);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getAllProducts();
        // console.log(data);
        // console.log(data[0]);
        setProducts(data);
        // setProducts(data.slice(0, 12));
      } catch (error) {
        setError("Something went wrong");
        // console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  if (loading) {
    return <h1 className="p-6">Loading products...</h1>;
  }

  if (error) {
    return <h1 className="p-6 text-red-500">{error}</h1>;
  }
  const visibleProducts = products.slice(0, visibleCount);
  return (
    <div className="p-2">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {visibleProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {visibleCount < products.length && (
        <Pagination
          onclick={() => setVisibleCount((prev) => prev + Items_Per_Click)}
        />
      )}
    </div>
  );
}
export default HomePage;
