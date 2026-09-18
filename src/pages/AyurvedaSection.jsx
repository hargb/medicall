import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const Ayurveda = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const blogs = [
    {
      id: 1,
      title: "5 Ayurvedic Tips for a Healthy Lifestyle",
      category: "Lifestyle",
      readTime: "5 min read",
      icon: "🌿",
      excerpt:
        "Discover practical Ayurvedic principles that can fit naturally into your everyday lifestyle.",
      content:
        "Ayurveda is a traditional system of medicine rooted in India. Its approach emphasizes daily routines, balanced nutrition, adequate rest and mindful living.",
    },
    {
      id: 2,
      title: "Herbs for Mental Clarity in Ayurveda",
      category: "Herbs",
      readTime: "6 min read",
      icon: "🌱",
      excerpt:
        "Explore traditional Ayurvedic herbs commonly discussed for focus, relaxation and mental well-being.",
      content:
        "Herbs such as Brahmi and Ashwagandha have a long history of use in Ayurvedic traditions. Their suitability can vary from person to person, especially when medicines or medical conditions are involved.",
    },
    {
      id: 3,
      title: "The Role of Diet in Ayurveda",
      category: "Nutrition",
      readTime: "7 min read",
      icon: "🥗",
      excerpt:
        "Understand how Ayurveda approaches food, daily routines and individual dietary preferences.",
      content:
        "Ayurvedic dietary traditions consider food choices, digestion, routine and individual constitution. A balanced modern diet should still meet your nutritional requirements.",
    },
    {
      id: 4,
      title: "Understanding Dinacharya",
      category: "Lifestyle",
      readTime: "5 min read",
      icon: "☀️",
      excerpt:
        "Learn about Dinacharya, the Ayurvedic concept of maintaining a structured daily routine.",
      content:
        "Dinacharya refers to daily routines described in Ayurvedic traditions. Regular sleep, meals, hygiene and mindful activities can support a consistent lifestyle.",
    },
    {
      id: 5,
      title: "Common Ayurvedic Herbs Explained",
      category: "Herbs",
      readTime: "8 min read",
      icon: "🍃",
      excerpt:
        "A simple introduction to commonly known herbs used in Ayurvedic traditions.",
      content:
        "Tulsi, turmeric, ginger, Brahmi and other herbs are commonly associated with Ayurveda. Their traditional uses differ, and herbal products can interact with medicines.",
    },
    {
      id: 6,
      title: "Ayurveda & Mindful Living",
      category: "Wellness",
      readTime: "4 min read",
      icon: "🧘",
      excerpt:
        "Explore how traditional wellness practices can encourage mindfulness and balanced routines.",
      content:
        "Ayurvedic wellness traditions often combine daily routines, food, rest and mindfulness. These practices can complement a healthy lifestyle but should not replace necessary medical care.",
    },
  ];

  const categories = [
    "All",
    "Lifestyle",
    "Herbs",
    "Nutrition",
    "Wellness",
  ];

  const filteredBlogs = useMemo(() => {
    const query = search.toLowerCase().trim();

    return blogs.filter((blog) => {
      const matchesCategory =
        activeCategory === "All" ||
        blog.category === activeCategory;

      const matchesSearch =
        !query ||
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query) ||
        blog.category.toLowerCase().includes(query);

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
            rounded-[30px]
            bg-[#173F35]
            px-6
            sm:px-10
            lg:px-14
            py-12
            sm:py-16"
          >

            {/* Decorative elements */}

            <div
              className="absolute
              -right-20
              -top-24
              w-80
              h-80
              rounded-full
              border
              border-white/5"
            />

            <div
              className="absolute
              right-20
              -bottom-40
              w-96
              h-96
              rounded-full
              border
              border-white/5"
            />

            <div className="relative max-w-3xl">

              <div className="flex items-center gap-2 mb-5">

                <span className="w-7 h-[2px] bg-emerald-300 rounded-full" />

                <span
                  className="text-[10px]
                  uppercase
                  tracking-[0.2em]
                  font-bold
                  text-emerald-200"
                >
                  Traditional Wellness
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
                Explore the wisdom of
                <span className="block text-emerald-300">
                  Ayurveda.
                </span>
              </h1>

              <p
                className="mt-5
                max-w-2xl
                text-sm
                sm:text-base
                leading-7
                text-emerald-50/70"
              >
                Learn about traditional Ayurvedic approaches to
                lifestyle, nutrition, herbs and everyday wellness
                through simple, easy-to-read guides.
              </p>

              {/* Search */}

              <div className="mt-8 max-w-[620px] relative">

                <span
                  className="absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                  text-lg"
                >
                  ⌕
                </span>

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search herbs, nutrition, lifestyle..."
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
                  focus:ring-emerald-300/20"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INFO NOTICE
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
          bg-emerald-50
          border
          border-emerald-100"
        >

          <span className="text-lg flex-shrink-0">
            🌿
          </span>

          <div>

            <p className="text-xs font-bold text-emerald-900">
              About this section
            </p>

            <p
              className="mt-1
              text-[11px]
              leading-5
              text-emerald-800"
            >
              Ayurveda is a traditional system of medicine originating
              in India. These articles provide general educational
              information and should not replace professional medical
              advice or prescribed treatment.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          FEATURED
      ====================================================== */}

      <section className="px-5 sm:px-8 pt-10">

        <div className="max-w-[1180px] mx-auto">

          <div
            className="grid
            grid-cols-1
            lg:grid-cols-[1.3fr_0.7fr]
            gap-5"
          >

            {/* Featured article */}

            <button
              onClick={() => navigate("/ayurveda/1")}
              className="group
              relative
              text-left
              overflow-hidden
              rounded-[26px]
              bg-white
              border
              border-slate-100
              p-6
              sm:p-8
              hover:shadow-[0_14px_35px_rgba(15,23,42,0.07)]
              transition-all"
            >

              <div className="flex items-center gap-2">

                <span
                  className="px-2.5
                  py-1
                  rounded-full
                  bg-emerald-50
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-emerald-700"
                >
                  Featured guide
                </span>

                <span className="text-[10px] text-slate-400">
                  {blogs[0].readTime}
                </span>

              </div>

              <div
                className="mt-7
                w-14
                h-14
                rounded-2xl
                bg-emerald-50
                flex
                items-center
                justify-center
                text-3xl
                group-hover:scale-105
                transition-transform"
              >
                {blogs[0].icon}
              </div>

              <h2
                className="mt-6
                text-2xl
                sm:text-3xl
                font-bold
                leading-tight
                text-slate-900
                max-w-xl"
              >
                {blogs[0].title}
              </h2>

              <p
                className="mt-3
                max-w-2xl
                text-sm
                leading-6
                text-slate-500"
              >
                {blogs[0].excerpt}
              </p>

              <div
                className="mt-7
                flex
                items-center
                gap-2
                text-xs
                font-semibold
                text-emerald-700"
              >
                Read featured guide
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>

            </button>

            {/* Side information */}

            <div
              className="rounded-[26px]
              bg-slate-900
              p-6
              sm:p-8
              flex
              flex-col
              justify-between"
            >

              <div>

                <div
                  className="w-12
                  h-12
                  rounded-2xl
                  bg-white/10
                  flex
                  items-center
                  justify-center
                  text-2xl"
                >
                  🪷
                </div>

                <h3
                  className="mt-6
                  text-xl
                  font-bold
                  text-white"
                >
                  Traditional knowledge,
                  <span className="block text-emerald-300">
                    modern understanding.
                  </span>
                </h3>

                <p
                  className="mt-3
                  text-sm
                  leading-6
                  text-slate-400"
                >
                  Learn the traditional context behind commonly
                  discussed Ayurvedic practices while keeping modern
                  healthcare guidance in perspective.
                </p>

              </div>

              <div
                className="mt-8
                pt-5
                border-t
                border-white/10
                flex
                items-center
                justify-between"
              >

                <span className="text-[10px] text-slate-500">
                  Medi-call Health Library
                </span>

                <span className="text-emerald-300 text-lg">
                  ✦
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ARTICLES
      ====================================================== */}

      <section className="px-5 sm:px-8 py-12 sm:py-14">

        <div className="max-w-[1180px] mx-auto">

          {/* Heading */}

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">

            <div>

              <div className="flex items-center gap-2 mb-3">

                <span className="w-7 h-[2px] bg-emerald-600 rounded-full" />

                <span
                  className="text-[10px]
                  uppercase
                  tracking-[0.18em]
                  font-bold
                  text-emerald-700"
                >
                  Explore
                </span>

              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Ayurveda guides
              </h2>

            </div>

            <p className="text-xs text-slate-400">
              {filteredBlogs.length}{" "}
              {filteredBlogs.length === 1 ? "article" : "articles"}
            </p>

          </div>

          {/* Categories */}

          <div
            className="flex
            gap-2
            overflow-x-auto
            py-5"
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
                      ? "bg-emerald-700 border-emerald-700 text-white"
                      : "bg-white border-slate-200 text-slate-500 hover:border-emerald-200 hover:text-emerald-700"
                  }
                `}
              >
                {category}
              </button>

            ))}

          </div>

          {/* Cards */}

          {filteredBlogs.length > 0 ? (

            <div
              className="grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-5"
            >

              {filteredBlogs.map((blog) => (

                <article
                  key={blog.id}
                  className="group
                  bg-white
                  border
                  border-slate-100
                  rounded-[24px]
                  p-5
                  hover:border-emerald-100
                  hover:-translate-y-1
                  hover:shadow-[0_14px_35px_rgba(15,23,42,0.07)]
                  transition-all
                  duration-300"
                >

                  {/* Top */}

                  <div className="flex items-center justify-between">

                    <div
                      className="w-12
                      h-12
                      rounded-2xl
                      bg-emerald-50
                      flex
                      items-center
                      justify-center
                      text-2xl
                      group-hover:scale-105
                      transition-transform"
                    >
                      {blog.icon}
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
                      {blog.category}
                    </span>

                  </div>

                  {/* Title */}

                  <h3
                    className="mt-5
                    text-base
                    font-bold
                    leading-6
                    text-slate-900"
                  >
                    {blog.title}
                  </h3>

                  {/* Excerpt */}

                  <p
                    className="mt-2
                    text-sm
                    leading-6
                    text-slate-500
                    line-clamp-3"
                  >
                    {blog.excerpt}
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

                    <span className="text-[10px] text-slate-400">
                      {blog.readTime}
                    </span>

                    <button
                      onClick={() => navigate(`/ayurveda/${blog.id}`)}
                      className="text-xs
                      font-semibold
                      text-emerald-700
                      hover:text-emerald-800"
                    >
                      Read article →
                    </button>

                  </div>

                </article>

              ))}

            </div>

          ) : (

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
                bg-emerald-50
                flex
                items-center
                justify-center
                text-xl"
              >
                🔎
              </div>

              <h3 className="mt-4 text-base font-bold text-slate-800">
                No articles found
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Try another keyword or category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-5
                text-xs
                font-semibold
                text-emerald-700"
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
          bg-emerald-700
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
              text-emerald-200"
            >
              Need personalised advice?
            </p>

            <h2
              className="mt-2
              text-2xl
              sm:text-3xl
              font-bold
              text-white"
            >
              Talk to a qualified doctor.
            </h2>

            <p className="mt-2 text-sm text-emerald-100">
              Traditional wellness can complement healthcare, but
              professional advice matters when you need it.
            </p>

          </div>

          <button
            onClick={() => navigate("/Doctors")}
            className="w-fit
            px-6
            py-3
            rounded-xl
            bg-white
            text-emerald-700
            text-sm
            font-semibold
            hover:bg-emerald-50
            transition-colors"
          >
            Find a doctor →
          </button>

        </div>

      </section>

    </main>
  );
};

export default Ayurveda;