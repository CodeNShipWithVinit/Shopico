import HeroBg from "../../assets/Hero_Bg_2.jpg"
const Hero = () => {
  return (
    <div className="w-full h-[900px] relative inset-0">
        <img  className="opacity-80 w-full h-full object-cover absolute" src={HeroBg} alt="Hero Background"/>
        <div className="relative z-10 flex flex-column justify-center items-center">
            <h5 className="absolute left-210 top-80 text-white text-2xl">SPRING-SUMMER 2026</h5>
            <h1 className="text-white text-center font-bold text-5xl absolute left-200 top-100">NEW 
                ARRIVALS
            </h1>
            <button className="bg-hover absolute left-230 top-120 px-6 py-4 rounded-md text-white font-bold">Shop Now</button>
        </div>
        
    </div>
  )
}

export default Hero