import React from "react";
import {SvgSprite,Header,Footer} from "./components";
import {Home, Catalog,NotFound,Cart} from "./pages";
import {Routes, Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchCatalogProducts} from "./redux/actions/catalogProducts";
import {setCategory} from "./redux/actions/categories";
import addProductToCart from "./redux/actions/cart";
function App() {
  const dispatch = useDispatch();
  function onSelectCategory(category,subcategory,filter) {
    dispatch(setCategory(category,subcategory));
    dispatch(fetchCatalogProducts(filter));
  }
  return (
        <div className="App">
        <SvgSprite />
        <Header onSelectCategory={onSelectCategory}></Header>
        <Routes>
          <Route path="/" element={<Home onSelectCategory={onSelectCategory} />} />
          <Route path="/TuoTownduglas43" element={<Home onSelectCategory={onSelectCategory}/>} />
          <Route path="/catalog" element={<Catalog onSelectCategory={onSelectCategory}/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer onSelectCategory={onSelectCategory}></Footer>
    </div>
  )
}

export default App;
