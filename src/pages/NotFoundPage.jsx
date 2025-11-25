import React from "react";
import { Link } from "react-router-dom";
import notFoundImg from "../assets/images/404message.png";

const NotFoundPage = () => {
  return (
    <section className="h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <img
        src={notFoundImg}
        alt="Page Not Found"
        className="w-64 h-64 mb-6 mx-auto"
      />

      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 max-w-md mb-8">
        The page you're looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default NotFoundPage;
