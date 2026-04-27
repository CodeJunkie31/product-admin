import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import type { ProductResponse } from "../types/product"

export default function ProductSearch() {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const { data } = useFetch<ProductResponse>(
    query ? `https://dummyjson.com/products/search?q=${query}` : ""
  )

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />

      <button
        onClick={() => navigate(`/search?q=${query}`)}
        disabled={!query.trim()}
      >
        Search
      </button>

      {/* Dropdown */}
      {data?.products.slice(0, 5).map((p) => (
        <p key={p.id} onClick={() => navigate(`/products/${p.id}`)}>
          {p.title}
        </p>
      ))}
    </div>
  )
}