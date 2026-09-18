import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
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
              -top-28
              w-80
              h-80
              rounded-full
              bg-blue-600/10"
            />

            <div
              className="absolute
              -left-24
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
                  Contact Medi-call
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
                We're here to
                <span className="text-blue-400"> help.</span>
              </h1>

              <p
                className="mt-5
                max-w-2xl
                text-sm
                sm:text-base
                leading-7
                text-slate-400"
              >
                Have a question about Medi-call, appointments or
                our platform? Reach out to us through the channels
                below.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CONTACT OPTIONS
      ====================================================== */}

      <section className="px-5 sm:px-8 py-10">

        <div
          className="max-w-[1180px]
          mx-auto
          grid
          sm:grid-cols-3
          gap-4"
        >

          {/* Call */}

          <a
            href="tel:01129911774"
            className="group
            bg-white
            border
            border-slate-100
            rounded-2xl
            p-5
            hover:border-blue-100
            hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]
            transition-all"
          >

            <div
              className="w-11
              h-11
              rounded-xl
              bg-blue-50
              flex
              items-center
              justify-center
              text-blue-600
              text-lg"
            >
              ☎
            </div>

            <p
              className="text-[10px]
              uppercase
              tracking-wider
              font-bold
              text-slate-400
              mt-5"
            >
              Call us
            </p>

            <p
              className="text-sm
              font-bold
              text-slate-800
              mt-1
              group-hover:text-blue-600"
            >
              011-299-117-74
            </p>

            <p className="text-[11px] text-slate-400 mt-1">
              Speak with our team
            </p>

          </a>

          {/* Email */}

          <a
            href="mailto:medicall112@gmail.com"
            className="group
            bg-white
            border
            border-slate-100
            rounded-2xl
            p-5
            hover:border-blue-100
            hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]
            transition-all"
          >

            <div
              className="w-11
              h-11
              rounded-xl
              bg-emerald-50
              flex
              items-center
              justify-center
              text-emerald-600
              text-lg"
            >
              ✉
            </div>

            <p
              className="text-[10px]
              uppercase
              tracking-wider
              font-bold
              text-slate-400
              mt-5"
            >
              Email us
            </p>

            <p
              className="text-sm
              font-bold
              text-slate-800
              mt-1
              break-all
              group-hover:text-blue-600"
            >
              medicall112@gmail.com
            </p>

            <p className="text-[11px] text-slate-400 mt-1">
              Send us your query
            </p>

          </a>

          {/* Location */}

          <div
            className="bg-white
            border
            border-slate-100
            rounded-2xl
            p-5"
          >

            <div
              className="w-11
              h-11
              rounded-xl
              bg-violet-50
              flex
              items-center
              justify-center
              text-violet-600
              text-lg"
            >
              📍
            </div>

            <p
              className="text-[10px]
              uppercase
              tracking-wider
              font-bold
              text-slate-400
              mt-5"
            >
              Our location
            </p>

            <p className="text-sm font-bold text-slate-800 mt-1">
              New Delhi, India
            </p>

            <p className="text-[11px] text-slate-400 mt-1">
              Visit our office
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          OFFICE SECTION
      ====================================================== */}

      <section className="px-5 sm:px-8 pb-14 sm:pb-20">

        <div
          className="max-w-[1180px]
          mx-auto
          grid
          lg:grid-cols-[0.9fr_1.1fr]
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
              src={assets.contact_image}
              alt="Medi-call office"
              className="w-full
              rounded-[26px]
              object-cover
              max-h-[470px]"
            />

          </div>

          {/* Details */}

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
                Our office
              </span>

            </div>

            <h2
              className="text-2xl
              sm:text-3xl
              font-bold
              text-slate-900
              tracking-tight"
            >
              Come say hello
            </h2>

            <p
              className="mt-4
              text-sm
              leading-7
              text-slate-500"
            >
              Our office is located in Chirag Delhi, New Delhi.
              If you need assistance or want to connect with the
              Medi-call team, you can reach us using the contact
              details provided.
            </p>

            {/* Address */}

            <div
              className="mt-7
              flex
              gap-4
              p-5
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
                justify-center
                flex-shrink-0"
              >
                📍
              </div>

              <div>

                <p className="text-xs font-bold text-slate-800">
                  Office address
                </p>

                <p
                  className="mt-1
                  text-sm
                  leading-6
                  text-slate-500"
                >
                  341/4 Chirag Delhi
                  <br />
                  Near Chirag Delhi Metro,
                  <br />
                  New Delhi, India
                </p>

              </div>

            </div>

            {/* Phone */}

            <div
              className="mt-3
              flex
              gap-4
              p-5
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
                justify-center
                flex-shrink-0"
              >
                ☎
              </div>

              <div>

                <p className="text-xs font-bold text-slate-800">
                  Phone
                </p>

                <a
                  href="tel:01129911774"
                  className="mt-1
                  block
                  text-sm
                  text-blue-600
                  hover:text-blue-700"
                >
                  011-299-117-74
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CAREERS
      ====================================================== */}

      <section className="bg-white px-5 sm:px-8 py-14 sm:py-20">

        <div className="max-w-[1180px] mx-auto">

          <div
            className="rounded-[28px]
            bg-slate-50
            border
            border-slate-100
            p-6
            sm:p-8
            lg:p-10
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-7"
          >

            <div className="max-w-2xl">

              <div className="flex items-center gap-2 mb-4">

                <span className="w-7 h-[2px] bg-blue-600 rounded-full" />

                <span
                  className="text-[10px]
                  uppercase
                  tracking-[0.18em]
                  font-bold
                  text-blue-600"
                >
                  Careers
                </span>

              </div>

              <h2
                className="text-2xl
                sm:text-3xl
                font-bold
                text-slate-900
                tracking-tight"
              >
                Build the future of healthcare with us.
              </h2>

              <p
                className="mt-3
                text-sm
                leading-6
                text-slate-500"
              >
                Learn more about our teams and opportunities at
                Medi-call.
              </p>

            </div>

            <button
              type="button"
              className="w-fit
              px-6
              py-3
              rounded-xl
              bg-slate-900
              text-white
              text-sm
              font-semibold
              hover:bg-blue-600
              transition-colors"
            >
              Explore jobs →
            </button>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-5 sm:px-8 py-12">

        <div
          className="max-w-[1180px]
          mx-auto
          rounded-[28px]
          bg-blue-600
          px-6
          sm:px-10
          py-10
          text-center"
        >

          <p
            className="text-[10px]
            uppercase
            tracking-[0.18em]
            font-bold
            text-blue-200"
          >
            Need healthcare?
          </p>

          <h2
            className="mt-2
            text-2xl
            sm:text-3xl
            font-bold
            text-white"
          >
            Find the right doctor for you.
          </h2>

          <p className="mt-2 text-sm text-blue-100">
            Browse doctors and explore available specialities.
          </p>

          <a
            href="/Doctors"
            className="inline-block
            mt-6
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
            Browse doctors →
          </a>

        </div>

      </section>

    </main>
  );
};

export default Contact;