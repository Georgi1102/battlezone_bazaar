import ak47 from "../images/ak47.jpg";
import m4a1 from "../images/m4a1.jpg";
import sniper from "../images/sniper.png";

const ProductCard = ({ title, description, image }) => (
  <div className="bg-camo-green p-4 rounded mb-4 text-white relative">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-white">{description}</p>
    <button className="mt-4 bg-orange text-white px-4 py-2 rounded-md relative">
      <span className="inline-block transition-transform transform hover:rotate-6">
        Add to Cart 🔫
      </span>
    </button>
    {/* Image box to the right */}
    <img className="absolute top-2.5 right-6 w-44 h-32 bg-cover bg-center bg-no-repeat"
      src={image}
    ></img>
  </div>
);

export default function BestSellers() {
  return (
    <div className="container mx-auto sm:mt-10 md:mt-32 lg:mt-48 xl:mt-64">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Product Cards */}
        <ProductCard
          title="Product 1"
          description="Description of Product 1."
          image={m4a1}
        />
        <ProductCard
          title="Product 2"
          description="Description of Product 2."
          image={ak47}
        />
        <ProductCard
          title="Product 3"
          description="Description of Product 3."
          image={sniper}
        />
      </div>
    </div>
  );
}
