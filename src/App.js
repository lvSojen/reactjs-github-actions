import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"

function App() {
  return (
    <BrowserRouter>
      <main className="py-3">
        <Routes>
          <Route path="/" element={<HomeScreen />} exact></Route>
          <Route path="/product" element={<ProductScreen />}></Route>
          {/* <Route path="/product/:id" element={<ProductScreen />}></Route> */}
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
