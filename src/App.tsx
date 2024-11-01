import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import RootLayout from "./pages/layouts/RootLayout"
import Shop from "./pages/shop"
import Faqs from "./pages/faqs"
import About from "./pages/about"

function App() {

  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  )
}

export default App
