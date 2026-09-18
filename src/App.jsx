import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Appointment from "./pages/Appointment";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/Myprofile";
import Myappointments from "./pages/Myappointments";
import AyurvedaSection from "./pages/AyurvedaSection";
import AyurvedicDetails from "./pages/AyurvedicDetails";
import BasicRemedies from "./pages/BasicRemedies";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Doctors */}
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/Doctors" element={<Doctors />} />

        <Route
          path="/doctors/:speciality"
          element={<Doctors />}
        />

        <Route
          path="/Doctors/:speciality"
          element={<Doctors />}
        />

        {/* Appointment */}
        <Route
          path="/appointment/:docId"
          element={<Appointment />}
        />

        {/* Authentication */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Static pages */}
        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/About"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/Contact"
          element={<Contact />}
        />

        {/* Patient */}
        <Route
          path="/my-profile"
          element={<MyProfile />}
        />

        <Route
          path="/my-appointments"
          element={<Myappointments />}
        />

        {/* Ayurveda */}
        <Route
          path="/Ayurveda"
          element={<AyurvedaSection />}
        />

        <Route
          path="/ayurveda"
          element={<AyurvedaSection />}
        />

        <Route
          path="/ayurveda/:id"
          element={<AyurvedicDetails />}
        />

        {/* Health Tips */}
        <Route
          path="/BasicRemedies"
          element={<BasicRemedies />}
        />

        <Route
          path="/basic-remedies"
          element={<BasicRemedies />}
        />

      </Routes>

      <Footer />

    </div>
  );
};

export default App;