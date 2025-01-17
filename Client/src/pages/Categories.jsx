import React, { useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const categories = [
    { name: "Technology", path: "/categories/technology" },
    { name: "Lifestyle", path: "/categories/lifestyle" },
    { name: "Travel", path: "/categories/travel" },
    { name: "Education", path: "/categories/education" },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div
        className="flex justify-between items-center px-4 py-2 bg-zinc-950 text-white cursor-pointer rounded-md"
        onClick={toggleDropdown}
      >
        <span className="font-medium">Categories</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06-.02L10 10.664l3.71-3.475a.75.75 0 111.04 1.084l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {isDropdownOpen && (
        <div className="absolute left-0 z-10 mt-2 w-full bg-zinc-950 text-white shadow-lg rounded-md">
          <ul className="py-2">
            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  to={category.path}
                  className="block px-4 py-2 hover:bg-cyan-500 hover:text-white transition"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Categories;
