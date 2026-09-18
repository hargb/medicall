import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <main className="bg-slate-50 min-h-screen">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="px-5 sm:px-8 pt-10 sm:pt-14">

        <div className="max-w-[1180px] mx-auto">

          <div
            className="relative
            overflow-hidden
            rounded-[28px]
            bg-slate-950
            px-6
            sm:px-10
            lg:px-14
            py-12
            sm:py-16"
          >

            {/* Background decoration */}

            <div
              className="absolute
              -right-24
              -top-24
              w-72
              h-72
              rounded-full
              bg-blue-600/10"
            />

            <div
              className="absolute
              -left-32
              -bottom-32
              w-80
              h-80
              rounded-full
              bg-cyan-500/5"
            />

            <div className="relative max-w-3xl">

              <div className="flex items-center gap-2 mb-5">

                <span className="w-7 h-[2px] bg-blue-500 rounded-full" />

                <span
                  className="text-[10px]
                  uppercase
                  tracking-[0.2em]
                  font-bold
                  text-blue-400"
                >
                  About Medi-call
                </span>

              </div>

              <h1
                className="text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                leading-tight
                tracking-tight
                text-white"
              >
                Healthcare should feel
                <span className="text-blue-400"> simple.</span>
              </h1>

              <p
                className="mt-5
                max-w-2xl
                text-sm
                sm:text-base
                leading-7
                text-slate-400"
              >
                We are building a simpler way for patients to discover
                healthcare professionals, manage appointments and stay
                connected with their care.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          OUR STORY
      ====================================================== */}

      <section className="px-5 sm:px-8 py-14 sm:py-20">

        <div
          className="max-w-[1180px]
          mx-auto
          grid
          lg:grid-cols-[0.85fr_1.15fr]
          gap-10
          lg:gap-16
          items-center"
        >

          {/* Image */}

          <div className="relative">

            <div
              className="absolute
              -inset-3
              rounded-[30px]
              bg-blue-100
              -z-10"
            />

            <img
              src={assets.about_image}
              alt="Healthcare professionals"
              className="w-full
              rounded-[26px]
              object-cover
              max-h-[500px]"
            />

            {/* Floating badge */}

            <div
              className="absolute
              bottom-5
              left-5
              bg-white
              rounded-2xl
              px-4
              py-3
              shadow-[0_12px_35px_rgba(15,23,42,0.12)]"
            >

              <p className="text-[10px] uppercase tracking-wider text-slate-400">
                Our approach
              </p>

              <p className="text-sm font-bold text-slate-800 mt-1">
                Patient-first healthcare
              </p>

            </div>

          </div>

          {/* Content */}

          <div>

            <div className="flex items-center gap-2 mb-4">

              <span className="w-7 h-[2px] bg-blue-600 rounded-full" />

              <span
                className="text-[10px]
                uppercase
                tracking-[0.18em]
                font-bold
                text-blue-600"
              >
                Our story
              </span>

            </div>

            <h2
              className="text-2xl
              sm:text-3xl
              font-bold
              text-slate-900
              tracking-tight"
            >
              Making healthcare easier to navigate
            </h2>

            <div
              className="mt-6
              space-y-5
              text-sm
              leading-7
              text-slate-500"
            >

              <p>
                Welcome to Medi-call, your trusted partner in managing
                your healthcare needs conveniently and efficiently. At
                Medi-call, we understand the challenges individuals face
                when it comes to scheduling doctor appointments and
                managing their health journey.
              </p>

              <p>
                Medi-call is committed to excellence in healthcare
                technology. We continuously strive to enhance our
                platform, integrating modern technology to improve the
                user experience and make access to healthcare simpler.
              </p>

            </div>

            {/* Vision */}

            <div
              className="mt-7
              p-5
              rounded-2xl
              bg-white
              border
              border-slate-100"
            >

              <div className="flex items-center gap-3">

                <div
                  className="w-10
                  h-10
                  rounded-xl
                  bg-blue-50
                  flex
                  items-center
                  justify-center
                  text-blue-600"
                >
                  ◈
                </div>

                <div>

                  <p
                    className="text-[10px]
                    uppercase
                    tracking-wider
                    font-bold
                    text-blue-600"
                  >
                    Our vision
                  </p>

                  <p className="text-sm font-bold text-slate-800 mt-1">
                    A seamless healthcare experience
                  </p>

                </div>

              </div>

              <p
                className="mt-4
                text-sm
                leading-6
                text-slate-500"
              >
                Our vision at Medi-call is to create a seamless
                healthcare experience for every user. We aim to bridge
                the gap between patients and healthcare providers,
                making it easier for you to access the care you need,
                when you need it.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}

      <section className="bg-white px-5 sm:px-8 py-14 sm:py-20">

        <div className="max-w-[1180px] mx-auto">

          {/* Heading */}

          <div className="text-center max-w-2xl mx-auto">

            <div className="flex items-center justify-center gap-2 mb-4">

              <span className="w-7 h-[2px] bg-blue-600 rounded-full" />

              <span
                className="text-[10px]
                uppercase
                tracking-[0.18em]
                font-bold
                text-blue-600"
              >
                Why Medi-call
              </span>

              <span className="w-7 h-[2px] bg-blue-600 rounded-full" />

            </div>

            <h2
              className="text-2xl
              sm:text-3xl
              font-bold
              text-slate-900
              tracking-tight"
            >
              Built around your healthcare journey
            </h2>

            <p className="mt-3 text-sm text-slate-500 leading-6">
              Everything is designed to make discovering and managing
              healthcare simpler.
            </p>

          </div>

          {/* Cards */}

          <div
            className="grid
            md:grid-cols-3
            gap-5
            mt-10"
          >

            {/* Efficiency */}

            <div
              className="group
              rounded-[24px]
              border
              border-slate-100
              bg-slate-50
              p-6
              hover:bg-blue-600
              hover:border-blue-600
              transition-all
              duration-300"
            >

              <div
                className="w-12
                h-12
                rounded-2xl
                bg-blue-100
                group-hover:bg-white/10
                flex
                items-center
                justify-center
                text-blue-600
                group-hover:text-white
                text-xl
                transition-all"
              >
                ⚡
              </div>

              <h3
                className="mt-6
                text-lg
                font-bold
                text-slate-900
                group-hover:text-white"
              >
                Efficiency
              </h3>

              <p
                className="mt-3
                text-sm
                leading-6
                text-slate-500
                group-hover:text-blue-100"
              >
                Streamlined appointment scheduling that fits into
                your busy lifestyle without unnecessary steps.
              </p>

              <div
                className="mt-6
                text-xs
                font-semibold
                text-blue-600
                group-hover:text-white"
              >
                Simple by design →
              </div>

            </div>

            {/* Convenience */}

            <div
              className="group
              rounded-[24px]
              border
              border-slate-100
              bg-slate-50
              p-6
              hover:bg-blue-600
              hover:border-blue-600
              transition-all
              duration-300"
            >

              <div
                className="w-12
                h-12
                rounded-2xl
                bg-emerald-100
                group-hover:bg-white/10
                flex
                items-center
                justify-center
                text-emerald-600
                group-hover:text-white
                text-xl
                transition-all"
              >
                ◎
              </div>

              <h3
                className="mt-6
                text-lg
                font-bold
                text-slate-900
                group-hover:text-white"
              >
                Convenience
              </h3>

              <p
                className="mt-3
                text-sm
                leading-6
                text-slate-500
                group-hover:text-blue-100"
              >
                Access healthcare professionals through an experience
                designed to reduce the friction around finding and
                booking care.
              </p>

              <div
                className="mt-6
                text-xs
                font-semibold
                text-blue-600
                group-hover:text-white"
              >
                Care, without the hassle →
              </div>

            </div>

            {/* Personalization */}

            <div
              className="group
              rounded-[24px]
              border
              border-slate-100
              bg-slate-50
              p-6
              hover:bg-blue-600
              hover:border-blue-600
              transition-all
              duration-300"
            >

              <div
                className="w-12
                h-12
                rounded-2xl
                bg-violet-100
                group-hover:bg-white/10
                flex
                items-center
                justify-center
                text-violet-600
                group-hover:text-white
                text-xl
                transition-all"
              >
                ✦
              </div>

              <h3
                className="mt-6
                text-lg
                font-bold
                text-slate-900
                group-hover:text-white"
              >
                Personalization
              </h3>

              <p
                className="mt-3
                text-sm
                leading-6
                text-slate-500
                group-hover:text-blue-100"
              >
                A healthcare experience that can adapt to your
                preferences, appointments and ongoing needs.
              </p>

              <div
                className="mt-6
                text-xs
                font-semibold
                text-blue-600
                group-hover:text-white"
              >
                Designed around you →
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="px-5 sm:px-8 py-14">

        <div
          className="max-w-[1180px]
          mx-auto
          rounded-[28px]
          bg-blue-600
          px-6
          sm:px-10
          lg:px-14
          py-10
          sm:py-12
          flex
          flex-col
          md:flex-row
          md:items-center
          md:justify-between
          gap-6"
        >

          <div>

            <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-blue-200">
              Your health matters
            </p>

            <h2
              className="mt-2
              text-2xl
              sm:text-3xl
              font-bold
              text-white"
            >
              Start your healthcare journey
            </h2>

            <p className="mt-2 text-sm text-blue-100">
              Find a doctor and book your next consultation.
            </p>

          </div>

          <a
            href="/Doctors"
            className="w-fit
            px-6
            py-3
            rounded-xl
            bg-white
            text-blue-600
            text-sm
            font-semibold
            hover:bg-blue-50
            transition-colors"
          >
            Find a doctor →
          </a>

        </div>

      </section>

    </main>
  );
};

export default About;