import HeroBg from "../../assets/Hero_Bg_3.jpg";
const Hero = () => {
  return (
    <div
      className="w-full h-225 flex flex-col bg-cover bg-center justify-center items-center"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <div className="flex flex-col gap-4 justify-center items-center sm:-translate-x-12">
        <h5 className="text-white text-2xl">SPRING-SUMMER 2026</h5>
        <h1 className="text-white text-center font-bold text-5xl">
          NEW ARRIVALS
        </h1>
        <p className="text-white text-lg sm:text-2xl text-center px-4 max-wd-lg">
          Discover the latest styles and elevate your everyday look.
        </p>
        <button className="bg-hover px-6 py-4 rounded-md text-white font-bold active:scale-95 cursor-pointer">
          Shop Now
        </button>

        <span className="text-white font-bold text-sm sm:text-base">
          Free shipping on orders over ₹999
        </span>
      </div>
    </div>
  );
};

export default Hero;
