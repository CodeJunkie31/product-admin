import type { Product } from "../types/product"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card row">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-img"
      />

      <div>
        <h3>{product.title}</h3>
        <p>R{product.price}</p>
        <p>{product.category}</p>
      </div>
    </div>
  )
}