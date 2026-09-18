import React, { useState } from "react";
import profile2 from "../assets/profile2.jpg";

const Myprofile = () => {
  const [userData, setUserData] = useState({
    name: "puneet",
    image: profile2,
    email: "puneetSuperstar@gmail.com",
    phone: "+91 8130265893",
    address: {
      line1: "B-234, Chirag Delhi",
      line2: "Near Chirag Delhi Metro Station, New Delhi",
    },
    gender: "Male",
    dob: "2002-08-07",
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (field, value) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddressChange = (field, value) => {
    setUserData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [field]: value,
      },
    }));
  };

  const formatDate = (date) => {
    if (!date) return "Not provided";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section className="min-h-[75vh] py-8 sm:py-12">

      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">

        {/* =====================================================
            PAGE HEADER
        ====================================================== */}

        <div className="mb-8">

          <div className="flex items-center gap-2 mb-3">

            <span className="w-7 h-[2px] bg-blue-600 rounded-full" />

            <span
              className="text-[10px]
              uppercase
              tracking-[0.18em]
              font-bold
              text-blue-600"
            >
              Account
            </span>

          </div>

          <h1
            className="text-2xl
            sm:text-3xl
            font-bold
            text-slate-900
            tracking-tight"
          >
            My Profile
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage your personal information and contact details.
          </p>

        </div>

        {/* =====================================================
            PROFILE HERO
        ====================================================== */}

        <div
          className="relative
          overflow-hidden
          bg-slate-950
          rounded-[28px]
          p-6
          sm:p-8
          mb-6"
        >

          {/* Decorative circles */}

          <div
            className="absolute
            -right-20
            -top-24
            w-64
            h-64
            rounded-full
            bg-blue-500/10"
          />

          <div
            className="absolute
            -left-20
            -bottom-32
            w-64
            h-64
            rounded-full
            bg-cyan-500/5"
          />

          <div
            className="relative
            flex
            flex-col
            sm:flex-row
            sm:items-center
            gap-5"
          >

            {/* Profile image */}

            <div className="relative flex-shrink-0">

              <img
                src={userData.image || profile2}
                alt="Profile"
                className="w-24
                h-24
                sm:w-28
                sm:h-28
                rounded-3xl
                object-cover
                border-4
                border-white/10"
              />

              {/* Online indicator */}

              <span
                className="absolute
                right-1
                bottom-1
                w-5
                h-5
                rounded-full
                bg-emerald-500
                border-4
                border-slate-950"
              />

            </div>

            {/* User info */}

            <div className="flex-1">

              <div className="flex items-center gap-2">

                <h2
                  className="text-xl
                  sm:text-2xl
                  font-bold
                  text-white"
                >
                  {userData.name}
                </h2>

                <span
                  className="px-2
                  py-1
                  rounded-full
                  bg-blue-500/10
                  text-blue-300
                  text-[9px]
                  font-semibold"
                >
                  PATIENT
                </span>

              </div>

              <p className="mt-1 text-sm text-slate-400">
                {userData.email}
              </p>

              <div className="flex flex-wrap gap-3 mt-4">

                <div
                  className="flex
                  items-center
                  gap-2
                  text-xs
                  text-slate-300"
                >
                  <span>📱</span>
                  {userData.phone}
                </div>

                <div
                  className="flex
                  items-center
                  gap-2
                  text-xs
                  text-slate-300"
                >
                  <span>📍</span>
                  New Delhi
                </div>

              </div>

            </div>

            {/* Edit button */}

            <button
              onClick={() => setIsEdit((prev) => !prev)}
              className="self-start
              sm:self-center
              px-5
              py-2.5
              rounded-xl
              bg-white
              text-slate-900
              text-xs
              font-semibold
              hover:bg-slate-100
              transition-colors"
            >
              {isEdit ? "Cancel" : "Edit profile"}
            </button>

          </div>

        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="grid lg:grid-cols-[1fr_300px] gap-6">

          {/* ===================================================
              PERSONAL INFORMATION
          ==================================================== */}

          <div
            className="bg-white
            border
            border-slate-100
            rounded-[24px]
            overflow-hidden
            shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
          >

            {/* Section heading */}

            <div
              className="px-6
              sm:px-7
              py-5
              border-b
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
                  👤
                </div>

                <div>

                  <h2 className="text-sm font-bold text-slate-900">
                    Personal information
                  </h2>

                  <p className="text-[11px] text-slate-400 mt-1">
                    Your basic personal details
                  </p>

                </div>

              </div>

            </div>

            {/* Form */}

            <div className="p-6 sm:p-7 space-y-6">

              {/* Name */}

              <div>

                <label
                  className="block
                  text-xs
                  font-semibold
                  text-slate-600
                  mb-2"
                >
                  Full name
                </label>

                {isEdit ? (

                  <input
                    type="text"
                    value={userData.name}
                    onChange={(e) =>
                      handleChange("name", e.target.value)
                    }
                    className="w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    text-sm
                    text-slate-800
                    outline-none
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-50"
                  />

                ) : (

                  <p
                    className="px-4
                    py-3
                    rounded-xl
                    bg-slate-50
                    text-sm
                    text-slate-700"
                  >
                    {userData.name}
                  </p>

                )}

              </div>

              {/* Gender + DOB */}

              <div className="grid sm:grid-cols-2 gap-5">

                {/* Gender */}

                <div>

                  <label
                    className="block
                    text-xs
                    font-semibold
                    text-slate-600
                    mb-2"
                  >
                    Gender
                  </label>

                  {isEdit ? (

                    <select
                      value={userData.gender}
                      onChange={(e) =>
                        handleChange("gender", e.target.value)
                      }
                      className="w-full
                      px-4
                      py-3
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      text-sm
                      text-slate-700
                      outline-none
                      focus:border-blue-500
                      focus:ring-4
                      focus:ring-blue-50"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>

                  ) : (

                    <p
                      className="px-4
                      py-3
                      rounded-xl
                      bg-slate-50
                      text-sm
                      text-slate-700"
                    >
                      {userData.gender}
                    </p>

                  )}

                </div>

                {/* DOB */}

                <div>

                  <label
                    className="block
                    text-xs
                    font-semibold
                    text-slate-600
                    mb-2"
                  >
                    Date of birth
                  </label>

                  {isEdit ? (

                    <input
                      type="date"
                      value={userData.dob}
                      onChange={(e) =>
                        handleChange("dob", e.target.value)
                      }
                      className="w-full
                      px-4
                      py-3
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      text-sm
                      text-slate-700
                      outline-none
                      focus:border-blue-500
                      focus:ring-4
                      focus:ring-blue-50"
                    />

                  ) : (

                    <p
                      className="px-4
                      py-3
                      rounded-xl
                      bg-slate-50
                      text-sm
                      text-slate-700"
                    >
                      {formatDate(userData.dob)}
                    </p>

                  )}

                </div>

              </div>

            </div>

          </div>

          {/* ===================================================
              CONTACT INFORMATION
          ==================================================== */}

          <div
            className="bg-white
            border
            border-slate-100
            rounded-[24px]
            overflow-hidden
            shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
          >

            <div
              className="px-6
              py-5
              border-b
              border-slate-100"
            >

              <div className="flex items-center gap-3">

                <div
                  className="w-10
                  h-10
                  rounded-xl
                  bg-emerald-50
                  flex
                  items-center
                  justify-center
                  text-emerald-600"
                >
                  📞
                </div>

                <div>

                  <h2 className="text-sm font-bold text-slate-900">
                    Contact information
                  </h2>

                  <p className="text-[11px] text-slate-400 mt-1">
                    How we can reach you
                  </p>

                </div>

              </div>

            </div>

            <div className="p-6 space-y-5">

              {/* Email */}

              <div>

                <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                  Email
                </p>

                <p className="mt-1 text-sm text-slate-700 break-all">
                  {userData.email}
                </p>

              </div>

              {/* Phone */}

              <div>

                <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                  Phone
                </p>

                {isEdit ? (

                  <input
                    type="text"
                    value={userData.phone}
                    onChange={(e) =>
                      handleChange("phone", e.target.value)
                    }
                    className="mt-2
                    w-full
                    px-3
                    py-2.5
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    text-sm
                    outline-none
                    focus:border-blue-500"
                  />

                ) : (

                  <p className="mt-1 text-sm text-slate-700">
                    {userData.phone}
                  </p>

                )}

              </div>

              {/* Address */}

              <div>

                <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                  Address
                </p>

                {isEdit ? (

                  <div className="mt-2 space-y-2">

                    <input
                      type="text"
                      value={userData.address.line1}
                      onChange={(e) =>
                        handleAddressChange(
                          "line1",
                          e.target.value
                        )
                      }
                      className="w-full
                      px-3
                      py-2.5
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      text-sm
                      outline-none
                      focus:border-blue-500"
                    />

                    <input
                      type="text"
                      value={userData.address.line2}
                      onChange={(e) =>
                        handleAddressChange(
                          "line2",
                          e.target.value
                        )
                      }
                      className="w-full
                      px-3
                      py-2.5
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      text-sm
                      outline-none
                      focus:border-blue-500"
                    />

                  </div>

                ) : (

                  <p
                    className="mt-1
                    text-sm
                    leading-6
                    text-slate-600"
                  >
                    {userData.address.line1}
                    <br />
                    {userData.address.line2}
                  </p>

                )}

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            SAVE BAR
        ====================================================== */}

        {isEdit && (

          <div
            className="mt-6
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-4
            p-5
            rounded-2xl
            bg-blue-50
            border
            border-blue-100"
          >

            <div>

              <p className="text-sm font-semibold text-slate-800">
                You are editing your profile
              </p>

              <p className="text-xs text-slate-500 mt-1">
                Review your information before saving.
              </p>

            </div>

            <div className="flex gap-2">

              <button
                onClick={() => setIsEdit(false)}
                className="px-5
                py-2.5
                rounded-xl
                border
                border-slate-200
                bg-white
                text-slate-600
                text-xs
                font-semibold
                hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                onClick={() => setIsEdit(false)}
                className="px-6
                py-2.5
                rounded-xl
                bg-blue-600
                text-white
                text-xs
                font-semibold
                hover:bg-blue-700
                transition-colors"
              >
                Save changes
              </button>

            </div>

          </div>

        )}

        {/* =====================================================
            SECURITY INFO
        ====================================================== */}

        <div
          className="mt-6
          flex
          items-start
          gap-3
          p-5
          rounded-2xl
          bg-slate-50
          border
          border-slate-100"
        >

          <div
            className="w-9
            h-9
            rounded-xl
            bg-white
            border
            border-slate-100
            flex
            items-center
            justify-center
            flex-shrink-0"
          >
            🔒
          </div>

          <div>

            <p className="text-xs font-bold text-slate-700">
              Your information is private
            </p>

            <p className="text-[11px] text-slate-500 mt-1 leading-5">
              Your personal information is used to manage your
              healthcare experience and appointments.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Myprofile;