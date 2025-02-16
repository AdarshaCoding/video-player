import React from "react";
import { FcAbout } from "react-icons/fc";
import { IoMdContact } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <h1 className="font-bold font-inconsolata cursor-pointer hover:text-orange-500">
      Video Player
    </h1>
  );
};

const Header = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="flex justify-between items-center p-2 border-b darkBorderBottom bg-base-100 text-gray-400 font-bold font-inconsolata">
        <Link to={"/"}>
          <Title />
        </Link>
        <nav className="">
          <ul className="flex space-x-12">
            <li className="cursor-pointer">
              <Link to={"/"} className="flex items-center gap-2">
                <IoHome /> <h2 className=" hover:text-orange-500">Home</h2>
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to={"/about"} className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.6"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
                <h2 className=" hover:text-orange-500">About</h2>
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to={"/contact"} className="flex items-center gap-2">
                <IoMdContact className="size-6" />
                <h2 className=" hover:text-orange-500">Contact</h2>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
