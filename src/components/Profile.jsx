import React, { useState } from "react";
import SvgIcon from "../utils/icons/SvgIcon";

const Profile = ({avatar}) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Profile", link: "#" },
    { title: "Projects", link: "#" },
    { title: "My Learning", link: "#" },
    { title: "Logout", link: "#" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 focus:outline-none"
        id="dropdown-menu"
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
      >
        <img
          src= {avatar}
          alt="Profile"
          className="h-10 rounded-full"
        />
        {!isOpen ? (
          <SvgIcon d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        ) : (
          <SvgIcon d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        )}
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-menu"
          >
            {menuItems.map((item) => (
              <a onClick={toggleDropdown}
                key={item.title}
                href={item.link}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                <span>{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
