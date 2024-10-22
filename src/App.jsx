import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import PageCatalog from "./pages/PageCatalog"
import PageCentolla from "./pages/PageCentolla"
import PageContact from "./pages/PageContact"
import Error from "./pages/Error"
import PageAbout from "./pages/PageAbout"
import PageCentollon from "./pages/PageCentollon"
import PageMerluzaA from "./pages/PageMerluzaA"
import PageOstion from "./pages/PageOstion"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/catalog" element={<PageCatalog/>} />
        <Route path="/contact" element={<PageContact/>} />
        <Route path="/about" element={<PageAbout/>}/>
        <Route path="/centolla" element={<PageCentolla/>}/>
        <Route path="/centollon" element={<PageCentollon/>}/>
        <Route path="/merluza-austral" element={<PageMerluzaA/>}/>
        <Route path="/ostion" element={<PageOstion/>}/>
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  )
}

