import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero"
import {getProducts} from "./api/api";
import { useEffect } from "react";

const App = () => {

  useEffect(()=>{
    const getHomeProducts=async()=>{
      try {
        const data=await getProducts();
        console.log(data);
      } catch (error) {
        console.log(error);
      }finally{
        console.log("Running");
      }
    }
    getHomeProducts();
  },[]);
  return (
    <div>
      <Header />
      <Hero />
    </div>
  )
}

export default App