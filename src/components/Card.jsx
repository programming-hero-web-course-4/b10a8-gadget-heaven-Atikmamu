import { Link } from "react-router-dom";

const Card = ({ gadget }) => {
  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    Specification,
    availability,
    rating,
  } = gadget || {};
  return (
    <div className="flex relative">
      <div className="card transition card-compact bg-base-100 rounded-xl overflow-hidden hover:scale-105 w-96">
  <figure className="h-80 w-[95%] overflow-hidden">
    <img
      src={product_image} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product_title}</h2>
    <p>Price: {price}</p>
    <div className="card-actions justify-start">
      <Link to={`/gadget/${product_id}`} className="btn border-primary rounded-3xl text-primary bg-colorWhite">view Details</Link>
    </div>
  </div>
  </div>
</div>
  )
  
};

export default Card;
