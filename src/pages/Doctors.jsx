import React, { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const [showFilter, setShowFilter] = useState(false);
  const [search, setSearch] = useState("");
  const [availability, setAvailability] = useState("all");

  const specialities = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  /*
   * Filter doctors whenever:
   * - doctors change
   * - speciality route changes
   * - search changes
   */
  const filteredDoctors = useMemo(() => {
    let result = doctors || [];

    // Speciality filter
    if (speciality) {
      result = result.filter(
        (doctor) => doctor.speciality === speciality
      );
    }

    // Search filter
    if (search.trim()) {
      const query = search.toLowerCase().trim();

      result = result.filter((doctor) => {
        const name = doctor.name?.toLowerCase() || "";
        const doctorSpeciality = doctor.speciality?.toLowerCase() || "";

        return (
          name.includes(query) ||
          doctorSpeciality.includes(query)
        );
      });
    }

    // Availability
    // Current backend/context does not expose availability,
    // so "All doctors" remains the actual dataset.
    if (availability === "available") {
      result = result;
    }

    return result;
  }, [doctors, speciality, search, availability]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [speciality]);

  const clearFilters = () => {
    setSearch("");
    setAvailability("all");
    navigate("/Doctors");
  };

  const selectSpeciality = (item) => {
    if (speciality === item) {
      navigate("/Doctors");
    } else {
      navigate(`/Doctors/${item}`);
    }

    setShowFilter(false);
  };

  const openAppointment = (id) => {
    navigate(`/appointment/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen py-8 sm:py-10 lg:py-12">

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="relative overflow-hidden rounded-[28px]
        bg-gradient-to-br from-[#eff6ff] via-white to-[#f0fdfa]
        border border-blue-100/70
        px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">

          {/* Decorative circles */}
          <div
            className="absolute -right-20 -top-24
            w-72 h-72 rounded-full
            border-[55px] border-blue-100/40"
          />

          <div
            className="absolute right-[18%] -bottom-28
            w-52 h-52 rounded-full
            bg-emerald-100/30"
          />

          <div className="relative z-10 max-w-[800px]">

            <div className="flex items-center gap-2 mb-3">

              <span className="w-7 h-[2px] bg-blue-600 rounded-full" />

              <span
                className="text-[10px] sm:text-[11px]
                uppercase tracking-[0.18em]
                font-bold text-blue-600"
              >
                Find your care
              </span>

            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-[46px]
              font-bold tracking-[-1.5px]
              text-slate-900"
            >
              Find the right doctor
              <span className="text-blue-600"> for you.</span>
            </h1>

            <p
              className="mt-3 max-w-[620px]
              text-sm sm:text-[15px]
              leading-6 text-slate-500"
            >
              Browse healthcare specialists, compare your options and
              book an appointment with a doctor that fits your needs.
            </p>

          </div>

          {/* Search */}
          <div
            className="relative z-10
            mt-7
            max-w-[820px]
            flex flex-col sm:flex-row
            gap-2
            p-2
            bg-white
            border border-slate-200
            rounded-2xl
            shadow-[0_12px_35px_rgba(15,23,42,0.07)]"
          >

            <div
              className="flex items-center gap-3
              flex-1
              px-3 py-2.5
              rounded-xl
              bg-slate-50
              border border-transparent
              focus-within:bg-white
              focus-within:border-blue-200
              transition-all"
            >

              <svg
                className="w-5 h-5 text-slate-400 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="6.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <path
                  d="M16 16L21 21"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search doctor or speciality..."
                className="w-full bg-transparent outline-none
                text-sm text-slate-700
                placeholder:text-slate-400"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="text-slate-400 hover:text-slate-700"
                >
                  ×
                </button>
              )}

            </div>

            <button
              onClick={() => setShowFilter((prev) => !prev)}
              className="sm:hidden
              px-5 py-3
              rounded-xl
              bg-slate-100
              text-sm font-semibold text-slate-700"
            >
              Filters
            </button>

          </div>

        </div>

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div className="flex flex-col lg:flex-row gap-7 mt-8">

          {/* ===================================================
              SIDEBAR
          ==================================================== */}

          <aside
            className={`
              lg:w-[230px] shrink-0
              ${showFilter ? "block" : "hidden lg:block"}
            `}
          >

            <div
              className="sticky top-5
              bg-white
              border border-slate-100
              rounded-2xl
              p-4
              shadow-[0_8px_25px_rgba(15,23,42,0.04)]"
            >

              <div className="flex items-center justify-between mb-4">

                <div>
                  <p className="text-sm font-bold text-slate-800">
                    Speciality
                  </p>

                  <p className="text-[10px] text-slate-400 mt-0.5">
                    Browse by medical field
                  </p>
                </div>

                {speciality && (
                  <button
                    onClick={clearFilters}
                    className="text-[10px] font-semibold
                    text-blue-600 hover:text-blue-700"
                  >
                    Clear
                  </button>
                )}

              </div>

              <div className="flex flex-col gap-1.5">

                {/* All */}
                <button
                  onClick={() => {
                    navigate("/Doctors");
                    setShowFilter(false);
                  }}
                  className={`
                    w-full text-left
                    px-3 py-2.5
                    rounded-xl
                    text-xs font-medium
                    transition-all
                    ${
                      !speciality
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-50"
                    }
                  `}
                >
                  <span className="flex items-center justify-between">
                    All Doctors

                    {!speciality && (
                      <span>✓</span>
                    )}
                  </span>
                </button>

                {specialities.map((item) => (
                  <button
                    key={item}
                    onClick={() => selectSpeciality(item)}
                    className={`
                      w-full text-left
                      px-3 py-2.5
                      rounded-xl
                      text-xs font-medium
                      transition-all
                      ${
                        speciality === item
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-600 hover:bg-slate-50"
                      }
                    `}
                  >
                    <span className="flex items-center justify-between">

                      {item}

                      {speciality === item && (
                        <span className="text-blue-600">
                          ✓
                        </span>
                      )}

                    </span>
                  </button>
                ))}

              </div>

              {/* Availability */}
              <div className="border-t border-slate-100 mt-5 pt-5">

                <p className="text-sm font-bold text-slate-800">
                  Availability
                </p>

                <div className="mt-3 flex flex-col gap-2">

                  <button
                    onClick={() => setAvailability("all")}
                    className="flex items-center gap-2 text-xs text-slate-600"
                  >
                    <span
                      className={`w-4 h-4 rounded-full border
                      flex items-center justify-center
                      ${
                        availability === "all"
                          ? "border-blue-600"
                          : "border-slate-300"
                      }`}
                    >
                      {availability === "all" && (
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                      )}
                    </span>

                    All doctors
                  </button>

                  <button
                    onClick={() => setAvailability("available")}
                    className="flex items-center gap-2 text-xs text-slate-600"
                  >
                    <span
                      className={`w-4 h-4 rounded-full border
                      flex items-center justify-center
                      ${
                        availability === "available"
                          ? "border-emerald-500"
                          : "border-slate-300"
                      }`}
                    >
                      {availability === "available" && (
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      )}
                    </span>

                    Available now
                  </button>

                </div>

              </div>

            </div>

          </aside>

          {/* ===================================================
              DOCTORS AREA
          ==================================================== */}

          <main className="flex-1 min-w-0">

            {/* Result header */}
            <div
              className="flex flex-col sm:flex-row
              sm:items-center sm:justify-between
              gap-3 mb-5"
            >

              <div>

                <h2 className="text-xl sm:text-2xl
                font-bold text-slate-900 tracking-tight">

                  {speciality || "All Doctors"}

                </h2>

                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {filteredDoctors.length} doctors available
                </p>

              </div>

              <div
                className="flex items-center gap-2
                text-xs text-slate-400"
              >
                <span>Sort by</span>

                <select
                  className="bg-white
                  border border-slate-200
                  rounded-lg
                  px-3 py-2
                  text-xs font-medium text-slate-600
                  outline-none"
                >
                  <option>Recommended</option>
                  <option>Availability</option>
                  <option>Name</option>
                </select>
              </div>

            </div>

            {/* ================= DOCTOR CARDS ================= */}

            {filteredDoctors.length > 0 ? (

              <div
                className="grid
                grid-cols-1
                sm:grid-cols-2
                xl:grid-cols-3
                gap-4"
              >

                {filteredDoctors.map((item) => (

                  <article
                    key={item._id}
                    onClick={() => openAppointment(item._id)}
                    className="group
                    bg-white
                    border border-slate-100
                    rounded-2xl
                    overflow-hidden
                    cursor-pointer
                    hover:border-blue-100
                    hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]
                    hover:-translate-y-1
                    transition-all duration-300"
                  >

                    {/* IMAGE */}

                    <div className="relative bg-slate-50 overflow-hidden">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full
                        aspect-[4/3]
                        object-cover
                        group-hover:scale-[1.035]
                        transition-transform duration-500"
                      />

                      {/* Availability badge */}

                      <div
                        className="absolute top-3 left-3
                        flex items-center gap-1.5
                        px-2.5 py-1.5
                        rounded-full
                        bg-white/95
                        backdrop-blur-sm
                        shadow-sm"
                      >

                        <span
                          className="w-1.5 h-1.5
                          rounded-full bg-emerald-500"
                        />

                        <span
                          className="text-[10px]
                          font-semibold text-slate-600"
                        >
                          Available
                        </span>

                      </div>

                      {/* Heart */}

                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-3 right-3
                        w-8 h-8
                        rounded-full
                        bg-white/95
                        backdrop-blur-sm
                        flex items-center justify-center
                        text-slate-400
                        hover:text-red-500
                        shadow-sm
                        transition-colors"
                        aria-label="Favourite doctor"
                      >

                        <svg
                          className="w-4 h-4"
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

                    {/* CONTENT */}

                    <div className="p-4">

                      {/* Name */}

                      <div className="flex items-center gap-1.5">

                        <h3
                          className="font-bold
                          text-[16px]
                          text-slate-800
                          truncate
                          group-hover:text-blue-600
                          transition-colors"
                        >
                          {item.name}
                        </h3>

                        <span
                          className="w-4 h-4 shrink-0
                          rounded-full
                          bg-blue-50
                          text-blue-600
                          flex items-center justify-center"
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
                        className="text-xs
                        font-medium
                        text-slate-400
                        mt-1"
                      >
                        {item.speciality}
                      </p>

                      {/* Bottom information */}

                      <div className="flex items-center
                      justify-between mt-4">

                        <div className="flex items-center gap-1">

                          <span className="text-amber-400 text-sm">
                            ★
                          </span>

                          <span
                            className="text-xs
                            font-semibold
                            text-slate-700"
                          >
                            4.8
                          </span>

                        </div>

                        <span
                          className="text-[10px]
                          text-slate-400"
                        >
                          Consultation available
                        </span>

                      </div>

                      {/* Divider */}

                      <div className="h-px bg-slate-100 my-3" />

                      {/* Button */}

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openAppointment(item._id);
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
                        View & Book Appointment
                      </button>

                    </div>

                  </article>

                ))}

              </div>

            ) : (

              /* ================= EMPTY STATE ================= */

              <div
                className="min-h-[380px]
                rounded-2xl
                border border-dashed border-slate-200
                bg-slate-50/50
                flex flex-col
                items-center
                justify-center
                text-center px-6"
              >

                <div
                  className="w-16 h-16
                  rounded-2xl
                  bg-white
                  border border-slate-100
                  flex items-center justify-center
                  text-2xl
                  shadow-sm"
                >
                  🔍
                </div>

                <h3
                  className="mt-5
                  text-lg font-bold
                  text-slate-800"
                >
                  No doctors found
                </h3>

                <p
                  className="mt-2
                  max-w-[380px]
                  text-sm
                  leading-6
                  text-slate-400"
                >
                  Try another doctor name, speciality or clear your
                  current filters.
                </p>

                <button
                  onClick={clearFilters}
                  className="mt-5
                  px-5 py-2.5
                  rounded-xl
                  bg-blue-600
                  text-white
                  text-xs
                  font-semibold
                  hover:bg-blue-700
                  transition-colors"
                >
                  Clear filters
                </button>

              </div>

            )}

          </main>

        </div>

      </div>

    </section>
  );
};

export default Doctors;