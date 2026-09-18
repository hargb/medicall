import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // Backend authentication logic will be connected here.
    console.log({
      mode: state,
      name,
      email,
      password,
    });
  };

  const switchMode = () => {
    setState((prev) => (prev === "Sign Up" ? "Login" : "Sign Up"));
    setPassword("");
  };

  return (
    <main className="min-h-[calc(100vh-80px)] bg-slate-50 flex items-center">

      <div className="w-full max-w-[1180px] mx-auto px-5 sm:px-8 py-10 lg:py-16">

        <div
          className="grid
          lg:grid-cols-2
          bg-white
          rounded-[28px]
          overflow-hidden
          border
          border-slate-100
          shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
        >

          {/* =====================================================
              LEFT — BRAND / TRUST SECTION
          ====================================================== */}

          <div
            className="hidden
            lg:flex
            relative
            overflow-hidden
            bg-slate-950
            p-10
            xl:p-14
            flex-col
            justify-between
            min-h-[650px]"
          >

            {/* Decorative shapes */}

            <div
              className="absolute
              -right-28
              -top-28
              w-80
              h-80
              rounded-full
              bg-blue-500/10"
            />

            <div
              className="absolute
              -left-32
              -bottom-32
              w-96
              h-96
              rounded-full
              bg-cyan-500/5"
            />

            <div className="relative">

              {/* Logo */}

              <div className="flex items-center gap-3">

                <div
                  className="w-11
                  h-11
                  rounded-2xl
                  bg-blue-600
                  flex
                  items-center
                  justify-center
                  text-white
                  font-bold
                  text-lg"
                >
                  M
                </div>

                <div>

                  <p className="text-white font-bold text-lg">
                    Medi-call
                  </p>

                  <p className="text-[10px] text-slate-500">
                    Healthcare made simpler
                  </p>

                </div>

              </div>

              {/* Main message */}

              <div className="mt-24">

                <div
                  className="inline-flex
                  items-center
                  gap-2
                  px-3
                  py-1.5
                  rounded-full
                  bg-white/5
                  border
                  border-white/10"
                >

                  <span className="w-2 h-2 rounded-full bg-emerald-500" />

                  <span className="text-[10px] font-medium text-slate-300">
                    Your health, your way
                  </span>

                </div>

                <h1
                  className="mt-6
                  text-4xl
                  xl:text-5xl
                  font-bold
                  leading-[1.1]
                  tracking-tight
                  text-white"
                >
                  Better access to
                  <span className="block text-blue-400">
                    better healthcare.
                  </span>
                </h1>

                <p
                  className="mt-6
                  max-w-md
                  text-sm
                  leading-6
                  text-slate-400"
                >
                  Find trusted doctors, compare specialities and
                  schedule consultations from one simple healthcare
                  platform.
                </p>

              </div>

            </div>

            {/* Trust points */}

            <div className="relative grid grid-cols-3 gap-3">

              <div
                className="rounded-2xl
                bg-white/5
                border
                border-white/10
                p-4"
              >

                <p className="text-lg font-bold text-white">
                  24/7
                </p>

                <p className="text-[10px] text-slate-500 mt-1">
                  Access
                </p>

              </div>

              <div
                className="rounded-2xl
                bg-white/5
                border
                border-white/10
                p-4"
              >

                <p className="text-lg font-bold text-white">
                  100%
                </p>

                <p className="text-[10px] text-slate-500 mt-1">
                  Digital
                </p>

              </div>

              <div
                className="rounded-2xl
                bg-white/5
                border
                border-white/10
                p-4"
              >

                <p className="text-lg font-bold text-white">
                  Easy
                </p>

                <p className="text-[10px] text-slate-500 mt-1">
                  Booking
                </p>

              </div>

            </div>

          </div>

          {/* =====================================================
              RIGHT — AUTH FORM
          ====================================================== */}

          <div
            className="p-6
            sm:p-10
            lg:p-12
            xl:p-14
            flex
            flex-col
            justify-center"
          >

            {/* Mobile brand */}

            <div className="lg:hidden flex items-center gap-3 mb-10">

              <div
                className="w-10
                h-10
                rounded-xl
                bg-blue-600
                flex
                items-center
                justify-center
                text-white
                font-bold"
              >
                M
              </div>

              <div>

                <p className="font-bold text-slate-900">
                  Medi-call
                </p>

                <p className="text-[10px] text-slate-400">
                  Healthcare made simpler
                </p>

              </div>

            </div>

            {/* Header */}

            <div>

              <span
                className="text-[10px]
                uppercase
                tracking-[0.18em]
                font-bold
                text-blue-600"
              >
                {state === "Sign Up"
                  ? "Get started"
                  : "Welcome back"}
              </span>

              <h2
                className="mt-2
                text-3xl
                font-bold
                tracking-tight
                text-slate-900"
              >
                {state === "Sign Up"
                  ? "Create your account"
                  : "Login to Medi-call"}
              </h2>

              <p
                className="mt-2
                text-sm
                leading-6
                text-slate-500"
              >
                {state === "Sign Up"
                  ? "Create an account to manage your healthcare appointments."
                  : "Access your appointments and healthcare profile."}
              </p>

            </div>

            {/* =================================================
                FORM
            ================================================== */}

            <form
              onSubmit={onSubmitHandler}
              className="mt-8 space-y-5"
            >

              {/* Full name */}

              {state === "Sign Up" && (

                <div>

                  <label
                    className="block
                    text-xs
                    font-semibold
                    text-slate-700
                    mb-2"
                  >
                    Full name
                  </label>

                  <div className="relative">

                    <span
                      className="absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-slate-400"
                    >
                      👤
                    </span>

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full
                      h-12
                      pl-11
                      pr-4
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      text-sm
                      text-slate-800
                      placeholder:text-slate-400
                      outline-none
                      transition-all
                      focus:bg-white
                      focus:border-blue-500
                      focus:ring-4
                      focus:ring-blue-50"
                    />

                  </div>

                </div>

              )}

              {/* Email */}

              <div>

                <label
                  className="block
                  text-xs
                  font-semibold
                  text-slate-700
                  mb-2"
                >
                  Email address
                </label>

                <div className="relative">

                  <span
                    className="absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400"
                  >
                    ✉
                  </span>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full
                    h-12
                    pl-11
                    pr-4
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    text-sm
                    text-slate-800
                    placeholder:text-slate-400
                    outline-none
                    transition-all
                    focus:bg-white
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-50"
                  />

                </div>

              </div>

              {/* Password */}

              <div>

                <div className="flex items-center justify-between mb-2">

                  <label
                    className="text-xs
                    font-semibold
                    text-slate-700"
                  >
                    Password
                  </label>

                  {state === "Login" && (

                    <button
                      type="button"
                      className="text-[10px]
                      font-semibold
                      text-blue-600
                      hover:text-blue-700"
                    >
                      Forgot password?
                    </button>

                  )}

                </div>

                <div className="relative">

                  <span
                    className="absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400"
                  >
                    🔒
                  </span>

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    className="w-full
                    h-12
                    pl-11
                    pr-12
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    text-sm
                    text-slate-800
                    placeholder:text-slate-400
                    outline-none
                    transition-all
                    focus:bg-white
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-50"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    className="absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-xs
                    text-slate-400
                    hover:text-slate-600"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>

                {state === "Sign Up" && (

                  <p className="mt-2 text-[10px] text-slate-400">
                    Password must contain at least 6 characters.
                  </p>

                )}

              </div>

              {/* Submit */}

              <button
                type="submit"
                className="w-full
                h-12
                rounded-xl
                bg-blue-600
                text-white
                text-sm
                font-semibold
                hover:bg-blue-700
                active:scale-[0.99]
                transition-all
                shadow-sm"
              >
                {state === "Sign Up"
                  ? "Create Account →"
                  : "Login →"}
              </button>

            </form>

            {/* =================================================
                SWITCH MODE
            ================================================== */}

            <div
              className="flex
              items-center
              gap-3
              my-7"
            >

              <div className="h-px bg-slate-100 flex-1" />

              <span className="text-[10px] text-slate-400">
                OR
              </span>

              <div className="h-px bg-slate-100 flex-1" />

            </div>

            <p className="text-center text-xs text-slate-500">

              {state === "Sign Up"
                ? "Already have an account?"
                : "Don't have an account?"}

              <button
                type="button"
                onClick={switchMode}
                className="ml-1.5
                font-semibold
                text-blue-600
                hover:text-blue-700"
              >
                {state === "Sign Up"
                  ? "Login here"
                  : "Create one"}
              </button>

            </p>

            {/* Security */}

            <div
              className="flex
              items-start
              gap-3
              mt-8
              p-4
              rounded-2xl
              bg-slate-50
              border
              border-slate-100"
            >

              <span className="text-sm">
                🔐
              </span>

              <p
                className="text-[10px]
                leading-4
                text-slate-500"
              >
                Your account information will be securely handled
                once authentication is connected to the backend.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
};

export default Login;