import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavbarMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#2C3E50] fixed start-0 end-0 p-3 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset "
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => handleNavbarMenu()}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <svg
                className="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link
                to={"/"}
                className="uppercase text-white font-bold text-3xl"
              >
                start framework
              </Link>
            </div>
            <div className="hidden sm:ml-auto sm:block">
              <div className="flex space-x-4">
                <NavLink
                  to={"about"}
                  className="rounded-md  px-3 py-2 text-sm font-bold text-white uppercase"
                >
                  About
                </NavLink>
                <NavLink
                  to={"portfolio"}
                  className="rounded-md px-3 py-2 text-sm font-bold text-white  uppercase"
                >
                  portfolio
                </NavLink>
                <NavLink
                  to={"contact"}
                  className="rounded-md px-3 py-2 text-sm font-bold text-white uppercase"
                >
                  contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={isOpen ? "block md:hidden" : "hidden"} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <NavLink
            to={"about"}
            className="block rounded-md px-3 py-2 text-base font-medium text-white uppercase "
            aria-current="page"
          >
            about
          </NavLink>
          <NavLink
            to={"portfolio"}
            className="block rounded-md px-3 py-2 text-base font-medium text-white uppercase"
          >
            portfilio
          </NavLink>
          <NavLink
            to={"contact"}
            className="block rounded-md px-3 py-2 text-base font-medium  text-white uppercase"
          >
            contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
