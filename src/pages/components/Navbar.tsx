import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsScrolled(true);
      } else if (window.scrollY < lastScrollY) {
        setIsScrolled(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`
        fixed top-5 left-1/2 transform -translate-x-1/2 transition-all duration-500
        ${isScrolled ? "w-[40%]" : "w-full"}
        bg-white/30 backdrop-blur-md shadow-lg px-4 py-4 rounded-full
      `}
      style={{
        maxWidth: "calc(100% - 2.5rem)", // Adjust for page margin
      }}
    >
      <nav className="flex justify-between items-center px-4">
        <div className="fontmed text-lg">
          <Image
            className="w-20"
            alt="logo"
            src="/logodeclic.png"
            width={1000}
            height={1000}
          />
        </div>
        <ul className="fontreg flex space-x-5">
          <li>
            <a
              href="#"
              className="text-black text-xl hover:text-red-700 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black text-xl hover:text-red-700 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black text-xl hover:text-red-700 transition"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black text-xl hover:text-red-700 transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
