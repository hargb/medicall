import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const AyurvedicDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const articles = {
    1: {
      category: "Lifestyle",
      title: "5 Ayurvedic Tips for a Healthy Lifestyle",
      readTime: "5 min read",
      icon: "🌿",
      intro:
        "Ayurveda is a traditional system of medicine from India that places importance on daily routines, nutrition, rest and mindful living.",
      sections: [
        {
          title: "1. Start your day with a consistent routine",
          content:
            "A consistent morning routine can help create structure in your day. Ayurveda traditionally emphasizes regular daily habits such as waking, personal hygiene, movement and mindful preparation for the day.",
        },
        {
          title: "2. Pay attention to your meals",
          content:
            "Ayurvedic traditions place considerable importance on food and digestion. Eating regular, balanced meals and choosing foods that suit your individual needs can be part of a healthy lifestyle.",
        },
        {
          title: "3. Stay physically active",
          content:
            "Regular physical activity is an important part of overall health. Walking, stretching, yoga or other suitable forms of exercise can be incorporated according to your fitness level and preferences.",
        },
        {
          title: "4. Make time for rest",
          content:
            "Adequate sleep and periods of rest are essential for everyday well-being. Maintaining a regular sleep schedule can make it easier to establish healthy habits.",
        },
        {
          title: "5. Practice mindful living",
          content:
            "Simple practices such as breathing exercises, meditation or taking short breaks from screens can encourage mindfulness and help create a more balanced daily routine.",
        },
      ],
    },

    2: {
      category: "Herbs",
      title: "Herbs for Mental Clarity in Ayurveda",
      readTime: "6 min read",
      icon: "🌱",
      intro:
        "Several herbs have a long history of use in Ayurvedic traditions. Understanding their traditional context is important before adding any herbal product to your routine.",
      sections: [
        {
          title: "Brahmi",
          content:
            "Brahmi is traditionally associated with memory, concentration and mental well-being in Ayurvedic literature. Modern evidence varies depending on the preparation and individual circumstances.",
        },
        {
          title: "Ashwagandha",
          content:
            "Ashwagandha is a commonly discussed Ayurvedic herb traditionally used for general wellness and stress-related concerns. It may not be suitable for everyone and can interact with certain medicines.",
        },
        {
          title: "Why individual advice matters",
          content:
            "Herbal products can have side effects and may interact with prescription medicines. If you take medication or have an existing health condition, discuss herbal supplements with a qualified healthcare professional before using them.",
        },
      ],
    },

    3: {
      category: "Nutrition",
      title: "The Role of Diet in Ayurveda",
      readTime: "7 min read",
      icon: "🥗",
      intro:
        "Food is an important part of Ayurvedic traditions. The approach considers digestion, individual constitution, routine and the qualities of different foods.",
      sections: [
        {
          title: "Food as part of daily routine",
          content:
            "Ayurvedic traditions emphasize eating mindfully and maintaining a consistent meal routine. In modern nutrition, overall dietary quality and adequate nutrient intake remain important considerations.",
        },
        {
          title: "Understanding individual needs",
          content:
            "Ayurveda often discusses food in relation to individual constitution or dosha. These concepts come from traditional Ayurvedic frameworks and should not be treated as a substitute for evidence-based nutritional assessment.",
        },
        {
          title: "Keep your diet balanced",
          content:
            "A healthy diet generally includes a variety of vegetables, fruits, whole grains, pulses, nuts and other nutrient-rich foods according to individual dietary needs and preferences.",
        },
      ],
    },

    4: {
      category: "Lifestyle",
      title: "Understanding Dinacharya",
      readTime: "5 min read",
      icon: "☀️",
      intro:
        "Dinacharya refers to daily routines described in Ayurvedic traditions. The concept focuses on maintaining consistency in everyday habits.",
      sections: [
        {
          title: "What is Dinacharya?",
          content:
            "Dinacharya can broadly be understood as a structured daily routine. Traditional Ayurvedic texts describe routines related to waking, hygiene, meals, activity and rest.",
        },
        {
          title: "Building a modern routine",
          content:
            "You can take inspiration from the idea of consistency by maintaining regular sleep, meal and activity schedules that fit your lifestyle.",
        },
        {
          title: "Consistency matters",
          content:
            "Small habits performed consistently can make everyday routines easier to maintain. The goal should be a practical routine rather than following a rigid schedule.",
        },
      ],
    },

    5: {
      category: "Herbs",
      title: "Common Ayurvedic Herbs Explained",
      readTime: "8 min read",
      icon: "🍃",
      intro:
        "Tulsi, turmeric, ginger and other herbs are commonly associated with Indian traditional medicine and Ayurvedic practices.",
      sections: [
        {
          title: "Tulsi",
          content:
            "Tulsi, also known as holy basil, has a long history of traditional use in India. It is commonly consumed as part of traditional preparations and herbal drinks.",
        },
        {
          title: "Turmeric",
          content:
            "Turmeric is widely used as a culinary spice and in traditional preparations. Curcumin, one of its components, has been studied extensively, although supplement effects can differ from ordinary dietary use.",
        },
        {
          title: "Ginger",
          content:
            "Ginger is commonly used in food and traditional preparations. It is also studied for certain digestive and nausea-related applications.",
        },
      ],
    },

    6: {
      category: "Wellness",
      title: "Ayurveda & Mindful Living",
      readTime: "4 min read",
      icon: "🧘",
      intro:
        "Mindfulness, routine and self-awareness are recurring themes in traditional Ayurvedic wellness practices.",
      sections: [
        {
          title: "Create moments of calm",
          content:
            "Taking a few minutes for breathing exercises, meditation or quiet reflection can be a simple way to introduce mindfulness into your day.",
        },
        {
          title: "Connect routine with well-being",
          content:
            "Regular sleep, balanced meals, movement and meaningful social connections can all contribute to overall well-being.",
        },
        {
          title: "Use wellness practices appropriately",
          content:
            "Traditional wellness practices can complement a healthy lifestyle, but they should not replace professional medical care when you have symptoms or a diagnosed condition.",
        },
      ],
    },
  };

  const article = articles[id] || articles[1];

  return (
    <main className="min-h-screen bg-slate-50">

      {/* =====================================================
          TOP HERO
      ====================================================== */}

      <section className="px-5 sm:px-8 pt-8 sm:pt-12">

        <div className="max-w-[900px] mx-auto">

          {/* Back button */}

          <button
            onClick={() => navigate("/Ayurveda")}
            className="group
            flex
            items-center
            gap-2
            mb-7
            text-xs
            font-semibold
            text-slate-500
            hover:text-emerald-700
            transition-colors"
          >
            <span
              className="w-8
              h-8
              rounded-full
              bg-white
              border
              border-slate-200
              flex
              items-center
              justify-center
              group-hover:border-emerald-200
              transition-colors"
            >
              ←
            </span>

            Back to Ayurveda
          </button>

          {/* Hero */}

          <div
            className="relative
            overflow-hidden
            rounded-[30px]
            bg-[#173F35]
            px-6
            sm:px-10
            lg:px-14
            py-10
            sm:py-14"
          >

            <div
              className="absolute
              -right-24
              -top-24
              w-80
              h-80
              rounded-full
              border
              border-white/5"
            />

            <div
              className="absolute
              right-24
              -bottom-40
              w-96
              h-96
              rounded-full
              border
              border-white/5"
            />

            <div className="relative">

              {/* Meta */}

              <div className="flex flex-wrap items-center gap-3">

                <span
                  className="px-3
                  py-1.5
                  rounded-full
                  bg-emerald-300/10
                  border
                  border-emerald-200/10
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-emerald-200"
                >
                  {article.category}
                </span>

                <span className="text-xs text-slate-400">
                  {article.readTime}
                </span>

              </div>

              {/* Icon */}

              <div
                className="mt-7
                w-16
                h-16
                rounded-2xl
                bg-white/10
                flex
                items-center
                justify-center
                text-3xl"
              >
                {article.icon}
              </div>

              {/* Title */}

              <h1
                className="mt-7
                max-w-3xl
                text-3xl
                sm:text-4xl
                lg:text-[46px]
                leading-tight
                tracking-tight
                font-bold
                text-white"
              >
                {article.title}
              </h1>

              {/* Intro */}

              <p
                className="mt-5
                max-w-2xl
                text-sm
                sm:text-base
                leading-7
                text-emerald-50/70"
              >
                {article.intro}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ARTICLE CONTENT
      ====================================================== */}

      <section className="px-5 sm:px-8 py-10 sm:py-14">

        <div
          className="max-w-[900px]
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-[1fr_250px]
          gap-8"
        >

          {/* Main article */}

          <article
            className="bg-white
            rounded-[26px]
            border
            border-slate-100
            p-6
            sm:p-9
            lg:p-10"
          >

            <div
              className="flex
              items-center
              gap-3
              pb-6
              mb-7
              border-b
              border-slate-100"
            >

              <div
                className="w-9
                h-9
                rounded-full
                bg-emerald-50
                flex
                items-center
                justify-center
                text-sm"
              >
                🌿
              </div>

              <div>

                <p className="text-xs font-bold text-slate-800">
                  Medi-call Ayurveda Guide
                </p>

                <p className="text-[10px] text-slate-400">
                  General educational information
                </p>

              </div>

            </div>

            {/* Introduction */}

            <div className="mb-9">

              <p
                className="text-[17px]
                leading-8
                text-slate-600"
              >
                {article.intro}
              </p>

            </div>

            {/* Sections */}

            <div className="space-y-9">

              {article.sections.map((section, index) => (

                <section key={index}>

                  <div className="flex items-start gap-3">

                    <span
                      className="flex-shrink-0
                      w-8
                      h-8
                      rounded-lg
                      bg-emerald-50
                      text-emerald-700
                      flex
                      items-center
                      justify-center
                      text-xs
                      font-bold"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>

                      <h2
                        className="text-xl
                        sm:text-2xl
                        font-bold
                        leading-tight
                        text-slate-900"
                      >
                        {section.title}
                      </h2>

                      <p
                        className="mt-3
                        text-sm
                        sm:text-[15px]
                        leading-7
                        text-slate-600"
                      >
                        {section.content}
                      </p>

                    </div>

                  </div>

                </section>

              ))}

            </div>

            {/* Safety note */}

            <div
              className="mt-10
              p-5
              rounded-2xl
              bg-amber-50
              border
              border-amber-100"
            >

              <div className="flex items-start gap-3">

                <span className="text-lg">
                  ⚠️
                </span>

                <div>

                  <h3 className="text-xs font-bold text-amber-900">
                    Important
                  </h3>

                  <p
                    className="mt-1
                    text-xs
                    leading-5
                    text-amber-800"
                  >
                    Herbal products and traditional remedies may not
                    be appropriate for everyone and can interact with
                    medicines. Do not stop or replace prescribed
                    treatment based on information in this article.
                    Consult a qualified healthcare professional when
                    needed.
                  </p>

                </div>

              </div>

            </div>

          </article>

          {/* =================================================
              SIDEBAR
          ================================================== */}

          <aside className="space-y-4">

            {/* Article info */}

            <div
              className="bg-white
              border
              border-slate-100
              rounded-[22px]
              p-5"
            >

              <p
                className="text-[9px]
                uppercase
                tracking-[0.16em]
                font-bold
                text-slate-400"
              >
                Article information
              </p>

              <div className="mt-5 space-y-4">

                <div>

                  <p className="text-[10px] text-slate-400">
                    Category
                  </p>

                  <p className="mt-1 text-xs font-semibold text-slate-800">
                    {article.category}
                  </p>

                </div>

                <div>

                  <p className="text-[10px] text-slate-400">
                    Reading time
                  </p>

                  <p className="mt-1 text-xs font-semibold text-slate-800">
                    {article.readTime}
                  </p>

                </div>

                <div>

                  <p className="text-[10px] text-slate-400">
                    Content type
                  </p>

                  <p className="mt-1 text-xs font-semibold text-slate-800">
                    Health education
                  </p>

                </div>

              </div>

            </div>

            {/* Doctor CTA */}

            <div
              className="rounded-[22px]
              bg-emerald-700
              p-5"
            >

              <div
                className="w-10
                h-10
                rounded-xl
                bg-white/10
                flex
                items-center
                justify-center"
              >
                🩺
              </div>

              <h3
                className="mt-5
                text-base
                font-bold
                leading-5
                text-white"
              >
                Have a health concern?
              </h3>

              <p
                className="mt-2
                text-xs
                leading-5
                text-emerald-100"
              >
                Get personalised guidance from a qualified doctor.
              </p>

              <button
                onClick={() => navigate("/Doctors")}
                className="mt-5
                w-full
                py-2.5
                rounded-xl
                bg-white
                text-emerald-700
                text-xs
                font-bold
                hover:bg-emerald-50
                transition-colors"
              >
                Find a doctor →
              </button>

            </div>

            {/* Back */}

            <button
              onClick={() => navigate("/Ayurveda")}
              className="w-full
              py-3
              rounded-xl
              bg-white
              border
              border-slate-200
              text-xs
              font-semibold
              text-slate-600
              hover:border-emerald-200
              hover:text-emerald-700
              transition-colors"
            >
              ← Explore more Ayurveda
            </button>

          </aside>

        </div>

      </section>

    </main>
  );
};

export default AyurvedicDetails;