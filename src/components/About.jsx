import aboutimg from "../assets/images/aboutimg.jpg";
const About = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center">
          About <span className="text-blue-600">ShopSphere</span>
        </h1>

        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Your trusted destination for smart shopping, best deals, and fast
          delivery.
        </p>

        {/* Section Content */}
        <div className="mt-14 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed">
              ShopSphere is an innovative e-commerce platform offering a wide
              range of products — from fashion and electronics to accessories
              and home essentials. We focus on delivering high-quality products
              at competitive prices while ensuring a seamless shopping
              experience.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To make online shopping simple, affordable, and enjoyable for
              everyone. We provide fast delivery, secure payments, and top-notch
              customer support.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">
              Why Choose Us?
            </h2>
            <ul className="text-gray-600 list-disc ml-6 space-y-2">
              <li>High-quality and verified products</li>
              <li>Fast & reliable shipping</li>
              <li>Affordable pricing</li>
              <li>Customer-first support team</li>
              <li>Easy returns & secure payments</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              className="rounded-xl shadow-lg w-full max-w-md"
              src={aboutimg}
              alt="About ShopSphere"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
