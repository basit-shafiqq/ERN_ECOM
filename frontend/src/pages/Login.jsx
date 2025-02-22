import React, { useState } from "react";

function Signup() {
  const [checked, setChecked] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        {/* Full Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={form.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-blue-500"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-blue-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-blue-500"
          />
        </div>

        {/* Terms & Conditions Checkbox */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="terms"
            checked={checked}
            onChange={() => setChecked(!checked)}
            className="mr-2 w-4 h-4 cursor-pointer"
          />
          <label htmlFor="terms" className="text-gray-600 cursor-pointer">
            I agree to the{" "}
            <span className="text-blue-500 hover:underline">
              Terms & Conditions
            </span>
          </label>
        </div>

        {/* Signup Button */}
        <button
          className={`w-full p-2 rounded-md text-white ${
            checked ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!checked}
        >
          Sign Up
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
