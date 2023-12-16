const ProductCard = ({ title, description }) => (
  <div className="bg-camo-green p-4 rounded mb-4 text-white">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-white">{description}</p>
    <button className="mt-4 bg-orange text-white px-4 py-2 rounded-md">
      Add to Cart
    </button>
  </div>
);

export default function BestSellers() {
  return (
    <div
      className=" container mx-auto mt-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Product Cards */}
        <ProductCard title="Product 1" description="Description of Product 1." />
        <ProductCard title="Product 2" description="Description of Product 2." />
        <ProductCard title="Product 3" description="Description of Product 3." />
      </div>
    </div>
  );
}