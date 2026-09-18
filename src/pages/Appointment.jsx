import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();

  const { doctors, currencySymbol } = useContext(AppContext);

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const [consultationType, setConsultationType] = useState("clinic");
  const [bookingMessage, setBookingMessage] = useState("");

  /* ================= DOCTOR INFO ================= */

  const fetchDocInfo = () => {
    const doctorInfo = doctors?.find((doc) => doc._id === docId);
    setDocInfo(doctorInfo);
  };

  /* ================= AVAILABLE SLOTS ================= */

  const getAvailableSlots = () => {
    setDocSlots([]);

    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);

      currentDate.setDate(today.getDate() + i);

      const endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        if (today.getHours() >= 21) {
          continue;
        }

        currentDate.setHours(
          today.getHours() > 10 ? today.getHours() : 10
        );

        currentDate.setMinutes(
          today.getMinutes() > 30 ? 30 : 0
        );
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      const timeSlots = [];

      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      if (timeSlots.length > 0) {
        setDocSlots((prev) => [...prev, timeSlots]);
      }
    }
  };

  /* ================= EFFECTS ================= */

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      setSlotIndex(0);
      setSlotTime("");
      getAvailableSlots();
    }
  }, [docInfo]);

  /* ================= BOOK ================= */

  const handleBooking = () => {
    if (!slotTime) {
      setBookingMessage("Please select an available time slot.");
      return;
    }

    setBookingMessage(
      `Selected ${slotTime} appointment. Booking integration will be connected next.`
    );
  };

  /* ================= LOADING ================= */

  if (!docInfo) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">

          <div className="w-12 h-12 rounded-full border-4
          border-slate-200 border-t-blue-600
          animate-spin mx-auto" />

          <p className="mt-4 text-sm text-slate-500">
            Loading doctor information...
          </p>

        </div>
      </div>
    );
  }

  return (
    <section className="py-8 sm:py-10 lg:py-12">

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">

        {/* =====================================================
            BREADCRUMB
        ====================================================== */}

        <div className="flex items-center gap-2
        text-xs text-slate-400 mb-6">

          <span>Home</span>
          <span>›</span>

          <span>Doctors</span>
          <span>›</span>

          <span className="text-slate-600 font-medium">
            Appointment
          </span>

        </div>

        {/* =====================================================
            DOCTOR PROFILE
        ====================================================== */}

        <div
          className="grid lg:grid-cols-[380px_1fr]
          bg-white
          border border-slate-100
          rounded-[28px]
          overflow-hidden
          shadow-[0_12px_40px_rgba(15,23,42,0.05)]"
        >

          {/* IMAGE */}

          <div className="relative bg-blue-50 min-h-[330px] lg:min-h-[420px]">

            <img
              src={docInfo.image}
              alt={docInfo.name}
              className="absolute inset-0
              w-full h-full
              object-cover"
            />

            {/* Availability */}

            <div
              className="absolute top-5 left-5
              flex items-center gap-2
              px-3 py-2
              bg-white/95
              backdrop-blur-sm
              rounded-full
              shadow-sm"
            >

              <span className="w-2 h-2 rounded-full bg-emerald-500" />

              <span className="text-xs font-semibold text-slate-700">
                Available for appointments
              </span>

            </div>

          </div>

          {/* DETAILS */}

          <div className="p-6 sm:p-8 lg:p-10">

            {/* Name */}

            <div className="flex items-center gap-2">

              <h1
                className="text-2xl sm:text-3xl
                font-bold tracking-tight
                text-slate-900"
              >
                {docInfo.name}
              </h1>

              <img
                src={assets.verified_icon}
                className="w-5 h-5"
                alt="Verified"
              />

            </div>

            {/* Specialty */}

            <div className="flex flex-wrap items-center gap-2 mt-2">

              <span
                className="text-sm
                font-medium
                text-blue-600"
              >
                {docInfo.speciality}
              </span>

              <span className="w-1 h-1 rounded-full bg-slate-300" />

              <span className="text-sm text-slate-500">
                {docInfo.degree}
              </span>

              <span className="px-2.5 py-1
              rounded-full
              bg-slate-100
              text-[10px]
              font-semibold
              text-slate-600">
                {docInfo.experience}
              </span>

            </div>

            {/* Rating */}

            <div className="flex items-center gap-3 mt-5">

              <div className="flex items-center gap-1">

                <span className="text-amber-400">
                  ★
                </span>

                <span className="text-sm font-bold text-slate-800">
                  4.8
                </span>

              </div>

              <span className="text-xs text-slate-400">
                Trusted healthcare professional
              </span>

            </div>

            {/* About */}

            <div className="mt-7">

              <div className="flex items-center gap-2">

                <h2 className="text-sm font-bold text-slate-800">
                  About doctor
                </h2>

                <img
                  src={assets.info_icon}
                  className="w-4 h-4"
                  alt=""
                />

              </div>

              <p
                className="mt-2
                max-w-[720px]
                text-sm
                leading-6
                text-slate-500"
              >
                {docInfo.about}
              </p>

            </div>

            {/* Fee */}

            <div
              className="mt-7
              flex items-center justify-between
              p-4
              rounded-2xl
              bg-slate-50
              border border-slate-100"
            >

              <div>

                <p className="text-[10px] uppercase
                tracking-wider font-semibold
                text-slate-400">
                  Consultation fee
                </p>

                <p className="mt-1 text-xl font-bold text-slate-900">
                  {currencySymbol}
                  {docInfo.fees}
                </p>

              </div>

              <div className="flex items-center gap-2
              text-xs text-emerald-600 font-medium">

                <span className="w-2 h-2 rounded-full bg-emerald-500" />

                Accepting patients

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            BOOKING AREA
        ====================================================== */}

        <div className="grid lg:grid-cols-[1fr_330px] gap-6 mt-7">

          {/* ================= SLOT SELECTION ================= */}

          <div
            className="bg-white
            border border-slate-100
            rounded-[24px]
            p-5 sm:p-7
            shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
          >

            {/* Header */}

            <div className="flex items-center justify-between">

              <div>

                <span
                  className="text-[10px]
                  uppercase tracking-[0.16em]
                  font-bold text-blue-600"
                >
                  Book your visit
                </span>

                <h2
                  className="mt-1
                  text-xl sm:text-2xl
                  font-bold text-slate-900"
                >
                  Choose a date & time
                </h2>

              </div>

              <div
                className="hidden sm:flex
                items-center gap-2
                text-xs text-slate-400"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Available slots
              </div>

            </div>

            {/* DATE */}

            <div className="mt-7">

              <p className="text-xs font-semibold text-slate-600 mb-3">
                Select date
              </p>

              <div className="flex gap-2 overflow-x-auto pb-2
              scrollbar-thin">

                {docSlots.map((daySlots, index) => {

                  const date = daySlots?.[0]?.datetime;

                  if (!date) return null;

                  const isSelected = slotIndex === index;

                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setSlotIndex(index);
                        setSlotTime("");
                        setBookingMessage("");
                      }}
                      className={`
                        min-w-[76px]
                        h-[88px]
                        rounded-2xl
                        flex flex-col
                        items-center
                        justify-center
                        gap-1
                        border
                        transition-all
                        ${
                          isSelected
                            ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-100"
                            : "bg-white border-slate-200 text-slate-500 hover:border-blue-200 hover:bg-blue-50"
                        }
                      `}
                    >

                      <span
                        className={`text-[10px] font-bold tracking-wider
                        ${
                          isSelected
                            ? "text-blue-100"
                            : "text-slate-400"
                        }`}
                      >
                        {daysOfWeek[date.getDay()]}
                      </span>

                      <span
                        className="text-2xl font-bold"
                      >
                        {date.getDate()}
                      </span>

                      <span
                        className={`text-[10px]
                        ${
                          isSelected
                            ? "text-blue-100"
                            : "text-slate-400"
                        }`}
                      >
                        {date.toLocaleDateString([], {
                          month: "short",
                        })}
                      </span>

                    </button>
                  );
                })}

              </div>

            </div>

            {/* TIME */}

            <div className="mt-7">

              <div className="flex items-center justify-between mb-3">

                <p className="text-xs font-semibold text-slate-600">
                  Available times
                </p>

                <span className="text-[10px] text-slate-400">
                  30 min consultation
                </span>

              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">

                {docSlots[slotIndex]?.map((slot, index) => {

                  const selected = slot.time === slotTime;

                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setSlotTime(slot.time);
                        setBookingMessage("");
                      }}
                      className={`
                        py-2.5
                        px-2
                        rounded-xl
                        text-xs
                        font-medium
                        border
                        transition-all
                        ${
                          selected
                            ? "bg-blue-600 border-blue-600 text-white"
                            : "border-slate-200 text-slate-500 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50"
                        }
                      `}
                    >
                      {slot.time}
                    </button>
                  );
                })}

              </div>

            </div>

            {/* CONSULTATION TYPE */}

            <div className="mt-8">

              <p className="text-xs font-semibold text-slate-600 mb-3">
                Consultation type
              </p>

              <div className="grid sm:grid-cols-2 gap-3">

                {/* Clinic */}

                <button
                  onClick={() => setConsultationType("clinic")}
                  className={`
                    text-left
                    p-4
                    rounded-2xl
                    border
                    transition-all
                    ${
                      consultationType === "clinic"
                        ? "border-blue-200 bg-blue-50"
                        : "border-slate-200 bg-white hover:bg-slate-50"
                    }
                  `}
                >

                  <div className="flex items-center gap-3">

                    <div
                      className={`w-10 h-10 rounded-xl
                      flex items-center justify-center
                      ${
                        consultationType === "clinic"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      🏥
                    </div>

                    <div>

                      <p className="text-sm font-semibold text-slate-800">
                        In-clinic visit
                      </p>

                      <p className="text-[10px] text-slate-400 mt-1">
                        Visit the doctor's clinic
                      </p>

                    </div>

                  </div>

                </button>

                {/* Online */}

                <button
                  onClick={() => setConsultationType("online")}
                  className={`
                    text-left
                    p-4
                    rounded-2xl
                    border
                    transition-all
                    ${
                      consultationType === "online"
                        ? "border-blue-200 bg-blue-50"
                        : "border-slate-200 bg-white hover:bg-slate-50"
                    }
                  `}
                >

                  <div className="flex items-center gap-3">

                    <div
                      className={`w-10 h-10 rounded-xl
                      flex items-center justify-center
                      ${
                        consultationType === "online"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      💻
                    </div>

                    <div>

                      <p className="text-sm font-semibold text-slate-800">
                        Video consultation
                      </p>

                      <p className="text-[10px] text-slate-400 mt-1">
                        Consult from anywhere
                      </p>

                    </div>

                  </div>

                </button>

              </div>

            </div>

          </div>

          {/* ================= BOOKING SUMMARY ================= */}

          <aside>

            <div
              className="lg:sticky lg:top-24
              bg-slate-950
              rounded-[24px]
              p-6
              text-white
              overflow-hidden
              relative"
            >

              {/* Decorative */}

              <div
                className="absolute -right-16 -top-16
                w-40 h-40
                rounded-full
                bg-blue-500/10"
              />

              <div
                className="absolute -left-20 -bottom-20
                w-48 h-48
                rounded-full
                bg-cyan-500/5"
              />

              <div className="relative">

                <p
                  className="text-[10px]
                  uppercase
                  tracking-[0.16em]
                  font-bold
                  text-slate-400"
                >
                  Appointment summary
                </p>

                <h3
                  className="mt-2
                  text-xl
                  font-bold"
                >
                  Your booking
                </h3>

                {/* Doctor */}

                <div
                  className="mt-6
                  flex items-center gap-3
                  pb-5
                  border-b border-white/10"
                >

                  <img
                    src={docInfo.image}
                    alt={docInfo.name}
                    className="w-12 h-12 rounded-xl object-cover"
                  />

                  <div className="min-w-0">

                    <p className="text-sm font-semibold truncate">
                      {docInfo.name}
                    </p>

                    <p className="text-xs text-slate-400 mt-1">
                      {docInfo.speciality}
                    </p>

                  </div>

                </div>

                {/* Details */}

                <div className="py-5 space-y-4">

                  <div className="flex items-center justify-between">

                    <span className="text-xs text-slate-400">
                      Date
                    </span>

                    <span className="text-xs font-medium">
                      {docSlots[slotIndex]?.[0]?.datetime
                        ? docSlots[slotIndex][0].datetime.toLocaleDateString(
                            [],
                            {
                              weekday: "short",
                              month: "short",
                              day: "numeric",
                            }
                          )
                        : "Select date"}
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-xs text-slate-400">
                      Time
                    </span>

                    <span
                      className={`text-xs font-medium
                      ${slotTime ? "text-white" : "text-slate-500"}`}
                    >
                      {slotTime || "Select time"}
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-xs text-slate-400">
                      Consultation
                    </span>

                    <span className="text-xs font-medium">
                      {consultationType === "online"
                        ? "Video"
                        : "In-clinic"}
                    </span>

                  </div>

                </div>

                {/* Fee */}

                <div
                  className="pt-5
                  border-t border-white/10
                  flex items-center justify-between"
                >

                  <span className="text-xs text-slate-400">
                    Consultation fee
                  </span>

                  <span className="text-lg font-bold">
                    {currencySymbol}
                    {docInfo.fees}
                  </span>

                </div>

                {/* Book */}

                <button
                  onClick={handleBooking}
                  className="w-full
                  mt-6
                  py-3.5
                  rounded-xl
                  bg-blue-600
                  hover:bg-blue-500
                  text-white
                  text-sm
                  font-semibold
                  transition-colors"
                >
                  Confirm Appointment →
                </button>

                {/* Message */}

                {bookingMessage && (
                  <p
                    className="mt-3
                    text-[10px]
                    leading-4
                    text-center
                    text-slate-400"
                  >
                    {bookingMessage}
                  </p>
                )}

                <p
                  className="mt-4
                  text-[10px]
                  leading-4
                  text-center
                  text-slate-500"
                >
                  You can review your appointment details
                  before confirming.
                </p>

              </div>

            </div>

          </aside>

        </div>

        {/* =====================================================
            RELATED DOCTORS
        ====================================================== */}

        <div className="mt-16">

          <RelatedDoctors
            docId={docId}
            speciality={docInfo.speciality}
          />

        </div>

      </div>

    </section>
  );
};

export default Appointment;