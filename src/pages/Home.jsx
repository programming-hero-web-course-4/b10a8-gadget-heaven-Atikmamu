import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import BannerImage from "../components/BannerImage";
import CategoriesSidebar from "../components/CategoriesSidebar";
import Heading from "../components/Heading";

const Home = () => {
    const categories = useLoaderData()
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <div className="relative flex-1">
        <div className="pb-64 md:pb-56 lg:pb-[18%]">
          <Banner></Banner>
        </div>
        <div className="absolute top-[50%] ml-14 md:ml-[17%] lg:ml-[25%]  md:top-[43%] lg:top-[43%] min-h-screen w-10/12 md:size-8/12 lg:w-6/12  container mx-auto">
          <BannerImage></BannerImage>,
        </div>
      </div>

      {/* Heading */}
      <Heading title={"Explore Cutting-Edge Gadgets"}></Heading>

      {/* Cutting-Edge Gadgets section */}
      <section className="flex flex-col md:flex-row gap-6 container mx-auto bg-GadgetBg">
        {/* Categories Sidebar */}
        <CategoriesSidebar categories={categories}></CategoriesSidebar>

        {/* Gadgets Cards */}
        

        {/* Dynamic Nested Component */}
        <Outlet></Outlet>

      </section>
    </div>
  );
};

export default Home;
