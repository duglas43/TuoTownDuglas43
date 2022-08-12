import {SvgSprite,Header} from "./components";
import {Home, Catalog} from "./pages";
import {Routes, Route} from "react-router-dom"; 
import Footer from "./components/Footer";
function App() {
  return (
        <div className="App">
        <SvgSprite />
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
        <Footer></Footer>
    </div>
  )
}

export default App;
