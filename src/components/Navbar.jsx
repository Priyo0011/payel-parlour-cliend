import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  const navLinks = (
    <>
      <li className="mr-6">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "font-bold" : "font-medium")}
        >
          Home
        </NavLink>
      </li>
      <li className="mr-6">
        <NavLink
          to="a"
          className={({ isActive }) => (isActive ? "font-bold" : "font-medium")}
        >
          Our Portfolio
        </NavLink>
      </li>
      <li className="mr-6">
        <NavLink
          to="b"
          className={({ isActive }) => (isActive ? "font-bold" : "font-medium")}
        >
          Our Team
        </NavLink>
      </li>
      <li className="mr-6">
        <NavLink
          to="c"
          className={({ isActive }) => (isActive ? "font-bold" : "font-medium")}
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <Link to="/login">
          <button className=" font-semibold">Login</button>
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-50 max-w-[1400px] md:px-8 md:py-4 mt-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] shadow rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="">
            <img
              className="rounded-full"
              src={logo}
              alt="logo"
              width="100"
              height="100"
            />
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-6 text-sm">{navLinks}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
