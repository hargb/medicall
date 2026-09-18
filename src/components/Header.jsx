import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Header = () => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate("/Doctors");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-slate-50 px-4 sm:px-6 lg:px-8 pt-5 sm:pt-7">

      <div
        className="relative
        max-w-[1280px]
        mx-auto
        overflow-hidden
        rounded-[28px]
        bg-slate-950"
      >

        {/* =====================================================
            BACKGROUND DETAILS
        ====================================================== */}

        <div
          className="absolute
          -right-32
          -top-32
          w-[420px]
          h-[420px]
          rounded-full
          bg-blue-600/10"
        />

        <div
          className="absolute
          right-[25%]
          bottom-[-180px]
          w-[400px]
          h-[400px]
          rounded-full
          bg-cyan-500/5"
        />

        <div
          className="absolute
          left-[-180px]
          bottom-[-220px]
          w-[420px]
          h-[420px]
          rounded-full
          bg-blue-500/5"
        />

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div
          className="relative
          grid
          lg:grid-cols-[1fr_0.9fr]
          min-h-[570px]"
        >

          {/* ===================================================
              LEFT CONTENT
          ==================================================== */}

          <div
            className="flex
            flex-col
            justify-center
            px-6
            sm:px-10
            lg:px-14
            xl:px-16
            py-12
            lg:py-16"
          >

            {/* Eyebrow */}

            <div
              className="flex
              items-center
              gap-2
              w-fit
              px-3
              py-1.5
              rounded-full
              bg-white/5
              border
              border-white/10"
            >

              <span
                className="w-2
                h-2
                rounded-full
                bg-emerald-400"
              />

              <span
                className="text-[10px]
                font-semibold
                tracking-wide
                text-slate-300"
              >
                TRUSTED DIGITAL HEALTHCARE
              </span>

            </div>

            {/* Main heading */}

            <h1
              className="mt-6
              text-4xl
              sm:text-5xl
              xl:text-6xl
              font-bold
              leading-[1.05]
              tracking-tight
              text-white
              max-w-[650px]"
            >
              Healthcare that
              <span className="block text-blue-400">
                fits your life.
              </span>
            </h1>

            {/* Description */}

            <p
              className="mt-6
              max-w-[560px]
              text-sm
              sm:text-base
              leading-7
              text-slate-400"
            >
              Find trusted doctors, explore specialities and book
              consultations without the usual hassle.
            </p>

            {/* =================================================
                SEARCH BAR
            ================================================== */}

            <div
              className="mt-8
              flex
              flex-col
              sm:flex-row
              gap-2
              max-w-[610px]
              p-2
              rounded-2xl
              bg-white"
            >

              {/* Speciality */}

              <button
                onClick={() => navigate("/Doctors")}
                className="flex
                items-center
                gap-3
                flex-1
                px-4
                py-3
                rounded-xl
                text-left
                hover:bg-slate-50
                transition-colors"
              >

                <span
                  className="w-9
                  h-9
                  rounded-lg
                  bg-blue-50
                  flex
                  items-center
                  justify-center"
                >
                  🩺
                </span>

                <div>

                  <p className="text-[10px] text-slate-400">
                    Find a specialist
                  </p>

                  <p className="text-xs font-semibold text-slate-700 mt-0.5">
                    Doctor or speciality
                  </p>

                </div>

              </button>

              {/* Divider */}

              <div className="hidden sm:block w-px bg-slate-200 my-2" />

              {/* Location */}

              <button
                onClick={() => navigate("/Doctors")}
                className="flex
                items-center
                gap-3
                flex-1
                px-4
                py-3
                rounded-xl
                text-left
                hover:bg-slate-50
                transition-colors"
              >

                <span
                  className="w-9
                  h-9
                  rounded-lg
                  bg-slate-100
                  flex
                  items-center
                  justify-center"
                >
                  📍
                </span>

                <div>

                  <p className="text-[10px] text-slate-400">
                    Location
                  </p>

                  <p className="text-xs font-semibold text-slate-700 mt-0.5">
                    Choose your location
                  </p>

                </div>

              </button>

              {/* Search button */}

              <button
                onClick={handleBookAppointment}
                className="px-6
                py-3
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                text-white
                text-xs
                font-semibold
                transition-colors"
              >
                Search
              </button>

            </div>

            {/* =================================================
                TRUST / SOCIAL PROOF
            ================================================== */}

            <div
              className="flex
              flex-wrap
              items-center
              gap-5
              mt-7"
            >

              {/* Profiles */}

              <div className="flex items-center">

                {assets.group_profiles && (
                  <img
                    src={assets.group_profiles}
                    alt="Patients"
                    className="h-8
                    w-auto
                    object-contain"
                  />
                )}

              </div>

              <div>

                <div className="flex items-center gap-1">

                  <span className="text-amber-400 text-sm">
                    ★
                  </span>

                  <span className="text-xs font-bold text-white">
                    Trusted healthcare experience
                  </span>

                </div>

                <p className="text-[10px] text-slate-500 mt-1">
                  Simple booking • Trusted doctors • Easy access
                </p>

              </div>

            </div>

          </div>

          {/* ===================================================
              RIGHT — DOCTOR IMAGE
          ==================================================== */}

          <div
            className="relative
            min-h-[360px]
            lg:min-h-full
            flex
            items-end
            justify-center
            overflow-hidden"
          >

            {/* Soft image background */}

            <div
              className="absolute
              inset-x-10
              top-16
              bottom-0
              rounded-t-[180px]
              bg-blue-600/10"
            />

            {/* Doctor */}

            <img
              src={assets.header2_img}
              alt="Doctor consultation"
              className="relative
              z-10
              w-full
              max-w-[570px]
              h-auto
              object-contain
              object-bottom
              lg:absolute
              lg:bottom-0
              lg:right-0"
            />

            {/* =================================================
                FLOATING CARD 1
            ================================================== */}

            <div
              className="absolute
              z-20
              top-10
              right-5
              sm:right-8
              lg:right-10
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-2xl
              bg-white
              shadow-[0_15px_40px_rgba(0,0,0,0.18)]"
            >

              <div
                className="w-9
                h-9
                rounded-xl
                bg-emerald-50
                flex
                items-center
                justify-center"
              >
                ✓
              </div>

              <div>

                <p className="text-xs font-bold text-slate-800">
                  Verified doctors
                </p>

                <p className="text-[10px] text-slate-400 mt-0.5">
                  Quality-focused care
                </p>

              </div>

            </div>

            {/* =================================================
                FLOATING CARD 2
            ================================================== */}

            <div
              className="absolute
              z-20
              bottom-8
              left-5
              sm:left-8
              lg:left-6
              px-4
              py-3
              rounded-2xl
              bg-white
              shadow-[0_15px_40px_rgba(0,0,0,0.18)]"
            >

              <div className="flex items-center gap-3">

                <div
                  className="w-9
                  h-9
                  rounded-xl
                  bg-blue-50
                  flex
                  items-center
                  justify-center"
                >
                  📅
                </div>

                <div>

                  <p className="text-xs font-bold text-slate-800">
                    Easy scheduling
                  </p>

                  <p className="text-[10px] text-slate-400 mt-0.5">
                    Pick a time that works
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =======================================================
          QUICK VALUE PROPOSITIONS
      ======================================================== */}

      <div
        className="max-w-[1180px]
        mx-auto
        grid
        grid-cols-1
        sm:grid-cols-3
        gap-3
        py-5"
      >

        {/* Card 1 */}

        <div
          className="flex
          items-center
          gap-3
          p-4
          rounded-2xl
          bg-white
          border
          border-slate-100"
        >

          <div
            className="w-10
            h-10
            rounded-xl
            bg-blue-50
            flex
            items-center
            justify-center"
          >
            🩺
          </div>

          <div>

            <p className="text-xs font-bold text-slate-800">
              Multiple specialities
            </p>

            <p className="text-[10px] text-slate-400 mt-1">
              Find the right doctor
            </p>

          </div>

        </div>

        {/* Card 2 */}

        <div
          className="flex
          items-center
          gap-3
          p-4
          rounded-2xl
          bg-white
          border
          border-slate-100"
        >

          <div
            className="w-10
            h-10
            rounded-xl
            bg-emerald-50
            flex
            items-center
            justify-center"
          >
            ⚡
          </div>

          <div>

            <p className="text-xs font-bold text-slate-800">
              Simple booking
            </p>

            <p className="text-[10px] text-slate-400 mt-1">
              Choose your time and book
            </p>

          </div>

        </div>

        {/* Card 3 */}

        <div
          className="flex
          items-center
          gap-3
          p-4
          rounded-2xl
          bg-white
          border
          border-slate-100"
        >

          <div
            className="w-10
            h-10
            rounded-xl
            bg-violet-50
            flex
            items-center
            justify-center"
          >
            🔒
          </div>

          <div>

            <p className="text-xs font-bold text-slate-800">
              Your information
            </p>

            <p className="text-[10px] text-slate-400 mt-1">
              Built with privacy in mind
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Header;