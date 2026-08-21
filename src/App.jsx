import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Categories from "./pages/Categories/Categories";
import Deals from "./pages/Deals/Deals";
import NewArrivals from "./pages/NewArrivals/NewArrivals";
// import { getProducts } from "./api/api";
// import { useEffect } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/deals" element={<Deals/>}/>
        <Route path="/newArrivals" element={<NewArrivals/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
