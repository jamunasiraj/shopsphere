import { NavLink, Link } from "react-router-dom";
import { TfiShoppingCartFull } from "react-icons/tfi";

const NavBar = () => {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-white bg-blue-500 hover:bg-blue-500 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-blue-500 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-gray-400 border-b border-gray-400">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* Logo */}
            <Link className="flex shrink-0 items-center mr-4" to="/">
              <TfiShoppingCartFull className="h-10 w-auto" />

              <span className="hidden md:block text-blue-600 text-2xl font-bold ml-2">
                ShopSphere
              </span>
            </Link>

            {/* Nav Links */}
            <div className="md:ml-auto">
              <div className="flex space-x-2">
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
                  Cart 🛒
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
