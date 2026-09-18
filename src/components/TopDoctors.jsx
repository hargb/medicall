import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const handleDoctorClick = (id) => {
    navigate(`/appointment/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="mt-20 sm:mt-24 lg:mt-28">

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">

        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-[2px] bg-blue-600 rounded-full" />

              <span className="text-[11px] uppercase tracking-[0.18em]
              font-bold text-blue-600">
                Trusted professionals
              </span>
            </div>

            <h2
              className="text-2xl sm:text-3xl lg:text-[34px]
              font-bold tracking-[-1px] text-slate-900"
            >
              Meet our top doctors
            </h2>

            <p
              className="mt-2 max-w-[560px]
              text-sm sm:text-[15px]
              leading-6 text-slate-500"
            >
              Experienced healthcare professionals ready to help you
              with personalized care and expert guidance.
            </p>
          </div>

          <button
            onClick={() => {
              navigate("/Doctors");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-center gap-2 w-fit
            text-sm font-semibold text-blue-600
            hover:text-blue-700 transition-colors"
          >
            View all doctors

            <span
              className="text-lg transition-transform duration-200
              group-hover:translate-x-1"
            >
              →
            </span>
          </button>

        </div>

        {/* ================= DOCTORS GRID ================= */}
        <div
          className="grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-5
          gap-4"
        >

          {doctors.slice(0, 10).map((item) => (

            <article
              key={item._id}
              onClick={() => handleDoctorClick(item._id)}
              className="group cursor-pointer
              bg-white
              border border-slate-100
              rounded-2xl
              overflow-hidden
              hover:border-blue-100
              hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]
              hover:-translate-y-1
              transition-all duration-300"
            >

              {/* ================= IMAGE ================= */}
              <div className="relative overflow-hidden bg-slate-50">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full aspect-[4/4.5]
                  object-cover
                  group-hover:scale-[1.035]
                  transition-transform duration-500"
                />

                {/* Availability */}
                <div
                  className="absolute top-3 left-3
                  flex items-center gap-1.5
                  px-2.5 py-1.5
                  bg-white/95
                  backdrop-blur-sm
                  rounded-full
                  shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />

                  <span className="text-[10px] font-semibold text-slate-600">
                    Available
                  </span>
                </div>

                {/* Favourite */}
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-3 right-3
                  w-8 h-8
                  flex items-center justify-center
                  rounded-full
                  bg-white/95
                  backdrop-blur-sm
                  text-slate-400
                  hover:text-red-500
                  shadow-sm
                  transition-colors"
                  aria-label="Add to favourites"
                >
                  <svg
                    className="w-[16px] h-[16px]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20.8 8.7C20.8 13.5 12 20 12 20S3.2 13.5 3.2 8.7C3.2 5.9 5.3 4 8 4C9.8 4 11.3 5 12 6.4C12.7 5 14.2 4 16 4C18.7 4 20.8 5.9 20.8 8.7Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

              </div>

              {/* ================= CONTENT ================= */}
              <div className="p-4">

                {/* Name */}
                <div className="flex items-center gap-1.5">

                  <h3
                    className="text-[15px]
                    font-bold
                    text-slate-800
                    truncate
                    group-hover:text-blue-600
                    transition-colors"
                  >
                    {item.name}
                  </h3>

                  {/* Verified */}
                  <span
                    className="w-4 h-4 shrink-0
                    flex items-center justify-center
                    rounded-full
                    bg-blue-50
                    text-blue-600"
                    title="Verified doctor"
                  >
                    <svg
                      className="w-2.5 h-2.5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                </div>

                {/* Speciality */}
                <p
                  className="mt-1
                  text-xs
                  font-medium
                  text-slate-400"
                >
                  {item.speciality}
                </p>

                {/* Rating */}
                <div className="mt-3 flex items-center justify-between">

                  <div className="flex items-center gap-1">

                    <span className="text-amber-400 text-sm">
                      ★
                    </span>

                    <span className="text-xs font-semibold text-slate-700">
                      4.8
                    </span>

                    <span className="text-[10px] text-slate-400">
                      (120+)
                    </span>

                  </div>

                  <span className="text-[10px] text-slate-400">
                    10+ yrs exp.
                  </span>

                </div>

                {/* Divider */}
                <div className="h-px bg-slate-100 my-3" />

                {/* Book */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDoctorClick(item._id);
                  }}
                  className="w-full
                  py-2.5
                  rounded-xl
                  bg-blue-50
                  text-blue-600
                  text-xs
                  font-semibold
                  hover:bg-blue-600
                  hover:text-white
                  transition-all duration-200"
                >
                  Book Appointment
                </button>

              </div>

            </article>

          ))}

        </div>

        {/* ================= VIEW ALL ================= */}
        <div className="flex justify-center mt-10">

          <button
            onClick={() => {
              navigate("/Doctors");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group
            flex items-center gap-2
            px-7 py-3
            rounded-xl
            border border-slate-200
            bg-white
            text-sm font-semibold
            text-slate-600
            hover:border-blue-200
            hover:bg-blue-50
            hover:text-blue-600
            transition-all duration-200"
          >
            Explore all doctors

            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>

        </div>

      </div>
    </section>
  );
};

export default TopDoctors;