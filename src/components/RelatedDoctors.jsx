import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const [relatedDoctors, setRelatedDoctors] = useState([]);

  useEffect(() => {
    if (doctors?.length > 0 && speciality) {
      const filteredDoctors = doctors.filter(
        (doc) =>
          doc.speciality === speciality &&
          doc._id !== docId
      );

      setRelatedDoctors(filteredDoctors);
    } else {
      setRelatedDoctors([]);
    }
  }, [doctors, speciality, docId]);

  const handleDoctorClick = (id) => {
    if (!id) return;

    navigate(`/appointment/${id}`);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleViewAll = () => {
    navigate("/Doctors");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="mt-20 sm:mt-24">

      <div className="max-w-[1280px] mx-auto">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">

          <div>

            <div className="flex items-center gap-2 mb-3">

              <span className="w-7 h-[2px] bg-blue-600 rounded-full" />

              <span
                className="text-[10px]
                uppercase
                tracking-[0.18em]
                font-bold
                text-blue-600"
              >
                Similar specialists
              </span>

            </div>

            <h2
              className="text-2xl
              sm:text-3xl
              font-bold
              text-slate-900
              tracking-tight"
            >
              More doctors you can consult
            </h2>

            <p
              className="text-sm
              text-slate-500
              mt-2
              max-w-xl
              leading-6"
            >
              Explore other doctors from the same speciality and
              choose a professional that fits your healthcare needs.
            </p>

          </div>

          {/* View all */}

          <button
            onClick={handleViewAll}
            className="self-start sm:self-auto
            text-sm
            font-semibold
            text-blue-600
            hover:text-blue-700
            transition-colors
            whitespace-nowrap"
          >
            View all doctors →
          </button>

        </div>

        {/* =====================================================
            DOCTOR CARDS
        ====================================================== */}

        {relatedDoctors.length > 0 ? (

          <div
            className="grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5
            gap-5"
          >

            {relatedDoctors.slice(0, 5).map((doctor) => (

              <article
                key={doctor._id}
                onClick={() => handleDoctorClick(doctor._id)}
                className="group
                bg-white
                rounded-3xl
                overflow-hidden
                border
                border-slate-100
                cursor-pointer
                hover:border-blue-100
                hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]
                hover:-translate-y-1
                transition-all
                duration-300"
              >

                {/* =================================================
                    DOCTOR IMAGE
                ================================================== */}

                <div
                  className="relative
                  bg-blue-50
                  overflow-hidden"
                >

                  <img
                    src={doctor.image}
                    alt={`${doctor.name} profile`}
                    className="w-full
                    aspect-[4/4.8]
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-500"
                  />

                  {/* Available badge */}

                  <div
                    className="absolute
                    top-3
                    left-3
                    flex
                    items-center
                    gap-1.5
                    bg-white/95
                    backdrop-blur-sm
                    rounded-full
                    px-3
                    py-1.5
                    shadow-sm"
                  >

                    <span
                      className="w-2
                      h-2
                      rounded-full
                      bg-emerald-500"
                    />

                    <span
                      className="text-[10px]
                      font-semibold
                      text-slate-600"
                    >
                      Available
                    </span>

                  </div>

                  {/* Favourite */}

                  <button
                    onClick={(e) => e.stopPropagation()}
                    aria-label="Add doctor to favourites"
                    className="absolute
                    top-3
                    right-3
                    w-8
                    h-8
                    rounded-full
                    bg-white/95
                    backdrop-blur-sm
                    flex
                    items-center
                    justify-center
                    text-lg
                    text-slate-400
                    hover:text-red-500
                    hover:scale-105
                    transition-all
                    shadow-sm"
                  >
                    ♡
                  </button>

                </div>

                {/* =================================================
                    DOCTOR INFORMATION
                ================================================== */}

                <div className="p-4">

                  {/* Name */}

                  <div className="flex items-center gap-1.5">

                    <h3
                      className="text-base
                      font-bold
                      text-slate-900
                      truncate"
                    >
                      {doctor.name}
                    </h3>

                    {/* Verified */}

                    <span
                      className="flex-shrink-0
                      w-4
                      h-4
                      rounded-full
                      bg-blue-50
                      text-blue-600
                      flex
                      items-center
                      justify-center
                      text-[9px]
                      font-bold"
                    >
                      ✓
                    </span>

                  </div>

                  {/* Speciality */}

                  <p
                    className="text-xs
                    text-slate-500
                    mt-1
                    truncate"
                  >
                    {doctor.speciality}
                  </p>

                  {/* Rating */}

                  <div
                    className="flex
                    items-center
                    justify-between
                    mt-4
                    pt-3
                    border-t
                    border-slate-100"
                  >

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
                      View profile
                    </span>

                  </div>

                </div>

              </article>

            ))}

          </div>

        ) : (

          /* =====================================================
              EMPTY STATE
          ====================================================== */

          <div
            className="rounded-3xl
            border
            border-slate-100
            bg-slate-50
            py-12
            px-5
            text-center"
          >

            <div
              className="w-12
              h-12
              mx-auto
              rounded-2xl
              bg-white
              border
              border-slate-100
              flex
              items-center
              justify-center
              text-xl"
            >
              🩺
            </div>

            <h3
              className="mt-4
              text-base
              font-semibold
              text-slate-800"
            >
              No related doctors found
            </h3>

            <p
              className="mt-1
              text-sm
              text-slate-500"
            >
              Explore our complete list of doctors instead.
            </p>

            <button
              onClick={handleViewAll}
              className="mt-5
              px-5
              py-2.5
              rounded-xl
              bg-blue-600
              text-white
              text-xs
              font-semibold
              hover:bg-blue-700
              transition-colors"
            >
              Browse all doctors
            </button>

          </div>

        )}

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        {relatedDoctors.length > 5 && (

          <div className="flex justify-center mt-8">

            <button
              onClick={handleViewAll}
              className="px-7
              py-3
              rounded-full
              bg-slate-100
              text-slate-700
              text-sm
              font-semibold
              hover:bg-blue-50
              hover:text-blue-600
              transition-all"
            >
              Explore more doctors →
            </button>

          </div>

        )}

      </div>

    </section>
  );
};

export default RelatedDoctors;