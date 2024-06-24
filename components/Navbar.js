import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";



const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const activeLinkClass =
    "block py-2 pl-3 pr-4 text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-analytikaPurple to-analytikaBlue";

  const currentPathname = router.pathname;

  const routeLabels = {
    "/#about-us": "About Us",
    "/#events": "Events",
    "/#blogs": "Blogs",
    "/#team": "Team",
    "/#contact-us": "Contact Us",
  };

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (currentPathname !== url) {
        setMenuOpen(false);
      }
    };

    const routeChangeCompleteListener = "routeChangeComplete";

    router.events.on(routeChangeCompleteListener, handleRouteChange);

    return () => {
      router.events.off(routeChangeCompleteListener, handleRouteChange);
    };
  }, [currentPathname]);

  return (
    <nav className={`sticky top-0 z-20 bg-analytikaBlack`}>
      <div className="max-w-screen flex flex-wrap items-center text-analytikaWhite justify-between mx-auto p-4">
        <Link href="/">
          <p className="flex items-center uppercase text-2xl md:ml-4 tracking-wider font-normal">
            <Image
              src="/logo.svg"
              className="w-16 h-16 mr-3 mt-4"
              width={0}
              height={0}
              sizes="100vw"
              alt="Analytika Logo"
            />
            Analytika
          </p>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={menuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`w-5 h-5 transition-transform ${
              menuOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:flex md:w-auto transition-opacity ease-linear ${
            menuOpen
              ? "block opacity-100 translate-y-0"
              : "md:block hidden opacity-0 -translate-y-2 md:opacity-100"
          } duration-200`}
          id="navbar-default"
        >
          <ul className="text-lg text-analytikaWhite md:text-xl flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {Object.entries(routeLabels).map(([path, label]) => (
              <Link href={path} key={path}>
                <li key={path} className="text-analytikaWhite">
                  <p
                    className={
                      currentPathname === path
                        ? `${activeLinkClass}`
                        : `block text-analytikaWhite py-2 pl-3 pr-4 hover:text-analytikaPurple`
                    }
                    aria-current={currentPathname === path ? "page" : undefined}
                  >
                    {label}
                  </p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
