const Heading = ({ title, subtitle, button }) => {
  return (
    <div className="container mx-auto">
      <h1 className="flex justify-center text-[#0B0B0B] font-bold text-4xl mt-20 md:mt-12 lg:-mt-8">
        {title}
      </h1>
      <p>{subtitle}</p>
      <button>{button}</button>
    </div>
  );
};

export default Heading;
