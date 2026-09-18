import React, { useMemo, useState } from "react";

const BasicRemedies = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedRemedy, setSelectedRemedy] = useState(null);

  const remedies = [
    {
      id: 1,
      title: "Honey and Lemon for Sore Throat",
      category: "Cold & Throat",
      icon: "🍯",
      description:
        "A warm mixture of honey and lemon may help soothe a sore throat and reduce irritation.",
      fullDescription:
        "Mix a tablespoon of honey and a few drops of fresh lemon juice into a cup of warm water. Sip the mixture slowly. Honey may provide a soothing effect for throat irritation.",
    },
    {
      id: 2,
      title: "Turmeric Milk for Cough",
      category: "Cold & Throat",
      icon: "🥛",
      description:
        "Warm turmeric milk is a traditional drink often used for comfort during coughs and colds.",
      fullDescription:
        "Mix around half a teaspoon of turmeric powder into a cup of warm milk. You can add a small amount of black pepper if desired. This is a traditional comfort drink and should not replace medical treatment.",
    },
    {
      id: 3,
      title: "Aloe Vera for Minor Skin Irritation",
      category: "Skin Care",
      icon: "🌿",
      description:
        "Aloe vera gel can provide a cooling and soothing sensation for minor skin irritation.",
      fullDescription:
        "A small amount of plain aloe vera gel can be applied to intact skin. Avoid applying it to deep wounds, serious burns or infected areas. Stop if irritation occurs.",
    },
    {
      id: 4,
      title: "Ginger Tea for Nausea",
      category: "Digestive",
      icon: "🫚",
      description:
        "Ginger tea is commonly used to help with mild nausea and digestive discomfort.",
      fullDescription:
        "Boil a few slices of fresh ginger in water for several minutes. Strain and drink while warm. Ginger may help with some forms of nausea, although persistent or severe nausea needs medical evaluation.",
    },
    {
      id: 5,
      title: "Cucumber for Puffy Eyes",
      category: "Skin Care",
      icon: "🥒",
      description:
        "Chilled cucumber slices can temporarily cool the skin around tired or puffy eyes.",
      fullDescription:
        "Place clean, chilled cucumber slices over closed eyes for around 10–15 minutes. Avoid putting cucumber or its juice directly inside the eyes.",
    },
    {
      id: 6,
      title: "Basil Leaves for Cough",
      category: "Cold & Throat",
      icon: "🌱",
      description:
        "Basil is traditionally used in drinks and preparations intended to soothe throat discomfort.",
      fullDescription:
        "Basil leaves can be used to prepare a warm herbal drink. Evidence for treating cough with basil is limited, so persistent or worsening symptoms should be evaluated by a healthcare professional.",
    },
    {
      id: 7,
      title: "Garlic with Food",
      category: "Wellness",
      icon: "🧄",
      description:
        "Garlic is a nutritious ingredient that can be included as part of a balanced diet.",
      fullDescription:
        "Fresh garlic can be added to meals according to personal preference. Although garlic has several biologically active compounds, it should not be considered a replacement for treatment of infections.",
    },
    {
      id: 8,
      title: "Cool Compress for Sunburn",
      category: "Skin Care",
      icon: "🧊",
      description:
        "A cool, damp compress can help provide temporary relief from mild sunburn discomfort.",
      fullDescription:
        "Apply a clean, cool, damp cloth to mildly sunburned skin for short periods. Avoid ice directly on the skin. Stay hydrated and protect the affected area from further sun exposure.",
    },
    {
      id: 9,
      title: "Peppermint for Headache Comfort",
      category: "Headache",
      icon: "🌿",
      description:
        "Some people use diluted peppermint oil externally for temporary headache relief.",
      fullDescription:
        "If using peppermint oil topically, it should be appropriately diluted and kept away from the eyes and broken skin. Stop using it if irritation occurs. Severe or unusual headaches require medical attention.",
    },
    {
      id: 10,
      title: "Saltwater Gargle",
      category: "Cold & Throat",
      icon: "🧂",
      description:
        "A warm saltwater gargle can provide temporary relief from throat irritation.",
      fullDescription:
        "Dissolve about half a teaspoon of salt in a glass of warm water. Gargle and spit it out rather than swallowing. Seek medical advice if throat symptoms are severe or persistent.",
    },
  ];

  const categories = [
    "All",
    "Cold & Throat",
    "Digestive",
    "Skin Care",
    "Headache",
    "Wellness",
  ];

  const filteredRemedies = useMemo(() => {
    return remedies.filter((remedy) => {
      const matchesCategory =
        activeCategory === "All" ||
        remedy.category === activeCategory;

      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        remedy.title.toLowerCase().includes(searchText) ||
        remedy.description.toLowerCase().includes(searchText) ||
        remedy.category.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <main className="min-h-screen bg-slate-50">

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

            <div
              className="absolute
              -right-24
              -top-24
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
                  Health Library
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
                Everyday health,
                <span className="block text-blue-400">
                  explained simply.
                </span>
              </h1>

              <p
                className="mt-5
                max-w-2xl
                text-sm
                sm:text-base
                leading-7
                text-slate-400"
              >
                Explore simple self-care ideas for common everyday
                discomforts. Use this library as general information,
                not as a substitute for professional medical care.
              </p>

              {/* Search */}

              <div
                className="mt-8
                max-w-[620px]
                relative"
              >

                <span
                  className="absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-400"
                >
                  ⌕
                </span>

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search headache, cough, skin care..."
                  className="w-full
                  h-13
                  py-3
                  pl-11
                  pr-5
                  rounded-2xl
                  bg-white
                  text-sm
                  text-slate-800
                  placeholder:text-slate-400
                  outline-none
                  focus:ring-4
                  focus:ring-blue-500/20"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SAFETY NOTICE
      ====================================================== */}

      <section className="px-5 sm:px-8 pt-6">

        <div
          className="max-w-[1180px]
          mx-auto
          flex
          items-start
          gap-3
          p-4
          rounded-2xl
          bg-amber-50
          border
          border-amber-100"
        >

          <span className="text-lg flex-shrink-0">
            ⚠️
          </span>

          <div>

            <p className="text-xs font-bold text-amber-900">
              Health information notice
            </p>

            <p className="mt-1 text-[11px] leading-5 text-amber-800">
              These suggestions are for general self-care information.
              They are not a diagnosis or a replacement for advice from
              a qualified healthcare professional. Seek medical attention
              for severe, persistent or worsening symptoms.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <section className="px-5 sm:px-8 py-10 sm:py-14">

        <div className="max-w-[1180px] mx-auto">

          {/* Header */}

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">

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
                  Browse library
                </span>

              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Self-care guides
              </h2>

            </div>

            <p className="text-xs text-slate-400">
              {filteredRemedies.length}{" "}
              {filteredRemedies.length === 1 ? "guide" : "guides"} found
            </p>

          </div>

          {/* =================================================
              CATEGORIES
          ================================================== */}

          <div
            className="flex
            gap-2
            overflow-x-auto
            py-5
            scrollbar-thin"
          >

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  flex-shrink-0
                  px-4
                  py-2
                  rounded-full
                  text-xs
                  font-semibold
                  border
                  transition-all
                  ${
                    activeCategory === category
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "bg-white border-slate-200 text-slate-500 hover:border-blue-200 hover:text-blue-600"
                  }
                `}
              >
                {category}
              </button>

            ))}

          </div>

          {/* =================================================
              CARDS
          ================================================== */}

          {filteredRemedies.length > 0 ? (

            <div
              className="grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-5"
            >

              {filteredRemedies.map((remedy) => (

                <article
                  key={remedy.id}
                  className="group
                  bg-white
                  border
                  border-slate-100
                  rounded-[24px]
                  p-5
                  hover:border-blue-100
                  hover:-translate-y-1
                  hover:shadow-[0_14px_35px_rgba(15,23,42,0.07)]
                  transition-all
                  duration-300"
                >

                  {/* Icon + category */}

                  <div className="flex items-center justify-between">

                    <div
                      className="w-12
                      h-12
                      rounded-2xl
                      bg-blue-50
                      flex
                      items-center
                      justify-center
                      text-2xl
                      group-hover:scale-105
                      transition-transform"
                    >
                      {remedy.icon}
                    </div>

                    <span
                      className="px-2.5
                      py-1
                      rounded-full
                      bg-slate-50
                      text-[9px]
                      font-semibold
                      text-slate-500"
                    >
                      {remedy.category}
                    </span>

                  </div>

                  {/* Content */}

                  <h3
                    className="mt-5
                    text-base
                    font-bold
                    leading-6
                    text-slate-900"
                  >
                    {remedy.title}
                  </h3>

                  <p
                    className="mt-2
                    text-sm
                    leading-6
                    text-slate-500
                    line-clamp-3"
                  >
                    {remedy.description}
                  </p>

                  {/* Bottom */}

                  <div
                    className="flex
                    items-center
                    justify-between
                    mt-5
                    pt-4
                    border-t
                    border-slate-100"
                  >

                    <span
                      className="text-[10px]
                      text-slate-400"
                    >
                      General information
                    </span>

                    <button
                      onClick={() => setSelectedRemedy(remedy)}
                      className="text-xs
                      font-semibold
                      text-blue-600
                      hover:text-blue-700"
                    >
                      Read guide →
                    </button>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            /* Empty search */

            <div
              className="py-16
              text-center
              rounded-[24px]
              bg-white
              border
              border-slate-100"
            >

              <div
                className="w-14
                h-14
                mx-auto
                rounded-2xl
                bg-slate-50
                flex
                items-center
                justify-center
                text-xl"
              >
                🔎
              </div>

              <h3 className="mt-4 text-base font-bold text-slate-800">
                No guides found
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Try another symptom or category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-5
                text-xs
                font-semibold
                text-blue-600"
              >
                Clear filters
              </button>

            </div>

          )}

        </div>

      </section>

      {/* =====================================================
          DOCTOR CTA
      ====================================================== */}

      <section className="px-5 sm:px-8 pb-14">

        <div
          className="max-w-[1180px]
          mx-auto
          rounded-[28px]
          bg-blue-600
          p-7
          sm:p-10
          flex
          flex-col
          md:flex-row
          md:items-center
          md:justify-between
          gap-6"
        >

          <div>

            <p
              className="text-[10px]
              uppercase
              tracking-[0.18em]
              font-bold
              text-blue-200"
            >
              Need professional care?
            </p>

            <h2
              className="mt-2
              text-2xl
              sm:text-3xl
              font-bold
              text-white"
            >
              Don't self-treat when you need a doctor.
            </h2>

            <p className="mt-2 text-sm text-blue-100">
              Explore doctors and find a suitable speciality.
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

      {/* =====================================================
          DETAIL MODAL
      ====================================================== */}

      {selectedRemedy && (

        <div
          className="fixed
          inset-0
          z-50
          bg-slate-950/60
          backdrop-blur-sm
          flex
          items-center
          justify-center
          p-5"
          onClick={() => setSelectedRemedy(null)}
        >

          <div
            className="w-full
            max-w-[620px]
            max-h-[85vh]
            overflow-y-auto
            bg-white
            rounded-[28px]
            shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Modal header */}

            <div
              className="flex
              items-start
              justify-between
              gap-4
              p-6
              border-b
              border-slate-100"
            >

              <div className="flex items-center gap-4">

                <div
                  className="w-12
                  h-12
                  rounded-2xl
                  bg-blue-50
                  flex
                  items-center
                  justify-center
                  text-2xl"
                >
                  {selectedRemedy.icon}
                </div>

                <div>

                  <span
                    className="text-[9px]
                    uppercase
                    tracking-wider
                    font-bold
                    text-blue-600"
                  >
                    {selectedRemedy.category}
                  </span>

                  <h2
                    className="mt-1
                    text-lg
                    font-bold
                    leading-6
                    text-slate-900"
                  >
                    {selectedRemedy.title}
                  </h2>

                </div>

              </div>

              <button
                onClick={() => setSelectedRemedy(null)}
                className="w-9
                h-9
                rounded-xl
                bg-slate-50
                text-slate-500
                hover:bg-slate-100
                flex
                items-center
                justify-center
                flex-shrink-0"
                aria-label="Close"
              >
                ×
              </button>

            </div>

            {/* Modal body */}

            <div className="p-6">

              <p
                className="text-sm
                leading-7
                text-slate-600"
              >
                {selectedRemedy.fullDescription}
              </p>

              <div
                className="mt-6
                p-4
                rounded-2xl
                bg-amber-50
                border
                border-amber-100"
              >

                <p className="text-xs font-bold text-amber-900">
                  When to seek medical care
                </p>

                <p
                  className="mt-1
                  text-[11px]
                  leading-5
                  text-amber-800"
                >
                  If symptoms are severe, persistent, suddenly worsen,
                  or you are concerned about your condition, consult a
                  qualified healthcare professional.
                </p>

              </div>

              <button
                onClick={() => setSelectedRemedy(null)}
                className="mt-6
                w-full
                py-3
                rounded-xl
                bg-slate-900
                text-white
                text-sm
                font-semibold
                hover:bg-blue-600
                transition-colors"
              >
                Close guide
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
};

export default BasicRemedies;