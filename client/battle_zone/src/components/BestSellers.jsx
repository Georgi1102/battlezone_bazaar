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
  return (
    <div className="flex justify-evenly">
      {/* Product Cards */}
      <ProductCard
        title="Product 1"
        description="Description of Product 1."
        price="350$"
        image={m4a1}
      />
      <ProductCard
        title="Product 2"
        description="Description of Product 2."
        price="400$"
        image={ak47}
      />
      <ProductCard
        title="Product 3"
        description="Description of Product 3."
        price="450$"
        image={sniper}
      />
    </div>
  );
}
