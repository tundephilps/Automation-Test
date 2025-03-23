import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent p-4 absolute top-0 w-full z-50">
      <div className="lg:px-12 px-4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center w-56">
          <img src={Logo} alt="Logo" className="h-[48px] w-[48px]" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 text-white text-[14px]">
          <li className="hover:underline">
            <a href="#">Models</a>
          </li>
          <li className="hover:underline">
            <a href="#">Pricing</a>
          </li>
          <li className="hover:underline">
            <a href="#">About Us</a>
          </li>
          <li className="hover:underline">
            <a href="#">Contact Us</a>
          </li>
          <li className="hover:underline">
            <a href="#">Custom Models</a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="text-white border px-6 py-2 rounded hover:bg-white hover:text-[#04142b]">
            Login
          </button>
          <button className="bg-white text-[#03061D] px-4 py-2 rounded hover:bg-[#04142b] hover:text-white hover:shadow-2xl hover:shadow-white">
            Get Started Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0B1C35] p-4 text-white">
          <ul className="space-y-4">
            <li>
              <a href="#">Models</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Custom Models</a>
            </li>
          </ul>
          <div className="mt-4 space-y-2">
            <button className="block w-full text-white border px-4 py-2 rounded">
              Login
            </button>
            <button className="block w-full bg-white text-black px-4 py-2 rounded">
              Get Started Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
