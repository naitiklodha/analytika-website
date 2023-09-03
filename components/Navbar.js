import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const activeLinkClass =
    "block py-2 pl-3 pr-4  text-transparent bg-clip-text bg-gradient-to-tr from-analytikaGreen to-analytikaYellow ";

  // Get the current route pathname
  const currentPathname = router.pathname;

  // Define an object that maps route paths to their respective labels
  const routeLabels = {
    "/about-us": "About Us",
    "/events": "Events",
    "/team": "Team",
    "/contact-us": "Contact Us",
  };

  useEffect(() => {
    // Update the active element when the route changes
    const handleRouteChange = (url) => {
      currentPathname !== url && setMenuOpen(false);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [currentPathname]);

  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          <p className="flex items-center">
            <img
              src="logo.svg"
              className="h-16 mr-3 mt-4"
              alt="Analytika Logo"
            />
          </p>
        </Link>
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={menuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
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
          className={`w-full md:flex md:w-auto ${
            menuOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="text-xl flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            {Object.entries(routeLabels).map(([path, label]) => (
              <li key={path}>
                <Link
                  href={path}
                  className={
                    currentPathname === path
                      ? `${activeLinkClass}`
                      : "block py-2 pl-3 pr-4"
                  }
                  aria-current={currentPathname === path ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
