import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import PageCatalog from "./pages/PageCatalog"
import PageCentolla from "./pages/PageCentolla"
import PageContact from "./pages/PageContact"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/catalog" element={<PageCatalog/>} />
        <Route path="/contact" element={<PageContact/>} />
        <Route path="/centolla" element={<PageCentolla/>}/>
      </Routes>
    </BrowserRouter>
  )
}

