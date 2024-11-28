import React, { useState } from "react";
import Mylogo from "../assets/Mylogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import profile2 from "../assets/profile2.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400">
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={Mylogo}
        alt="My Logo"
      />

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">Home</li>
        </NavLink>
        <NavLink to="/Doctors">
          <li className="py-1">All Doctors</li>
        </NavLink>
        <NavLink to="/About">
          <li className="py-1">About</li>
        </NavLink>
        <NavLink to="/Contact">
          <li className="py-1">Contact</li>
        </NavLink>
        <NavLink to="/BasicRemedies">
          <li className="py-1">Basic Remedies</li>
        </NavLink>
        <NavLink to="/Ayurveda">
          <li className="py-1">Ayurvedic Section</li>
        </NavLink>
      </ul>

      {/* User Profile / Authentication Section */}
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={profile2} alt="User Avatar" />
            <img
              className="w-2.5"
              src={assets.dropdown_icon}
              alt="Dropdown Icon"
            />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointment
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create account
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt="Menu Icon"
        />
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="fixed w-full h-full top-0 right-0 z-20 bg-white">
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="Mobile Logo" />
            <img
              className="w-7 cursor-pointer"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt="Close Menu Icon"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <li className="px-4 py-2 rounded-full">Home</li>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors">
              <li className="px-4 py-2 rounded-full">All Doctors</li>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <li className="px-4 py-2 rounded-full">About</li>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <li className="px-4 py-2 rounded-full">Contact</li>
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
