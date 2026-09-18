import React, { useState } from "react";
import Mylogo from "../../assets/Mylogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import profile2 from "../../assets/profile2.jpg";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [token, setToken] = useState(true);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Find Doctors", path: "/Doctors" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contact" },
    { name: "Health Tips", path: "/BasicRemedies" },
    { name: "Ayurveda", path: "/Ayurveda" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="h-[78px] flex items-center justify-between">

            {/* ================= LOGO ================= */}
            <button
              onClick={() => navigate("/")}
              className="flex items-center shrink-0 cursor-pointer"
            >
              <img
                src={Mylogo}
                className="w-[150px] sm:w-[165px] object-contain"
                alt="Medi-call"
              />
            </button>

            {/* ================= DESKTOP NAV ================= */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-3.5 py-2.5 rounded-xl text-[13px] xl:text-sm font-medium transition-all duration-200
                    ${
                      isActive
                        ? "text-blue-600 bg-blue-50"
                        : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* ================= RIGHT SECTION ================= */}
            <div className="flex items-center gap-2 sm:gap-3">

              {/* Search */}
              <button
                onClick={() => navigate("/Doctors")}
                className="hidden sm:flex w-10 h-10 items-center justify-center rounded-xl
                border border-slate-200 text-slate-500
                hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50
                transition-all duration-200"
                aria-label="Find doctors"
              >
                <svg
                  className="w-[18px] h-[18px]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="6.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M16 16L21 21"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* Notification */}
              {token && (
                <button
                  className="hidden sm:flex relative w-10 h-10 items-center justify-center
                  rounded-xl border border-slate-200 text-slate-500
                  hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50
                  transition-all duration-200"
                  aria-label="Notifications"
                >
                  <svg
                    className="w-[18px] h-[18px]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18 9C18 5.6 15.8 3.5 12 3.5C8.2 3.5 6 5.6 6 9V13L4 16H20L18 13V9Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 19C10.5 20 11.2 20.5 12 20.5C12.8 20.5 13.5 20 14 19"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>

                  <span className="absolute top-[8px] right-[8px] w-1.5 h-1.5 bg-red-500 rounded-full border border-white" />
                </button>
              )}

              {/* ================= PROFILE ================= */}
              {token ? (
                <div className="relative">

                  <button
                    onClick={() => setShowProfile(!showProfile)}
                    className="flex items-center gap-2 sm:gap-2.5
                    p-1 rounded-xl hover:bg-slate-50 transition-all duration-200"
                  >
                    <img
                      src={profile2}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover
                      border border-slate-200"
                      alt="User"
                    />

                    <div className="hidden md:flex flex-col items-start leading-tight">
                      <span className="text-[12px] font-semibold text-slate-800">
                        Hi, Puneet
                      </span>
                      <span className="text-[10px] text-slate-400">
                        Patient
                      </span>
                    </div>

                    <img
                      src={assets.dropdown_icon}
                      className={`w-2.5 mr-1 transition-transform duration-200 ${
                        showProfile ? "rotate-180" : ""
                      }`}
                      alt="Dropdown"
                    />
                  </button>

                  {/* Profile Dropdown */}
                  {showProfile && (
                    <div className="absolute right-0 top-[58px] w-[230px]">

                      <div className="bg-white border border-slate-100 rounded-2xl
                      shadow-[0_15px_50px_rgba(15,23,42,0.12)]
                      overflow-hidden">

                        {/* User Info */}
                        <div className="px-4 py-4 bg-slate-50 border-b border-slate-100">
                          <div className="flex items-center gap-3">
                            <img
                              src={profile2}
                              className="w-11 h-11 rounded-xl object-cover"
                              alt="Profile"
                            />

                            <div>
                              <p className="text-sm font-semibold text-slate-800">
                                Puneet
                              </p>
                              <p className="text-xs text-slate-400">
                                Patient account
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Menu */}
                        <div className="p-2">

                          <button
                            onClick={() => {
                              navigate("/my-profile");
                              setShowProfile(false);
                            }}
                            className="w-full flex items-center gap-3 px-3 py-3
                            rounded-xl text-left text-sm text-slate-600
                            hover:bg-blue-50 hover:text-blue-600
                            transition-colors"
                          >
                            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100">
                              👤
                            </span>

                            <span>My Profile</span>
                          </button>

                          <button
                            onClick={() => {
                              navigate("/my-appointments");
                              setShowProfile(false);
                            }}
                            className="w-full flex items-center gap-3 px-3 py-3
                            rounded-xl text-left text-sm text-slate-600
                            hover:bg-blue-50 hover:text-blue-600
                            transition-colors"
                          >
                            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100">
                              📅
                            </span>

                            <span>My Appointments</span>
                          </button>

                          <div className="my-1 border-t border-slate-100" />

                          <button
                            onClick={() => {
                              setToken(false);
                              setShowProfile(false);
                            }}
                            className="w-full flex items-center gap-3 px-3 py-3
                            rounded-xl text-left text-sm text-red-500
                            hover:bg-red-50
                            transition-colors"
                          >
                            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-50">
                              ↪
                            </span>

                            <span>Logout</span>
                          </button>

                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="hidden sm:block bg-blue-600 hover:bg-blue-700
                  text-white text-sm font-semibold
                  px-6 py-2.5 rounded-xl
                  shadow-sm hover:shadow-md
                  transition-all duration-200"
                >
                  Create account
                </button>
              )}

              {/* ================= MOBILE MENU BUTTON ================= */}
              <button
                onClick={() => setShowMenu(true)}
                className="lg:hidden w-10 h-10 flex items-center justify-center
                rounded-xl border border-slate-200 hover:bg-slate-50"
                aria-label="Open menu"
              >
                <img
                  src={assets.menu_icon}
                  className="w-5"
                  alt="Menu"
                />
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {showMenu && (
        <div className="fixed inset-0 z-[100] bg-white lg:hidden">

          {/* Mobile Header */}
          <div className="h-[78px] px-5 flex items-center justify-between border-b border-slate-100">
            <img
              src={Mylogo}
              className="w-[145px]"
              alt="Medi-call"
            />

            <button
              onClick={() => setShowMenu(false)}
              className="w-10 h-10 flex items-center justify-center
              rounded-xl border border-slate-200 hover:bg-slate-50"
            >
              <img
                src={assets.cross_icon}
                className="w-5"
                alt="Close"
              />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="px-5 pt-8">

            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Menu
            </p>

            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) =>
                    `px-4 py-3.5 rounded-xl text-base font-medium transition-all
                    ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-700 hover:bg-slate-50"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Account */}
            <div className="mt-8 pt-6 border-t border-slate-100">

              {token ? (
                <div className="space-y-2">

                  <button
                    onClick={() => {
                      navigate("/my-profile");
                      setShowMenu(false);
                    }}
                    className="w-full text-left px-4 py-3 rounded-xl
                    text-slate-700 hover:bg-slate-50"
                  >
                    👤 My Profile
                  </button>

                  <button
                    onClick={() => {
                      navigate("/my-appointments");
                      setShowMenu(false);
                    }}
                    className="w-full text-left px-4 py-3 rounded-xl
                    text-slate-700 hover:bg-slate-50"
                  >
                    📅 My Appointments
                  </button>

                  <button
                    onClick={() => {
                      setToken(false);
                      setShowMenu(false);
                    }}
                    className="w-full text-left px-4 py-3 rounded-xl
                    text-red-500 hover:bg-red-50"
                  >
                    ↪ Logout
                  </button>

                </div>
              ) : (
                <button
                  onClick={() => {
                    navigate("/login");
                    setShowMenu(false);
                  }}
                  className="w-full bg-blue-600 text-white py-3.5
                  rounded-xl font-semibold"
                >
                  Create Account
                </button>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;