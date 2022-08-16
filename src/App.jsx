import React from "react";
import {SvgSprite,Header} from "./components";
import {Home, Catalog,NotFound,Cart} from "./pages";
import {Routes, Route} from "react-router-dom"; 
import Footer from "./components/Footer";
function App() {
  return (
        <div className="App">
        <SvgSprite />
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TuoTownduglas43" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer></Footer>
    </div>
  )
}

export default App;
