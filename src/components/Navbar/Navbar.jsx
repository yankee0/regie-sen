import React from "react";
import logo from "../../assets/logo.jpg";
import GlobalMenuPack from "./Menu/GlobalMenuPack";

export default function Navbar() {

  return (
    <nav className="navbar fixed z-10 bg-opacity-50 backdrop-blur-xl bg-secondary shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden text-white hover:text-primary transition-all"
          >
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <GlobalMenuPack />
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-xl avatar">
          <div className="w-10 p-1 bg-white rounded">
            <img src={logo} className="w-auto h-auto" />
          </div>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          <GlobalMenuPack />
        </ul>
      </div>
      <div className="navbar-end">
        <a href="#conctact" className="btn btn-primary text-white">
          Contactez nous
        </a>
      </div>
    </nav>
  );
}
