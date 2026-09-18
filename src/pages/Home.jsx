import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <main className="bg-slate-50 overflow-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section>
        <Header />
      </section>

      {/* =====================================================
          SPECIALITIES
      ====================================================== */}

      <section className="bg-white">
        <SpecialityMenu />
      </section>

      {/* =====================================================
          TOP DOCTORS
      ====================================================== */}

      <section className="bg-slate-50">
        <TopDoctors />
      </section>

      {/* =====================================================
          CTA / HEALTHCARE SERVICES
      ====================================================== */}

      <section className="bg-white">
        <Banner />
      </section>

    </main>
  );
};

export default Home;