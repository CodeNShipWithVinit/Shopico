import ProductCard from "../ProductCard/ProductCard"
const HomeProducts = ({products}) => {
  return (
    <div className="grid grid-cols-7">
        {products.map((item,index)=>{
           return <ProductCard key={index} item={item}/>
        })}
    </div>
  )
}

export default HomeProducts