import React from "react";
import { useNavigate } from "react-router-dom";

const SpecialityMenu = () => {
  const navigate = useNavigate();

  const specialities = [
    {
      name: "General physician",
      title: "General Physician",
      description: "Everyday health, fever & common conditions",
      icon: "🩺",
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      name: "Gynecologist",
      title: "Gynecologist",
      description: "Women's health, wellness & care",
      icon: "♀",
      bg: "bg-pink-50",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      name: "Dermatologist",
      title: "Dermatologist",
      description: "Skin, hair & cosmetic health",
      icon: "✦",
      bg: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      name: "Pediatricians",
      title: "Pediatrician",
      description: "Healthcare specially for children",
      icon: "♧",
      bg: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      name: "Neurologist",
      title: "Neurologist",
      description: "Brain, nerves & nervous system",
      icon: "◉",
      bg: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      name: "Gastroenterologist",
      title: "Gastroenterologist",
      description: "Digestive system & gut health",
      icon: "⌁",
      bg: "bg-yellow-50",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
  ];

  const handleSpeciality = (speciality) => {
    navigate(`/Doctors/${encodeURIComponent(speciality)}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="mt-16 sm:mt-20 lg:mt-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">

        {/* ================= HEADER ================= */}

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">

          <div>

            <div className="flex items-center gap-2 mb-3">

              <span className="w-7 h-[2px] bg-blue-600 rounded-full" />

              <span
                className="text-[10px] sm:text-[11px]
                uppercase tracking-[0.18em]
                font-bold text-blue-600"
              >
                Healthcare specialists
              </span>

            </div>

            <h2
              className="text-2xl sm:text-3xl lg:text-[34px]
              font-bold tracking-[-1px]
              text-slate-900"
            >
              Find care for every need
            </h2>

            <p
              className="mt-2 max-w-[590px]
              text-sm sm:text-[15px]
              leading-6 text-slate-500"
            >
              Choose a speciality and find experienced doctors
              who can help you with your healthcare needs.
            </p>

          </div>

          <button
            onClick={() => {
              navigate("/Doctors");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-center gap-2 w-fit
            text-sm font-semibold
            text-blue-600
            hover:text-blue-700
            transition-colors"
          >
            View all doctors

            <span
              className="text-lg
              transition-transform duration-200
              group-hover:translate-x-1"
            >
              →
            </span>
          </button>

        </div>

        {/* ================= SPECIALITY CARDS ================= */}

        <div
          className="grid
          grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-6
          gap-3 sm:gap-4"
        >

          {specialities.map((item) => (

            <button
              key={item.name}
              onClick={() => handleSpeciality(item.name)}
              className="group relative
              overflow-hidden
              text-left
              p-4 sm:p-5
              min-h-[205px]
              rounded-2xl
              bg-white
              border border-slate-100
              hover:-translate-y-1
              hover:border-blue-100
              hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]
              transition-all duration-300"
            >

              {/* Decorative Circle */}

              <div
                className={`absolute
                -right-10 -top-10
                w-28 h-28
                rounded-full
                ${item.bg}
                opacity-80
                group-hover:scale-125
                transition-transform duration-500`}
              />

              {/* ================= ICON ================= */}

              <div className="relative flex items-start justify-between">

                <div
                  className={`w-12 h-12
                  rounded-2xl
                  ${item.iconBg}
                  flex items-center justify-center
                  text-xl
                  ${item.iconColor}
                  group-hover:scale-105
                  transition-transform duration-300`}
                >
                  {item.icon}
                </div>

                <div
                  className="w-8 h-8
                  rounded-full
                  bg-slate-50
                  flex items-center justify-center
                  text-slate-400
                  opacity-0
                  translate-x-1
                  group-hover:opacity-100
                  group-hover:translate-x-0
                  transition-all duration-300"
                >
                  →
                </div>

              </div>

              {/* ================= CONTENT ================= */}

              <div className="relative mt-5">

                <h3
                  className="text-sm
                  sm:text-[15px]
                  font-bold
                  text-slate-800
                  group-hover:text-blue-600
                  transition-colors"
                >
                  {item.title}
                </h3>

                <p
                  className="mt-2
                  text-[10px]
                  sm:text-xs
                  leading-5
                  text-slate-400"
                >
                  {item.description}
                </p>

              </div>

              {/* ================= BOTTOM ================= */}

              <div
                className="absolute
                left-4 right-4
                bottom-4
                flex items-center
                justify-between"
              >

                <span
                  className="text-[9px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-slate-300"
                >
                  Specialist
                </span>

                <span
                  className="text-[10px]
                  font-semibold
                  text-blue-500
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity"
                >
                  Explore →
                </span>

              </div>

            </button>

          ))}

        </div>

        {/* ================= SEARCH CTA ================= */}

        <div
          className="mt-6
          p-5 sm:p-6
          rounded-2xl
          bg-slate-50
          border border-slate-100
          flex flex-col sm:flex-row
          items-start sm:items-center
          justify-between gap-4"
        >

          <div className="flex items-center gap-3">

            <div
              className="w-11 h-11
              rounded-xl
              bg-white
              border border-slate-100
              flex items-center justify-center
              text-lg"
            >
              🔍
            </div>

            <div>

              <p
                className="text-sm
                font-semibold
                text-slate-800"
              >
                Not sure which doctor you need?
              </p>

              <p
                className="text-xs
                text-slate-400
                mt-1"
              >
                Browse our complete list and find the right specialist.
              </p>

            </div>

          </div>

          <button
            onClick={() => {
              navigate("/Doctors");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="px-5 py-2.5
            rounded-xl
            bg-white
            border border-slate-200
            text-xs sm:text-sm
            font-semibold
            text-slate-700
            hover:border-blue-200
            hover:bg-blue-50
            hover:text-blue-600
            transition-all"
          >
            Browse all doctors →
          </button>

        </div>

      </div>
    </section>
  );
};

export default SpecialityMenu;