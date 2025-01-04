import Image from "next/image";
import React from "react";

const FeaturesSection = () => (
  <div className="w-full bg-orange-50 py-8">
    <div className="container mx-auto flex flex-wrap justify-around text-center">
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

const BlogPage = () => {
  const blogPostTitles = [
    "Going all-in with millennial design",
    "Exploring new ways of decorating",
    "Handmade pieces that took time to make",
  ];

  const blogPostContent = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
  ];

  return (
    <div className="bg-gray-100">
      <div
        className="w-full h-64 flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-image.png')" }}
      >
        <h1 className="text-4xl font-bold text-gray-800">Blog</h1>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 px-4 py-10">
        <div className="lg:col-span-3 space-y-10">
          {blogPostTitles.map((title, index) => (
            <article
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div
                className="relative mx-auto"
                style={{
                  width: "817px",
                  height: "500px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={`/images/blog-${index + 1}.jpg`}
                  alt={`Blog Post ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="p-6">
                <h2
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 500,
                    fontSize: "30px",
                    lineHeight: "45px",
                    color: "#000000",
                    width: "632px",
                    height: "45px",
                    marginTop: "20px",
                  }}
                >
                  {title}
                </h2>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: "22.5px",
                    color: "#9F9F9F",
                    width: "817px",
                    height: "115px",
                    marginTop: "20px",
                    textAlign: "justify",
                  }}
                >
                  {blogPostContent[index]}
                </p>
                <button className="mt-4 text-gold font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
        <aside className="space-y-10">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800">Categories</h3>
            <ul className="mt-4 space-y-2">
              {["Design", "Inspiration", "Trends", "Tips"].map((category) => (
                <li
                  key={category}
                  className="text-gray-600 hover:underline cursor-pointer"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-800">Recent Posts</h3>
            <ul className="mt-4 space-y-6">
              {blogPostTitles.map((title, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <div
                    className="relative"
                    style={{
                      width: "211px",
                      height: "80px",
                      borderRadius: "10px",
                      backgroundColor: "#D9D9D9",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={`/images/recent-${index + 1}.jpg`}
                      alt={`Recent Post ${index + 1}`}
                      layout="intrinsic"
                      width={211}
                      height={80}
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "21px",
                        color: "#000000",
                      }}
                    >
                      {title}
                    </p>
                    <span className="text-xs text-gray-500">
                      Jan {index + 1}, 2025
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
      <FeaturesSection />
    </div>
  );
};

export default BlogPage;