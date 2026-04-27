import ProductList from "../components/ProductList"
import ProductSearch from "../components/ProductSearch"

export default function Products() {
  return (
    <div className="container">
      <h1>Product Dashboard</h1>
      <ProductSearch />
      <ProductList />
    </div>
  )
}