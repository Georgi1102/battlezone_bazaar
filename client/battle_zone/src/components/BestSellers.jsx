import { useEffect, useState } from "react";
import axios from 'axios';
import ProductCard from "./ProductCard";


export default function BestSellers() {
  const [bestSellers, setBestSellers] = useState([]);

  const fetchBestSellers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/bestSellers/get-all");
      setBestSellers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (bestSellers.length === 0) {
      fetchBestSellers();
    }
  }, [bestSellers]);

  if (bestSellers.length < 3) {
    return null;
  }

  return (
    <div className="flex justify-evenly">
      {
        bestSellers.slice(0, 3).map((bestSellingProducts) => (
          <ProductCard
            key={bestSellingProducts.product.id}
            title={bestSellingProducts.product.name}
            description={bestSellingProducts.product.description}
            price={bestSellingProducts.product.price + "$"}
            image={bestSellingProducts.product.imageUrl}
          />
        ))
      }
    </div>
  );
}