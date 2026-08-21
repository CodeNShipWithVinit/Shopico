import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"
import Footer from "../../components/Footer/Footer"
import HomeProducts from "../../components/HomeProducts/HomeProducts";
import { useState,useEffect } from "react";
import {getProducts} from "../../api/api"
const Home = () => {

  const [products,setProducts]=useState([])

  useEffect(()=>{
    const getHomeProducts=async()=>{
      try {
        const data=await getProducts();
        console.log(data);
        setProducts(data);
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
        <Header/>
        <Hero/>
        <HomeProducts products={products}/>
        <Footer />
    </div>
  )
}

export default Home