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
  export default FeaturesSection