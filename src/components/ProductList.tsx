import { useFetch } from "../hooks/useFetch"
import type { ProductResponse } from "../types/product"
import ProductCard from "./ProductCard"

export default function ProductList() {
  const { data } = useFetch<ProductResponse>(
    "https://dummyjson.com/products?limit=10"
  )

  return (
    <div>
      <h2>Products</h2>

      {data?.products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}