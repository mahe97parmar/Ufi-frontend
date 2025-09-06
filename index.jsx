import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Agar Tailwind use kar rahe ho

const Intel = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">UFI - Umeed Foundation of India</h1>
      <p className="text-lg text-gray-700">
        UFI works for child education and nutrition. One Hope, One Change.
      </p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Intel />
  </React.StrictMode>
);
