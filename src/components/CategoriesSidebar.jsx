import { Link } from "react-router-dom";

const CategoriesSidebar = ({ categories }) => {
  return (
    <div className="w-1/5 bg-colorWhite flex flex-col px-1 md:px-2 lg:px-6 py-8 rounded-xl h-[25%] my-12">
      {categories.map((category) => (
        <Link
          key={category.category}
          to={`/category/${category.category}`}
          className="btn bg-GadgetBg text-cardGray rounded-3xl px-6 font-medium text-lg mb-5"
        >
          {category.category}
        </Link>
      ))}
     
    </div>
  );
};

export default CategoriesSidebar;
