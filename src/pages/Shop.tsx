import { useSearchParams } from "react-router-dom";
import { PRODUCTS } from "../constants";
import ProductCard from "../components/ProductCard";
import { useState, useMemo } from "react";
import { Filter, ChevronDown } from "lucide-react";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter);
    }
    
    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") result.sort((a, b) => b.price - a.price);
    if (sortBy === "newest") result.sort((a, b) => (a.isNew ? -1 : 1));
    
    return result;
  }, [categoryFilter, sortBy]);

  const categories = ["All", "Tops", "Bottoms", "Knitwear"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter uppercase">
          {categoryFilter ? categoryFilter : "Shop All"}
        </h1>
        <p className="text-sm text-gray-500 max-w-2xl">
          Discover our full collection of premium essentials. Every piece is designed with purpose and crafted with the finest materials.
        </p>
      </div>

      {/* Filters & Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-center py-6 border-y border-gray-100 gap-6">
        <div className="flex items-center space-x-4 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                if (cat === "All") {
                  searchParams.delete("category");
                } else {
                  searchParams.set("category", cat);
                }
                setSearchParams(searchParams);
              }}
              className={`text-[10px] font-bold uppercase tracking-widest px-6 py-2 border transition-all whitespace-nowrap ${
                (cat === "All" && !categoryFilter) || categoryFilter === cat
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-500 border-gray-200 hover:border-black hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-6 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-gray-500">
            <Filter size={14} />
            <span>Filter</span>
          </div>
          <div className="relative group">
            <button className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest">
              <span>Sort: {sortBy.replace("-", " ")}</span>
              <ChevronDown size={14} />
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
              {[
                { label: "Featured", value: "featured" },
                { label: "Newest", value: "newest" },
                { label: "Price: Low to High", value: "price-low" },
                { label: "Price: High to Low", value: "price-high" }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSortBy(option.value)}
                  className="w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="py-24 text-center space-y-4">
          <h3 className="text-xl font-bold uppercase tracking-widest">No products found</h3>
          <p className="text-sm text-gray-500">Try adjusting your filters or checking back later.</p>
          <button
            onClick={() => setSearchParams({})}
            className="bg-black text-white text-xs font-bold uppercase tracking-widest px-8 py-3 hover:bg-gray-800 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
