import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const GadgetDetail = () => {
  

  const { product_id, product_title } = useParams();
  const data = useLoaderData();
  const id = parseInt(product_id);

  const gadget = data.find(gadget => gadget.product_id === id);

  const {product_image} = gadget;
  
  
  return (
    <div>
      <h2>gadget details: {product_id}</h2>
      <img src={product_image} alt="" />
    </div>
  );
};

export default GadgetDetail;

