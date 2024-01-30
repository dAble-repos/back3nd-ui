// components/Dropdown.js
"use client";
import React, { useState } from "react";
import { Link } from "../../../../shared";
import { NavBarShortcutData } from "../../../../public/data/nav_bar_links_data";

export const BuildDropdown = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const CategoriesData = props.categoryData;

  return (
    <div className=" inline-block w-full mb-0.5 text-sm">
      <button
        className="flex items-center bg-gray-300 text-gray-500 p-2 w-full text-left focus:outline-none hover:bg-gray-500 hover:text-gray-300"
        onClick={toggleDropdown}
      >
        {CategoriesData.icon}
        <span className="ml-2">{CategoriesData.title}</span>
      </button>

      {isOpen && (
        <div className="absolute mt-2 bg-white border rounded shadow-md">
          {CategoriesData.categories.map((item: any, index: number) => {
            return (
              <Link
                key={index}
                href=""
                className="flex items-center m-2 px-2 hover:bg-primary-light hover:rounded-full hover:text-white"
              >
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
