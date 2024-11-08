import { useNavigate } from "react-router-dom";
import GadgetsCards from "./GadgetsCards";

const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className="">
      <div className="hero bg-primary container mx-auto py-12">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-colorWhite font-bold text-5xl mb-6">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
            </h1>
           
            <p className="text-colorWhite text-base mb-8">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
            </p>
            
            <button  onClick={ () => navigate('/gadgets')} className="btn bg-colorWhite text-primary rounded-3xl px-6 font-bold text-xl mb-[26%] md:mb-[20%] lg:mb-[20%]">
             Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
