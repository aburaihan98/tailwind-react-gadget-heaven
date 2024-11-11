import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Page Not Found!
      </h2>
      <p className="text-gray-600 mb-8 text-center">
        Sorry, the page you are looking for does not exist or has been removed.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
      >
        Go Back to Homepage
      </button>
    </div>
  );
}
