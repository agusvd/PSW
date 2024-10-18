import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import PageCatalog from "./pages/PageCatalog"
import PageCentolla from "./pages/PageCentolla"
import PageContact from "./pages/PageContact"
import Error from "./pages/error"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/catalog" element={<PageCatalog/>} />
        <Route path="/contact" element={<PageContact/>} />
        <Route path="/centolla" element={<PageCentolla/>}/>
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  )
}

