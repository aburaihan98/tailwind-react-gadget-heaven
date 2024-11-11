import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

export default function Cards() {
  const data = useLoaderData();
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      const categoriesData = [...data].filter(
        (product) => product?.category === category.toLocaleLowerCase()
      );
      setProducts(categoriesData);
    } else {
      setProducts(data.slice(0, 9));
    }
  }, [data, category]);

  return (
    <div className="grid grid-cols-3 gap-6">
      {products &&
        products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
    </div>
  );
}
