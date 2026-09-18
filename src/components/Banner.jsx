import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Banner = () => {
  const navigate = useNavigate();

  const [speciality, setSpeciality] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    navigate("/Doctors");
  };

  return (
    <section className="relative overflow-hidden pt-6 sm:pt-8 lg:pt-10">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-[350px] h-[350px] rounded-full bg-cyan-50 blur-3xl" />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">

        {/* ================= HERO ================= */}
        <div
          className="relative min-h-[570px] lg:min-h-[590px]
          rounded-[28px] sm:rounded-[36px]
          bg-gradient-to-br from-[#eff6ff] via-white to-[#f0fdfa]
          border border-blue-100/70
          overflow-hidden"
        >

          {/* Decorative circles */}
          <div className="absolute top-[-100px] right-[18%] w-[260px] h-[260px]
          rounded-full border-[45px] border-white/60" />

          <div className="absolute bottom-[-120px] left-[40%] w-[280px] h-[280px]
          rounded-full border-[55px] border-blue-100/30" />

          {/* ================= CONTENT ================= */}
          <div className="relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] min-h-[570px]">

            {/* ================= LEFT ================= */}
            <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-16 xl:px-20">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 w-fit
              px-3 py-1.5 rounded-full
              bg-white border border-blue-100
              shadow-sm mb-6">

                <span className="flex w-2 h-2 rounded-full bg-emerald-500" />

                <span className="text-[11px] sm:text-xs font-semibold text-slate-600">
                  Trusted healthcare, made simple
                </span>
              </div>

              {/* Heading */}
              <h1
                className="max-w-[680px]
                text-[38px] leading-[1.08]
                sm:text-[48px] sm:leading-[1.08]
                lg:text-[56px] lg:leading-[1.06]
                xl:text-[62px]
                font-bold tracking-[-2px]
                text-slate-900"
              >
                Your health deserves
                <span className="block text-blue-600">
                  better care.
                </span>
              </h1>

              {/* Description */}
              <p
                className="max-w-[570px]
                mt-5
                text-sm sm:text-base
                leading-7
                text-slate-500"
              >
                Find trusted doctors, book appointments and connect with
                healthcare professionals — all from one simple platform.
              </p>

              {/* ================= SEARCH ================= */}
              <div
                className="mt-8
                w-full max-w-[720px]
                p-2
                bg-white
                rounded-2xl
                border border-slate-200
                shadow-[0_12px_35px_rgba(15,23,42,0.08)]"
              >

                <div className="grid sm:grid-cols-[1fr_1fr_auto] gap-2">

                  {/* Speciality */}
                  <div className="flex items-center gap-3 px-3 py-3
                  rounded-xl hover:bg-slate-50 transition-colors">

                    <div className="w-9 h-9 rounded-lg bg-blue-50
                    flex items-center justify-center shrink-0">

                      <svg
                        className="w-[18px] h-[18px] text-blue-600"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 21C16.5 16.5 19 13.3 19 9.5C19 5.9 16 3 12 3C8 3 5 5.9 5 9.5C5 13.3 7.5 16.5 12 21Z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />

                        <circle
                          cx="12"
                          cy="9"
                          r="2.5"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />
                      </svg>
                    </div>

                    <div className="flex-1 min-w-0">
                      <label className="block text-[10px] uppercase
                      tracking-wider font-semibold text-slate-400">
                        Speciality
                      </label>

                      <select
                        value={speciality}
                        onChange={(e) => setSpeciality(e.target.value)}
                        className="w-full mt-0.5 bg-transparent outline-none
                        text-sm font-medium text-slate-700 cursor-pointer"
                      >
                        <option value="">What do you need?</option>
                        <option value="general">General Physician</option>
                        <option value="dermatologist">Dermatologist</option>
                        <option value="gynecologist">Gynecologist</option>
                        <option value="pediatrician">Pediatrician</option>
                        <option value="neurologist">Neurologist</option>
                        <option value="cardiologist">Cardiologist</option>
                      </select>
                    </div>
                  </div>

                  {/* Location */}
                  <div
                    className="flex items-center gap-3 px-3 py-3
                    rounded-xl hover:bg-slate-50 transition-colors
                    border-t sm:border-t-0 sm:border-l border-slate-100"
                  >

                    <div className="w-9 h-9 rounded-lg bg-emerald-50
                    flex items-center justify-center shrink-0">

                      <svg
                        className="w-[18px] h-[18px] text-emerald-600"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M19 10C19 15 12 21 12 21C12 21 5 15 5 10C5 6.1 8.1 3 12 3C15.9 3 19 6.1 19 10Z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />

                        <circle
                          cx="12"
                          cy="10"
                          r="2.5"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />
                      </svg>
                    </div>

                    <div className="flex-1 min-w-0">
                      <label className="block text-[10px] uppercase
                      tracking-wider font-semibold text-slate-400">
                        Location
                      </label>

                      <input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        type="text"
                        placeholder="City or area"
                        className="w-full mt-0.5 bg-transparent outline-none
                        text-sm font-medium text-slate-700
                        placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Search Button */}
                  <button
                    onClick={handleSearch}
                    className="flex items-center justify-center gap-2
                    px-6 py-3
                    rounded-xl
                    bg-blue-600 hover:bg-blue-700
                    text-white
                    text-sm font-semibold
                    shadow-sm hover:shadow-md
                    transition-all duration-200"
                  >
                    <svg
                      className="w-[17px] h-[17px]"
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

                    Search
                  </button>

                </div>
              </div>

              {/* Popular searches */}
              <div className="mt-5 flex flex-wrap items-center gap-2">

                <span className="text-xs font-medium text-slate-400 mr-1">
                  Popular:
                </span>

                {[
                  "General Physician",
                  "Dermatologist",
                  "Dentist",
                  "Pediatrician",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setSpeciality(item);
                      navigate("/Doctors");
                    }}
                    className="px-3 py-1.5 rounded-full
                    bg-white/80 border border-slate-200
                    text-[11px] sm:text-xs font-medium text-slate-600
                    hover:border-blue-200 hover:text-blue-600
                    hover:bg-blue-50
                    transition-all"
                  >
                    {item}
                  </button>
                ))}

              </div>

              {/* Trust Stats */}
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">

                <div>
                  <p className="text-xl font-bold text-slate-900">
                    100+
                  </p>

                  <p className="text-[11px] text-slate-400">
                    Verified Doctors
                  </p>
                </div>

                <div className="h-8 w-px bg-slate-200 hidden sm:block" />

                <div>
                  <p className="text-xl font-bold text-slate-900">
                    10K+
                  </p>

                  <p className="text-[11px] text-slate-400">
                    Happy Patients
                  </p>
                </div>

                <div className="h-8 w-px bg-slate-200 hidden sm:block" />

                <div>
                  <p className="text-xl font-bold text-slate-900">
                    4.8/5
                  </p>

                  <p className="text-[11px] text-slate-400">
                    Patient Rating
                  </p>
                </div>

              </div>

            </div>

            {/* ================= RIGHT ================= */}
            <div className="relative hidden lg:flex items-end justify-center">

              {/* Background shape */}
              <div
                className="absolute bottom-0 right-0
                w-[520px] h-[520px]
                rounded-full
                bg-blue-100/60"
              />

              <div
                className="absolute bottom-10 right-10
                w-[420px] h-[420px]
                rounded-full
                bg-white/60"
              />

              {/* Doctor Image */}
              <img
                src={assets.header_img}
                alt="Healthcare professional"
                className="relative z-10
                h-[510px] xl:h-[545px]
                w-auto object-contain object-bottom
                drop-shadow-[0_25px_35px_rgba(15,23,42,0.12)]"
              />

              {/* ================= FLOATING CARD 1 ================= */}
              <div
                className="absolute z-20
                top-[120px] right-[50px] xl:right-[75px]
                flex items-center gap-3
                bg-white
                rounded-2xl
                px-4 py-3
                shadow-[0_15px_40px_rgba(15,23,42,0.12)]
                border border-slate-100"
              >

                <div className="w-10 h-10 rounded-xl bg-emerald-50
                flex items-center justify-center">

                  <svg
                    className="w-5 h-5 text-emerald-600"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-800">
                    Verified Doctors
                  </p>

                  <p className="text-[10px] text-slate-400">
                    Quality healthcare
                  </p>
                </div>

              </div>

              {/* ================= FLOATING CARD 2 ================= */}
              <div
                className="absolute z-20
                bottom-[75px] left-[15px] xl:left-[45px]
                bg-white
                rounded-2xl
                px-4 py-3
                shadow-[0_15px_40px_rgba(15,23,42,0.12)]
                border border-slate-100"
              >

                <div className="flex items-center gap-3">

                  <div className="flex -space-x-2">

                    <div className="w-8 h-8 rounded-full bg-blue-100
                    border-2 border-white flex items-center justify-center text-xs">
                      👨‍⚕️
                    </div>

                    <div className="w-8 h-8 rounded-full bg-emerald-100
                    border-2 border-white flex items-center justify-center text-xs">
                      👩‍⚕️
                    </div>

                    <div className="w-8 h-8 rounded-full bg-purple-100
                    border-2 border-white flex items-center justify-center text-xs">
                      👨‍⚕️
                    </div>

                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-800">
                      24/7 Care
                    </p>

                    <p className="text-[10px] text-slate-400">
                      Doctors are here for you
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ================= QUICK SERVICES ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-5">

          {[
            {
              title: "Find a Doctor",
              text: "Search specialists",
              icon: "👨‍⚕️",
              path: "/Doctors",
            },
            {
              title: "Book Appointment",
              text: "Choose your slot",
              icon: "📅",
              path: "/Doctors",
            },
            {
              title: "Online Consultation",
              text: "Connect from home",
              icon: "💻",
              path: "/Doctors",
            },
            {
              title: "Health Tips",
              text: "Learn & stay healthy",
              icon: "❤️",
              path: "/BasicRemedies",
            },
          ].map((item) => (
            <button
              key={item.title}
              onClick={() => navigate(item.path)}
              className="group text-left p-4 sm:p-5
              rounded-2xl
              bg-white
              border border-slate-100
              hover:border-blue-100
              hover:shadow-[0_10px_30px_rgba(15,23,42,0.06)]
              transition-all duration-200"
            >

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 sm:w-11 sm:h-11
                rounded-xl bg-slate-50
                flex items-center justify-center
                text-lg
                group-hover:bg-blue-50
                transition-colors">
                  {item.icon}
                </div>

                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    {item.title}
                  </p>

                  <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                    {item.text}
                  </p>
                </div>

              </div>

            </button>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Banner;