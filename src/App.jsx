import Header from "./components/Header/Header";
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
      }
    }
    getHomeProducts();
  },[]);
  return (
    <div>
      <Header/>
    </div>
  )
}

export default App