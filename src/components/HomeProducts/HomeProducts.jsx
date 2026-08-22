import ProductCard from "../ProductCard/ProductCard"
const HomeProducts = ({products}) => {
  return (
    <div className="grid grid-cols-1 p-5 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {products.map((item,index)=>{
           return <ProductCard key={index} item={item}/>
        })}
    </div>
  )
}

export default HomeProducts