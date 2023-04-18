import React, { useState } from "react";
import Logo from "../assets/LogoBlack.png";
import { Transition } from "@headlessui/react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <nav className="fixed bg-gold font-primary font-bold text-2xl w-full">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/">
                  <img
                    className="h-12 w-15"
                    src={Logo}
                    alt="Logo-Black"
                  />
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/"
                    className="text-darkgray hover:text-black px-3 py-2 rounded-md hover:bg-yellow"
                  >
                    Home
                  </a>

                  <a
                    href="#features"
                    className="text-darkgray hover:text-black px-3 py-2 rounded-md hover:bg-yellow"
                  >
                    Features
                  </a>

                  <a
                    href="#about-us"
                    className="text-darkgray hover:text-black px-3 py-2 rounded-md hover:bg-yellow"
                  >
                    About Us
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gold inline-flex items-center justify-center p-2 rounded-md text-darkgray hover:text-black hover:bg-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-darkgray focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden text-2xl font-bold" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-yellow hover:text-black text-darkgray block px-3 py-2 rounded-md"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="hover:bg-yellow hover:text-black text-darkgray block px-3 py-2 rounded-md"
                >
                  Features
                </a>

                <a
                  href="#"
                  className="hover:bg-yellow hover:text-black text-darkgray block px-3 py-2 rounded-md"
                >
                  About Us
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
