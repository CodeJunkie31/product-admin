import { useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import type { ProductResponse } from "../types/product"
import ProductCard from "../components/ProductCard"

export default function SearchResults() {
  const [params] = useSearchParams()
  const query = params.get("q")

  const { data } = useFetch<ProductResponse>(
    query ? `https://dummyjson.com/products/search?q=${query}` : ""
  )

  return (
    <div className="container">
      <h2>Results for: {query}</h2>

      {data?.products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}