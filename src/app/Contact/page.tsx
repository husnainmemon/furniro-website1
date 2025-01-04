import React from "react";

const FeaturesSection = () => (
  <div className="w-full bg-orange-50 py-8">
    <div className="container mx-auto flex flex-wrap justify-around text-center">
      <div className="flex items-center space-x-4">
        <img src="/images/trophy 1.png" alt="High Quality" className="w-10 h-10" />
        <div>
          <h4 className="font-bold">High Quality</h4>
          <p className="text-sm text-gray-600">Crafted from top materials</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <img src="/images/guarantee.png" alt="Warranty Protection" className="w-10 h-10" />
        <div>
          <h4 className="font-bold">Warranty Protection</h4>
          <p className="text-sm text-gray-600">Over 2 years</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <img src="/images/shipping.png" alt="Free Shipping" className="w-10 h-10" />
        <div>
          <h4 className="font-bold">Free Shipping</h4>
          <p className="text-sm text-gray-600">Order over $150</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <img src="/images/customer-support.png" alt="24/7 Support" className="w-10 h-10" />
        <div>
          <h4 className="font-bold">24/7 Support</h4>
          <p className="text-sm text-gray-600">Dedicated support</p>
        </div>
      </div>
    </div>
  </div>
);

const ContactPage = () => {
  return (
    <div className="font-sans text-black">
      <div
        className="w-full h-64 flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-image.png')" }}
      >
        <h1 className="text-4xl font-bold text-black">Contact Us</h1>
        <nav className="mt-2 text-sm text-gray-600">
          <a href="/" className="hover:text-gray-800">
            Home
          </a>{" "}
          <span>&gt;</span>{" "}
          <span className="text-black font-medium">Contact Us</span>
        </nav>
      </div>

      <div className="w-full py-12 px-8 flex justify-center">
        <div className="w-full max-w-screen-xl text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "36px",
              color: "black",
            }}
          >
            Get In Touch With Us
          </h2>
          <p
            className="text-lg text-black mb-8"
            style={{
              fontFamily: "Poppins",
              fontSize: "19px",
              fontWeight: "500",
              lineHeight: "24px",
              color: "black",
            }}
          >
            For More Information About Our Product & Services, Please Feel Free To Drop Us An
            Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>
      </div>

      <div className="w-full py-12 px-8 flex justify-center">
        <div className="flex w-full max-w-screen-xl">
          <div className="w-full sm:w-1/3 flex flex-col gap-6">
            <div className="text-black">
              <div className="mb-4">
                <h3
                  className="font-bold text-xl"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: "700",
                    lineHeight: "30px",
                    color: "black",
                  }}
                >
                  Address
                </h3>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
              <div className="mb-4">
                <h3
                  className="font-bold text-xl"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: "700",
                    lineHeight: "30px",
                    color: "black",
                  }}
                >
                  Working Time
                </h3>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
              <div className="mb-4">
                <h3
                  className="font-bold text-xl"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: "700",
                    lineHeight: "30px",
                    color: "black",
                  }}
                >
                  Phone
                </h3>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-2/3 bg-white p-8 rounded-lg shadow">
            <form>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="font-bold text-lg text-black"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: "700",
                      lineHeight: "28px",
                      color: "black",
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="p-3 border border-gray-300 rounded-md mt-1"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="font-bold text-lg text-black"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: "700",
                      lineHeight: "28px",
                      color: "black",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="p-3 border border-gray-300 rounded-md mt-1"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="subject"
                    className="font-bold text-lg text-black"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: "700",
                      lineHeight: "28px",
                      color: "black",
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="p-3 border border-gray-300 rounded-md mt-1"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="font-bold text-lg text-black"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      fontWeight: "700",
                      lineHeight: "28px",
                      color: "black",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="p-3 border border-gray-300 rounded-md mt-1"
                    rows="5"
                    required
                  />
                </div>
              </div>

              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <FeaturesSection />
    </div>
  );
};

export default ContactPage;