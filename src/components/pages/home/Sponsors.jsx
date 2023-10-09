import logo1 from "../../../assets/p-1.png (1).webp";
import logo2 from "../../../assets/p-2.png.webp";
import logo3 from "../../../assets/p-3.png.webp";
import logo4 from "../../../assets/p-4.png.webp";
import logo5 from "../../../assets/p-5.png.webp";
import logo6 from "../../../assets/p-6.png.webp";
import logo7 from "../../../assets/p-7.png.webp";
import logo8 from "../../../assets/p-8.png.webp";

const Sponsors = () => {
  return (
    <div className="bg-[#111344]">
      <h4 className="text-[#e83e8c] text-center pt-16 pb-2">
        PARTNERS & SPONSORS
      </h4>
      <h1 className="text-white text-xl md:text-3xl text-center font-semibold">
        OFFICIAL SPONSOR
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 max-w-7xl mx-5 xl:mx-auto pb-20 mt-12">
        <div className="flex justify-center items-center p-10 border opacity-20 transition-opacity duration-500 ease-in-out delay-10 hover:opacity-100">
          <img src={logo1} alt="" />
        </div>
        <div className="flex justify-center items-center p-10 border opacity-20 transition-opacity duration-500 ease-in-out delay-10 hover:opacity-100">
          <img src={logo2} alt="" />
        </div>
        <div className="flex justify-center items-center p-10 border opacity-20 transition-opacity duration-500 ease-in-out delay-10 hover:opacity-100">
          <img src={logo3} alt="" />
        </div>
        <div className="flex justify-center items-center p-10 border opacity-20 transition-opacity duration-500 ease-in-out delay-10 hover:opacity-100">
          <img src={logo4} alt="" />
        </div>
        <div className="flex justify-center items-center p-10 border opacity-20 transition-opacity duration-500 ease-in-out delay-10 hover:opacity-100">
          <img src={logo5} alt="" />
        </div>
        <div className="flex justify-center items-center p-10 border opacity-20 transition-opacity duration-500 ease-in-out delay-10 hover:opacity-100">
          <img src={logo6} alt="" />
        </div>
        <div className="flex justify-center items-center p-10 border opacity-20 transition-opacity duration-500 ease-in-out delay-10 hover:opacity-100">
          <img src={logo7} alt="" />
        </div>
        <div className="flex justify-center items-center p-10 border opacity-20 transition-opacity duration-500 ease-in-out delay-10 hover:opacity-100">
          <img src={logo8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
