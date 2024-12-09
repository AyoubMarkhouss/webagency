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
        ${isScrolled ? "w-[30%]" : "w-full"}
        bg-white/30 backdrop-blur-md shadow-lg px-4 py-4 rounded-full
      `}
      style={{
        maxWidth: "calc(100% - 2.5rem)", // Adjust for page margin
      }}
    >
      <nav className="flex justify-between items-center px-4">
        <div className="text-lg font-bold">Agency</div>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition"
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
