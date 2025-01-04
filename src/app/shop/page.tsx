import Link from "next/link";
import React from "react";

const ShopPage = () => {
  return (
    <div className="font-sans text-gray-700">
      {/* Banner Section */}
      <div
        className="w-full h-64 flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-image.png')" }}
      >
        <h1 className="text-4xl font-bold text-gray-800">Shop</h1>
        <nav className="mt-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-800">
            Home
          </Link>{" "}
          <span>&gt;</span>{" "}
          <span className="text-gray-800 font-medium">Shop</span>
        </nav>
      </div>

      {/* Filter and Sort Section */}
      <div className="w-full bg-orange-100 py-4 px-8 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
            <span className="material-icons">filter_list</span>
            <span className="font-medium">Filter</span>
          </button>
          <div className="flex space-x-2">
            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100">
              <span className="material-icons">grid_view</span>
            </button>
            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100">
              <span className="material-icons">view_list</span>
            </button>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          Showing <span className="font-semibold">1–16</span> of{" "}
          <span className="font-semibold">32</span> results
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Show</span>
          <input
            type="text"
            value="16"
            readOnly
            className="w-12 border border-gray-300 rounded-md text-center py-1"
          />
          <span className="text-sm">Sort by</span>
          <select className="border border-gray-300 rounded-md px-2 py-1 text-sm">
            <option>Default</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <ProductGrid />

      {/* Features Section */}
      <FeaturesSection />
    </div>
  );
};

const FeaturesSection = () => (
  <div className="w-full bg-orange-50 py-8">
    <div className="container mx-auto flex flex-wrap justify-around text-center">
      {/* High Quality */}
      <div className="flex items-center space-x-4">
        <img
          src="/images/trophy 1.png"
          alt="High Quality"
          className="w-10 h-10"
        />
        <div>
          <h4 className="font-bold">High Quality</h4>
          <p className="text-sm text-gray-600">Crafted from top materials</p>
        </div>
      </div>

      {/* Warranty Protection */}
      <div className="flex items-center space-x-4">
        <img
          src="/images/guarantee.png"
          alt="Warranty Protection"
          className="w-10 h-10"
        />
        <div>
          <h4 className="font-bold">Warranty Protection</h4>
          <p className="text-sm text-gray-600">Over 2 years</p>
        </div>
      </div>

      {/* Free Shipping */}
      <div className="flex items-center space-x-4">
        <img
          src="/images/shipping.png"
          alt="Free Shipping"
          className="w-10 h-10"
        />
        <div>
          <h4 className="font-bold">Free Shipping</h4>
          <p className="text-sm text-gray-600">Order over $150</p>
        </div>
      </div>

      {/* 24/7 Support */}
      <div className="flex items-center space-x-4">
        <img
          src="/images/customer-support.png"
          alt="24/7 Support"
          className="w-10 h-10"
        />
        <div>
          <h4 className="font-bold">24/7 Support</h4>
          <p className="text-sm text-gray-600">Dedicated support</p>
        </div>
      </div>
    </div>
  </div>
);

const ProductCard = ({ product }) => (
  <div className="relative group bg-white border rounded-lg shadow hover:shadow-lg overflow-hidden">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover"
    />
    {product.badge && (
      <div className="absolute top-2 left-2 bg-yellow-400 text-white text-xs px-2 py-1 rounded">
        {product.badge}
      </div>
    )}
    <div className="p-4">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500 text-sm">{product.description}</p>
      <div className="mt-2 flex items-center space-x-2">
        <span className="text-lg font-bold text-gray-800">{product.price}</span>
        {product.originalPrice && (
          <span className="text-sm text-gray-400 line-through">
            {product.originalPrice}
          </span>
        )}
      </div>
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-sm text-white bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600">
        Add to cart
      </button>
    </div>
  </div>
);

const ProductGrid = () => (
  <div className="p-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

const products = [
  { id: 1, name: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000", originalPrice: "Rp 3.500.000", image: "/images/image-1.png", badge: "-30%" },
  { id: 2, name: "Leviosa", description: "Stylish cafe chair", price: "Rp 2.500.000", image: "/images/image-2.png" },
  { id: 3, name: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000", originalPrice: "Rp 14.000.000", image: "/images/image-3.png", badge: "-50%" },
  { id: 4, name: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000", image: "/images/image-4.png", badge: "New" },
  { id: 5, name: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000", originalPrice: "Rp 3.500.000", image: "/images/image-1.png", badge: "-30%" },
  { id: 6, name: "Leviosa", description: "Stylish cafe chair", price: "Rp 2.500.000", image: "/images/image-2.png" },
  { id: 7, name: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000", originalPrice: "Rp 14.000.000", image: "/images/image-3.png", badge: "-50%" },
  { id: 8, name: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000", image: "/images/image-4.png", badge: "New" },
  { id: 9, name: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000", originalPrice: "Rp 3.500.000", image: "/images/image-1.png", badge: "-30%" },
  { id: 10, name: "Leviosa", description: "Stylish cafe chair", price: "Rp 2.500.000", image: "/images/image-2.png" },
  { id: 11, name: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000", originalPrice: "Rp 14.000.000", image: "/images/image-3.png", badge: "-50%" },
  { id: 12, name: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000", image: "/images/image-4.png", badge: "New" },
  { id: 13, name: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000", originalPrice: "Rp 3.500.000", image: "/images/image-1.png", badge: "-30%" },
  { id: 14, name: "Leviosa", description: "Stylish cafe chair", price: "Rp 2.500.000", image: "/images/image-2.png" },
  { id: 15, name: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000", originalPrice: "Rp 14.000.000", image: "/images/image-3.png", badge: "-50%" },
  { id: 16, name: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000", image: "/images/image-4.png", badge: "New" }
];

export default ShopPage;