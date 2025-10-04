import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginnValidationCode, setLoginValidationCode] = useState("")
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Set a key in localStorage to indicate the user is authenticated
    localStorage.setItem("userAuthenticated", true);
    localStorage.setItem("username", username);
    console.log(
      "Login form submitted and 'userAuthenticated' key set in localStorage!"
    );
    navigate("/");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validationCode = "8297"; // Static validation code from the original HTML

  return (
    <div
      className="min-h-screen flex items-start justify-center bg-zinc-900 text-white"
      style={{
        background:
          "radial-gradient(1100px 220px at 50% -60px, rgba(219,0,0,.25), transparent 70%), linear-gradient(180deg, #0e0e10, #1a0b0d 60%)",
      }}
    >
      <Link
        to="/"
        className="fixed right-3 top-3 w-11 h-11 rounded-full bg-black bg-opacity-65 flex items-center justify-center border border-white border-opacity-20 shadow-xl"
        href="#"
        aria-label="Close"
      >
        <span className="text-white text-2xl font-extrabold">✕</span>
      </Link>

      <div className="w-full max-w-lg px-4 pt-4 pb-20">
        <div className="mt-2 leading-none hover:text-yellow-300 transition-colors duration-300">
          <h1 className="text-6xl md:text-5xl font-bold text-[#ffd23a] tracking-wider">
            Sports Hub
          </h1>
        </div>

        <div className="mt-2 bg-[#ffb000] border-6 border-[#f08c00] rounded-[18px] shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Banner"
            className="min-h-[150px] rounded-[12px] w-full h-full object-cover"
          />
        </div>

        <form className="mt-5" onSubmit={handleLogin}>
          <div className="my-3">
            <input
              className="w-full bg-white text-zinc-900 p-4 border-none outline-none rounded-2xl text-base shadow-inner shadow-black/10"
              type="text"
              placeholder="Username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="my-3 relative">
            <input
              className="w-full bg-white text-zinc-900 p-4 border-none outline-none rounded-2xl text-base shadow-inner shadow-black/10"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 text-lg opacity-75 cursor-pointer select-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
          <div className="my-3">
            <div className="w-full bg-white text-zinc-900 p-0 flex items-center gap-2 rounded-2xl shadow-inner shadow-black/10">
              <input
                className="flex-1 p-4 border-none outline-none bg-transparent text-base"
                type="text"
                placeholder="Validation Code"
                inputMode="numeric"
                pattern="[0-9]*"
                value={loginnValidationCode}
                onChange={(e) => setLoginValidationCode(e.target.value)}
              />
              <div className="bg-black text-white p-3 rounded-xl font-extrabold tracking-[2px] min-w-[90px] text-center">
                {validationCode}
              </div>
            </div>
          </div>
          <button
            className="w-full p-4 mt-2 bg-[#c62828] border-0 rounded-xl text-white font-extrabold text-xl shadow-lg shadow-red-700/40 cursor-pointer hover:bg-red-600 transition-all duration-300"
            type="submit"
          >
            Login
          </button>
        </form>



        <div className="text-center text-sm leading-relaxed text-[#e9e9e9]">
          <a href="#" className="text-[#ffcc33] no-underline hover:underline">
            Privacy Policy
          </a>{" "}
          |
          <a href="#" className="text-[#ffcc33] no-underline hover:underline">
            {" "}
            Terms and Conditions
          </a>{" "}
          |
          <a href="#" className="text-[#ffcc33] no-underline hover:underline">
            {" "}
            Rules and Regulations
          </a>{" "}
          |
          <a href="#" className="text-[#ffcc33] no-underline hover:underline">
            {" "}
            KYC
          </a>{" "}
          |
          <a href="#" className="text-[#ffcc33] no-underline hover:underline">
            {" "}
            Responsible Gaming
          </a>{" "}
          |
          <a href="#" className="text-[#ffcc33] no-underline hover:underline">
            {" "}
            Self-Exclusion Policy
          </a>{" "}
          |
          <a href="#" className="text-[#ffcc33] no-underline hover:underline">
            {" "}
            Underage Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
