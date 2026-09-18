import React from "react";
import { NavLink } from "react-router-dom";
import Mylogo from "../../assets/Mylogo.png";

const Footer = () => {
  return (
    <footer className="mt-24 sm:mt-28">

      {/* ================= MAIN FOOTER ================= */}
      <div className="bg-slate-950 text-white">

        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">

          <div className="py-14 sm:py-16">

            {/* ================= TOP CTA ================= */}
            <div
              className="relative overflow-hidden
              rounded-3xl
              bg-blue-600
              px-6 py-8 sm:px-10 sm:py-10
              mb-14"
            >

              {/* Decorative circles */}
              <div className="absolute -right-16 -top-20
              w-52 h-52 rounded-full
              bg-white/10" />

              <div className="absolute right-20 -bottom-28
              w-48 h-48 rounded-full
              bg-white/5" />

              <div className="relative flex flex-col md:flex-row
              md:items-center md:justify-between gap-7">

                <div className="max-w-[650px]">

                  <span
                    className="inline-block mb-3
                    text-[10px] uppercase
                    tracking-[0.18em]
                    font-bold text-blue-100"
                  >
                    Better care starts here
                  </span>

                  <h2
                    className="text-2xl sm:text-3xl
                    font-bold tracking-tight"
                  >
                    Find the right doctor for you.
                  </h2>

                  <p
                    className="mt-2
                    text-sm leading-6
                    text-blue-100"
                  >
                    Browse verified healthcare professionals and
                    book your appointment in just a few clicks.
                  </p>

                </div>

                <NavLink
                  to="/Doctors"
                  className="group shrink-0
                  inline-flex items-center justify-center gap-2
                  px-6 py-3
                  rounded-xl
                  bg-white
                  text-blue-600
                  text-sm font-semibold
                  hover:bg-blue-50
                  transition-all duration-200"
                >
                  Find a Doctor

                  <span className="text-lg transition-transform
                  group-hover:translate-x-1">
                    →
                  </span>
                </NavLink>

              </div>
            </div>

            {/* ================= FOOTER GRID ================= */}
            <div
              className="grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-[2fr_1fr_1fr_1.3fr]
              gap-10 lg:gap-16"
            >

              {/* ================= BRAND ================= */}
              <div>

                <NavLink to="/" className="inline-block">
                  <div className="bg-white rounded-xl px-3 py-2">
                    <img
                      src={Mylogo}
                      className="w-[145px] object-contain"
                      alt="Medi-call"
                    />
                  </div>
                </NavLink>

                <p
                  className="max-w-[430px]
                  mt-5
                  text-sm
                  leading-7
                  text-slate-400"
                >
                  Medi-call makes healthcare simpler by helping
                  patients discover trusted doctors, book appointments
                  and access better care from one place.
                </p>

                {/* Social buttons */}
                <div className="flex items-center gap-2 mt-6">

                  <button
                    className="w-9 h-9 rounded-xl
                    border border-slate-800
                    flex items-center justify-center
                    text-xs font-semibold
                    text-slate-400
                    hover:text-white
                    hover:border-slate-600
                    transition-colors"
                  >
                    in
                  </button>

                  <button
                    className="w-9 h-9 rounded-xl
                    border border-slate-800
                    flex items-center justify-center
                    text-sm font-semibold
                    text-slate-400
                    hover:text-white
                    hover:border-slate-600
                    transition-colors"
                  >
                    f
                  </button>

                  <button
                    className="w-9 h-9 rounded-xl
                    border border-slate-800
                    flex items-center justify-center
                    text-sm font-semibold
                    text-slate-400
                    hover:text-white
                    hover:border-slate-600
                    transition-colors"
                  >
                    ◎
                  </button>

                </div>

              </div>

              {/* ================= COMPANY ================= */}
              <div>

                <h3
                  className="text-xs uppercase
                  tracking-[0.15em]
                  font-bold text-white mb-5"
                >
                  Company
                </h3>

                <div className="flex flex-col gap-3">

                  <NavLink
                    to="/"
                    className="text-sm text-slate-400
                    hover:text-white transition-colors"
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/About"
                    className="text-sm text-slate-400
                    hover:text-white transition-colors"
                  >
                    About us
                  </NavLink>

                  <NavLink
                    to="/Contact"
                    className="text-sm text-slate-400
                    hover:text-white transition-colors"
                  >
                    Contact us
                  </NavLink>

                  <span
                    className="text-sm text-slate-400
                    hover:text-white cursor-pointer
                    transition-colors"
                  >
                    Privacy Policy
                  </span>

                </div>

              </div>

              {/* ================= SERVICES ================= */}
              <div>

                <h3
                  className="text-xs uppercase
                  tracking-[0.15em]
                  font-bold text-white mb-5"
                >
                  Services
                </h3>

                <div className="flex flex-col gap-3">

                  <NavLink
                    to="/Doctors"
                    className="text-sm text-slate-400
                    hover:text-white transition-colors"
                  >
                    Find Doctors
                  </NavLink>

                  <NavLink
                    to="/Doctors"
                    className="text-sm text-slate-400
                    hover:text-white transition-colors"
                  >
                    Book Appointment
                  </NavLink>

                  <NavLink
                    to="/BasicRemedies"
                    className="text-sm text-slate-400
                    hover:text-white transition-colors"
                  >
                    Health Tips
                  </NavLink>

                  <NavLink
                    to="/Ayurveda"
                    className="text-sm text-slate-400
                    hover:text-white transition-colors"
                  >
                    Ayurvedic Care
                  </NavLink>

                </div>

              </div>

              {/* ================= CONTACT ================= */}
              <div>

                <h3
                  className="text-xs uppercase
                  tracking-[0.15em]
                  font-bold text-white mb-5"
                >
                  Get in touch
                </h3>

                <div className="space-y-4">

                  {/* Phone */}
                  <div className="flex items-start gap-3">

                    <div
                      className="w-9 h-9 shrink-0
                      rounded-xl bg-slate-900
                      border border-slate-800
                      flex items-center justify-center"
                    >
                      <svg
                        className="w-4 h-4 text-slate-300"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6.5 3.5H9L10.5 7.5L8.5 9C9.4 11.2 11 12.9 13.2 13.8L14.7 11.8L18.7 13.3V15.8C18.7 17.2 17.5 18.3 16.1 18.2C9.5 17.5 5.5 13.5 4.8 6.9C4.7 5.5 5.8 3.5 6.5 3.5Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wide">
                        Phone
                      </p>

                      <a
                        href="tel:+918130265893"
                        className="text-sm text-slate-300
                        hover:text-white transition-colors"
                      >
                        +91 81302 65893
                      </a>
                    </div>

                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">

                    <div
                      className="w-9 h-9 shrink-0
                      rounded-xl bg-slate-900
                      border border-slate-800
                      flex items-center justify-center"
                    >
                      <svg
                        className="w-4 h-4 text-slate-300"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="14"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />

                        <path
                          d="M4 7L12 13L20 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wide">
                        Email
                      </p>

                      <a
                        href="mailto:medicall112@gmail.com"
                        className="text-sm text-slate-300
                        hover:text-white transition-colors break-all"
                      >
                        medicall112@gmail.com
                      </a>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* ================= BOTTOM BAR ================= */}
          <div className="border-t border-slate-800">

            <div
              className="max-w-[1440px] mx-auto
              px-5 sm:px-8 lg:px-10
              py-5
              flex flex-col sm:flex-row
              items-center justify-between
              gap-3"
            >

              <p className="text-xs text-slate-500 text-center sm:text-left">
                © {new Date().getFullYear()} Medi-call. All rights reserved.
              </p>

              <div className="flex items-center gap-5">

                <span className="text-xs text-slate-500">
                  Privacy
                </span>

                <span className="text-xs text-slate-500">
                  Terms
                </span>

                <span className="text-xs text-slate-500">
                  Help
                </span>

              </div>

              <p className="text-xs text-slate-600">
                Built with care for better healthcare.
              </p>

            </div>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;