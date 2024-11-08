import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const GadgetsCards = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (gadget) => gadget.category === category
      );
      setGadgets(filteredByCategory);
    } else {
      setGadgets(data.slice(0, 6));
    }
  }, [category, data]);
  console.log(data);

  return (
    <div className="md:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      {gadgets.map((gadget) => (
        <Card key={gadget.product_id} gadget={gadget}></Card>
      ))}
    </div>
  );
};

export default GadgetsCards;
