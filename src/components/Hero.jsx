const Hero = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Discover the Latest <br />
            <span className="text-blue-600">Trends & Deals</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            ShopSphere brings you premium quality products at the best prices.
            Explore fashion, electronics, accessories and more with fast
            delivery.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/shop"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
            >
              Shop Now
            </a>
            <a
              href="/categories"
              className="bg-white border border-gray-400 text-gray-700 px-6 py-3 rounded-lg text-lg hover:bg-gray-200 transition"
            >
              Browse Categories
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
            alt="Shopping illustration"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
