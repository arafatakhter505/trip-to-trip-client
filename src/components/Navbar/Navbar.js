import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import Button from "../Button/Button";
import menuItems from "./../../routes/menuItems";

const Navbar = () => {
  return (
    <nav className="bg-base-100 py-3 shadow">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems.map((item) => (
                <li key={item.link}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to={"/"}>
            <img src={logo} alt="triptotrip" className="w-[200px]" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex w-1/2">
          <div className="form-control w-full">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search places…"
                className="input input-bordered w-full"
              />
              <button className="btn btn-square bg-primary hover:bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {menuItems.map((item) => (
                <li key={item.link}>
                  <Link to={item.link} className="font-semibold">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Button title={"Login"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
