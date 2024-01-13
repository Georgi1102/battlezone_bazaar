import { useEffect, useState } from "react";
import axios from 'axios';
import ak47 from "../images/ak47.jpg";
import m4a1 from "../images/m4a1.jpg";
import sniper from "../images/sniper.png";

const ProductCard = ({ title, description, price, image }) => (
  <div className="text-white ">
    <img className="w-[30vw] h-[30vh]" src={image}></img>
    <div className="flex flex-row justify-between text-2xl">
      <div className="font-bold">{title}</div>
      <div>{price}</div>
    </div>
    <div className="text-xl">{description}</div>
  </div>
);

export default function BestSellers() {
  const [bestSellers, setBestSellers] = useState([]);

  const fetchBestSellers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/bestSellers/get-all");
      console.log(response);
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
      {/* Product Cards */}
      {
        bestSellers.map((product) => {
          <ProductCard
            title={product[0]["product"]["name"]}
            description={product[0]["product"]["description"]}
            price={product[0]["product"]["price"] + "$"}
            image={ak47}
          />
        })
      }

      <ProductCard
        title={bestSellers[1]["product"]["name"]}
        description={bestSellers[1]["product"]["description"]}
        price={bestSellers[1]["product"]["price"] + "$"}
        image={m4a1}
      />
      <ProductCard
        title={bestSellers[2]["product"]["name"]}
        description={bestSellers[2]["product"]["description"]}
        price={bestSellers[2]["product"]["price"] + "$"}
        image={sniper}
      />
    </div>
  );
}