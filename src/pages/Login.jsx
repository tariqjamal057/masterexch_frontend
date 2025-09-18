import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Username" className="w-full p-3 border rounded" />
          <input type="password" placeholder="Password" className="w-full p-3 border rounded" />
          <button className="w-full bg-red-600 text-white py-3 rounded font-bold">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
