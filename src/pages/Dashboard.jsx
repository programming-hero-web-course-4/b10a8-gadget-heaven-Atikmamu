const Dashboard = () => {
    return (
        <div className="">
        <div className="hero container mx-auto bg-primary py-12">
          <div className="hero-content text-center">
            <div className="">
              <h1 className="text-colorWhite font-bold text-5xl mb-6">
              Dashboard
              </h1>
             
              <p className="text-colorWhite text-base mb-8">
              Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
              </p>
              
             <div className="">
             <button className="btn  bg-colorWhite text-primary rounded-3xl px-14 font-bold text-xl mb-[20%] md:mb-[13%] lg:mb-[9%] border-colorWhite mx-8">
                Cart
              </button>
              <button className="btn bg-colorWhite text-primary rounded-3xl px-14 font-bold text-xl mb-[20%] md:mb-[13%] lg:mb-[9%] border-colorWhite">
                Wishlist
              </button>
             </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;