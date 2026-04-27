import { BrowserRouter, Routes, Route } from "react-router-dom"
import Products from "./pages/Products"
import SearchResults from "./pages/SearchResults"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  )
}