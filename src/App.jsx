import React from "react";
import {SvgSprite,Header} from "./components";
import {Home, Catalog,NotFound,Cart} from "./pages";
import {Routes, Route} from "react-router-dom"; 
import Footer from "./components/Footer";
import axios from "axios";
function App() {
  const [testServer, setTestServer] = React.useState(0);
  axios.get("https://my-json-server.typicode.com/duglas43/TuoTownduglas43/products").then(res=>{
    setTestServer(res.data[0].name)
  })
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
        <p>{testServer}</p>
        <Footer></Footer>
    </div>
  )
}

export default App;
