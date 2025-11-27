import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const cartCount = 3; // Temporary

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-white bg-blue-500 hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 block"
      : "text-white hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 block";

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();
    if (trimmed.length > 0) {
      navigate(`/shop?search=${encodeURIComponent(trimmed)}`);
      setSearchTerm("");
    } else {
      navigate("/shop");
    }
    setMobileMenuOpen(false); // close menu on search submit
  };

  return (
    <nav className="bg-gray-400 border-b border-gray-400">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link className="flex shrink-0 items-center mr-4" to="/">
            <TfiShoppingCartFull className="h-10 w-auto" />
            <span className="hidden md:block text-blue-600 text-2xl font-bold ml-2">
              ShopSphere
            </span>
          </Link>

          {/* Desktop Nav + Search */}
          <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
            <form onSubmit={handleSearchSubmit} className="flex">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-3 py-1 rounded-l-md border border-gray-300 focus:outline-none min-w-[150px]"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700 transition"
              >
                Search
              </button>
            </form>

            <NavLink to="/" className={linkStyle}>
              Home
            </NavLink>
            <NavLink to="/shop" className={linkStyle}>
              Shop
            </NavLink>
            <NavLink to="/categories" className={linkStyle}>
              Categories
            </NavLink>
            <NavLink to="/cart" className={linkStyle}>
              <div className="relative">
                Cart 🛒
                {cartCount > 0 && (
                  <span
                    className="
                      absolute -top-3 -right-3 
                      bg-red-600 text-white text-xs 
                      px-1 py-0.4 rounded-full
                    "
                  >
                    {cartCount}
                  </span>
                )}
              </div>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex md:hidden items-center justify-center p-2 rounded-md text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <HiOutlineX className="block h-6 w-6" />
            ) : (
              <HiOutlineMenu className="block h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-500 px-2 pt-2 pb-3 space-y-1">
          <form onSubmit={handleSearchSubmit} className="flex mb-3">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow px-3 py-1 rounded-l-md border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700 transition"
            >
              Search
            </button>
          </form>

          <NavLink
            onClick={() => setMobileMenuOpen(false)}
            to="/"
            className={linkStyle}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setMobileMenuOpen(false)}
            to="/shop"
            className={linkStyle}
          >
            Shop
          </NavLink>
          <NavLink
            onClick={() => setMobileMenuOpen(false)}
            to="/categories"
            className={linkStyle}
          >
            Categories
          </NavLink>
          <NavLink
            onClick={() => setMobileMenuOpen(false)}
            to="/cart"
            className={linkStyle}
          >
            <div className="relative">
              Cart 🛒
              {cartCount > 0 && (
                <span
                  className="
                    absolute -top-3 -right-3 
                    bg-red-600 text-white text-xs 
                    px-1 py-0.4 rounded-full
                  "
                >
                  {cartCount}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
