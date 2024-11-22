import React from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <h1 className="font-bold font-inconsolata cursor-pointer">MP4 Player</h1>
  );
};

const Header = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="flex justify-between items-center p-2 border-b darkBorderBottom bg-base-100 text-gray-400 font-bold font-inconsolata">
        <Title />
        <nav className="">
          <ul className="flex space-x-12">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">ABout</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
