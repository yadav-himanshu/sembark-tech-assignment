import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productService";
import type { Product } from "../types/product";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/pagination";
import { useSearchParams } from "react-router-dom";

function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const Items_Per_Click = 8;
  const [visibleCount, setVisibleCount] = useState(Items_Per_Click);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortOrder, setSortOrder] = useState(searchParams.get("sort") || "");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get("category")
      ? searchParams.get("category")!.split(",")
      : [],
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getAllProducts();
        // console.log(data);
        console.log(data[0]);
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
  useEffect(() => {
    const params: Record<string, string> = {};
    if (selectedCategories.length > 0) {
      params.category = selectedCategories.join(",");
    }
    if (sortOrder) {
      params.sort = sortOrder;
    }
    setSearchParams(params);
  }, [selectedCategories, sortOrder, setSearchParams]);
  const categories = [...new Set(products.map((item) => item.category.slug))];
  let filteredProducts = [...products];
  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter((item) =>
      selectedCategories.includes(item.category.slug),
    );
  }
  if (sortOrder === "high-to-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }
  if (sortOrder === "low-to-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }
  if (loading) {
    return <h1 className="p-6">Loading products...</h1>;
  }

  if (error) {
    return <h1 className="p-6 text-red-500">{error}</h1>;
  }
  const visibleProducts = filteredProducts.slice(0, visibleCount);
  return (
    <div className="p-2">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="flex justify-between gap-2 flex-wrap mb-4">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              setSelectedCategories([]);
              setSortOrder("");
            }}
            className="border border-gray-400 rounded-sm px-4 py-1 text-sm bg-gray-800 text-white"
          >
            Clear All
          </button>
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedCategories((prev) => [...prev, category]);
                  } else {
                    setSelectedCategories((prev) =>
                      prev.filter((item) => item !== category),
                    );
                  }
                }}
              />
              {category}
            </label>
          ))}
        </div>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-400 p-2 rounded-lg"
        >
          <option value="">Sort by</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {visibleProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {visibleCount < filteredProducts.length && (
        <Pagination
          onclick={() => setVisibleCount((prev) => prev + Items_Per_Click)}
        />
      )}
    </div>
  );
}
export default HomePage;
