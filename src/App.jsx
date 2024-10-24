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
import PageHuepo from "./pages/PageHuepo"
import PageErizo from "./pages/PageErizo"
import PageCongrio from "./pages/PageCongrio"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/catalog" element={<PageCatalog/>} />
        <Route path="/contact" element={<PageContact/>} />
        <Route path="/about" element={<PageAbout/>}/>
        <Route path="/king-crab" element={<PageCentolla/>}/>
        <Route path="/southern-king-crab" element={<PageCentollon/>}/>
        <Route path="/sea-urchins" element={<PageErizo/>}/>
        <Route path="/southern-scallop" element={<PageOstion/>}/>
        <Route path="/razor-clam" element={<PageHuepo/>}/>
        <Route path="/conger-eel" element={<PageCongrio/>}/>
        <Route path="/southern-hake" element={<PageMerluzaA/>}/>
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  )
}

