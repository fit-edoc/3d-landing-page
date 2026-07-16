import React from "react";

interface MenuProps {
  handlechange: () => void;
  toggle: boolean;
}

const Menu = ({ handlechange, toggle }: MenuProps) => {
  return (
    <button
      onClick={handlechange}
      className="relative flex h-8 w-8 items-center justify-center sm:hidden"
    >
      {/* Top line */}
      <span
        className={`absolute h-0.5 w-6 bg-taupe-900 transition-all duration-300 ${
          toggle ? "rotate-45" : "-translate-y-2"
        }`}
      />

      {/* Bottom line */}
      <span
        className={`absolute h-0.5 w-6 bg-taupe-900 transition-all duration-300 ${
          toggle ? "-rotate-45" : "translate-y-2"
        }`}
      />
    </button>
  );
};

export default Menu;