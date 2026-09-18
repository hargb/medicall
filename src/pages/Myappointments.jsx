import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const MyAppointment = () => {
  const { doctors, currencySymbol } = useContext(AppContext);
  const navigate = useNavigate();

  const appointmentDoctors = doctors?.slice(0, 3) || [];

  const handleDoctorClick = (id) => {
    if (!id) return;

    navigate(`/appointment/${id}`);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-[70vh] py-8 sm:py-12">

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">

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
                Patient dashboard
              </span>

            </div>

            <h1
              className="text-2xl
              sm:text-3xl
              font-bold
              text-slate-900
              tracking-tight"
            >
              My Appointments
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Manage your upcoming consultations and appointment history.
            </p>

          </div>

          <button
            onClick={() => {
              navigate("/Doctors");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="self-start sm:self-auto
            px-5
            py-2.5
            rounded-xl
            bg-blue-600
            text-white
            text-sm
            font-semibold
            hover:bg-blue-700
            transition-colors"
          >
            Find a doctor →
          </button>

        </div>

        {/* =====================================================
            STATS
        ====================================================== */}

        <div
          className="grid
          grid-cols-2
          sm:grid-cols-4
          gap-3
          sm:gap-4
          mt-8"
        >

          <div
            className="bg-white
            border
            border-slate-100
            rounded-2xl
            p-4
            shadow-[0_6px_24px_rgba(15,23,42,0.03)]"
          >
            <p className="text-[10px] uppercase tracking-wider text-slate-400">
              Upcoming
            </p>

            <p className="text-2xl font-bold text-slate-900 mt-1">
              0
            </p>
          </div>

          <div
            className="bg-white
            border
            border-slate-100
            rounded-2xl
            p-4
            shadow-[0_6px_24px_rgba(15,23,42,0.03)]"
          >
            <p className="text-[10px] uppercase tracking-wider text-slate-400">
              Completed
            </p>

            <p className="text-2xl font-bold text-slate-900 mt-1">
              0
            </p>
          </div>

          <div
            className="bg-white
            border
            border-slate-100
            rounded-2xl
            p-4
            shadow-[0_6px_24px_rgba(15,23,42,0.03)]"
          >
            <p className="text-[10px] uppercase tracking-wider text-slate-400">
              Cancelled
            </p>

            <p className="text-2xl font-bold text-slate-900 mt-1">
              0
            </p>
          </div>

          <div
            className="bg-white
            border
            border-slate-100
            rounded-2xl
            p-4
            shadow-[0_6px_24px_rgba(15,23,42,0.03)]"
          >
            <p className="text-[10px] uppercase tracking-wider text-slate-400">
              Total
            </p>

            <p className="text-2xl font-bold text-slate-900 mt-1">
              0
            </p>
          </div>

        </div>

        {/* =====================================================
            UPCOMING APPOINTMENTS
        ====================================================== */}

        <div className="mt-10">

          <div className="flex items-center justify-between mb-5">

            <div>

              <h2 className="text-lg font-bold text-slate-900">
                Upcoming appointments
              </h2>

              <p className="text-xs text-slate-400 mt-1">
                Your scheduled consultations will appear here.
              </p>

            </div>

          </div>

          {/* ===================================================
              CURRENT STATE
          ==================================================== */}

          {!doctors || doctors.length === 0 ? (

            <div
              className="bg-slate-50
              border
              border-slate-100
              rounded-3xl
              py-16
              px-5
              text-center"
            >

              <div
                className="w-16
                h-16
                mx-auto
                rounded-2xl
                bg-white
                border
                border-slate-100
                flex
                items-center
                justify-center
                text-2xl"
              >
                📅
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-800">
                No appointments yet
              </h3>

              <p className="mt-2 text-sm text-slate-500 max-w-sm mx-auto">
                Once you book a consultation, your upcoming appointment
                will appear here.
              </p>

              <button
                onClick={() => {
                  navigate("/Doctors");
                  window.scrollTo(0, 0);
                }}
                className="mt-6
                px-6
                py-3
                rounded-xl
                bg-blue-600
                text-white
                text-sm
                font-semibold
                hover:bg-blue-700
                transition-colors"
              >
                Browse doctors
              </button>

            </div>

          ) : (

            <div className="space-y-4">

              {appointmentDoctors.map((doctor, index) => (

                <article
                  key={doctor._id || index}
                  className="group
                  bg-white
                  border
                  border-slate-100
                  rounded-3xl
                  p-4
                  sm:p-5
                  hover:border-blue-100
                  hover:shadow-[0_12px_35px_rgba(15,23,42,0.06)]
                  transition-all"
                >

                  <div
                    className="flex
                    flex-col
                    lg:flex-row
                    lg:items-center
                    gap-5"
                  >

                    {/* =================================================
                        DOCTOR
                    ================================================== */}

                    <div className="flex items-center gap-4 flex-1">

                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-20
                        h-20
                        sm:w-24
                        sm:h-24
                        rounded-2xl
                        object-cover
                        bg-blue-50
                        flex-shrink-0"
                      />

                      <div className="min-w-0">

                        <div className="flex items-center gap-2">

                          <h3
                            className="font-bold
                            text-slate-900
                            truncate"
                          >
                            {doctor.name}
                          </h3>

                          <span
                            className="w-4
                            h-4
                            flex-shrink-0
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

                        <p className="text-sm text-blue-600 mt-1">
                          {doctor.speciality}
                        </p>

                        <p className="text-xs text-slate-400 mt-1">
                          {doctor.degree}
                        </p>

                        <div className="flex items-center gap-2 mt-3">

                          <span
                            className="flex
                            items-center
                            gap-1.5
                            text-[10px]
                            font-semibold
                            text-emerald-600"
                          >
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            Available
                          </span>

                        </div>

                      </div>

                    </div>

                    {/* =================================================
                        APPOINTMENT INFO
                    ================================================== */}

                    <div
                      className="lg:w-[280px]
                      p-4
                      rounded-2xl
                      bg-slate-50
                      border
                      border-slate-100"
                    >

                      <p
                        className="text-[10px]
                        uppercase
                        tracking-wider
                        font-bold
                        text-slate-400"
                      >
                        Appointment
                      </p>

                      <div className="mt-3 space-y-2">

                        <div className="flex items-center justify-between">

                          <span className="text-xs text-slate-500">
                            Date
                          </span>

                          <span className="text-xs font-semibold text-slate-700">
                            To be scheduled
                          </span>

                        </div>

                        <div className="flex items-center justify-between">

                          <span className="text-xs text-slate-500">
                            Time
                          </span>

                          <span className="text-xs font-semibold text-slate-700">
                            Select slot
                          </span>

                        </div>

                        <div className="flex items-center justify-between">

                          <span className="text-xs text-slate-500">
                            Consultation
                          </span>

                          <span className="text-xs font-semibold text-slate-700">
                            In-clinic / Video
                          </span>

                        </div>

                      </div>

                    </div>

                    {/* =================================================
                        ACTIONS
                    ================================================== */}

                    <div
                      className="flex
                      flex-col
                      sm:flex-row
                      lg:flex-col
                      gap-2
                      lg:w-[170px]"
                    >

                      <button
                        onClick={() => handleDoctorClick(doctor._id)}
                        className="w-full
                        px-4
                        py-2.5
                        rounded-xl
                        bg-blue-600
                        text-white
                        text-xs
                        font-semibold
                        hover:bg-blue-700
                        transition-colors"
                      >
                        Book appointment
                      </button>

                      <button
                        onClick={() => handleDoctorClick(doctor._id)}
                        className="w-full
                        px-4
                        py-2.5
                        rounded-xl
                        border
                        border-slate-200
                        text-slate-600
                        text-xs
                        font-semibold
                        hover:bg-slate-50
                        transition-colors"
                      >
                        View doctor
                      </button>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          )}

        </div>

        {/* =====================================================
            INFO BANNER
        ====================================================== */}

        <div
          className="mt-10
          rounded-3xl
          bg-blue-50
          border
          border-blue-100
          p-5
          sm:p-6"
        >

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">

            <div
              className="w-11
              h-11
              rounded-xl
              bg-white
              flex
              items-center
              justify-center
              text-lg
              flex-shrink-0"
            >
              🔒
            </div>

            <div>

              <h3 className="text-sm font-bold text-slate-800">
                Your healthcare, securely managed
              </h3>

              <p className="text-xs text-slate-500 mt-1 leading-5">
                Your appointment information will be securely managed
                once the booking backend is connected.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default MyAppointment;