import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Transition } from "@headlessui/react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <nav className="bg-black w-full mx-auto px-4 sm:px-6 lg:px-8 md:w-full">
                <div className="flex items-center justify-between h-20 max-w-full">
                    <div className="flex items-center w-screen justify-between mx-auto">
                        <div className=" flex  items-center">
                            {/* <img
                                    className="h-8 w-8"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                    alt="Workflow"
                                /> */}
                            <div className="font-serif font-bold text-2xl text-purple-400 pl-3 ">Portfolio</div>
                        </div>
                        <div className="hidden md:block ">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link
                                    to="/"
                                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/project"
                                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Projects
                                </Link>
                                <Link
                                    to="/myCv"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    My CV
                                </Link>
                                <Link
                                    to="/about"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    About
                                </Link>
                                <Link
                                    to="/contact"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Contact Me
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-1 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-400 transform"
                    enterFrom="opacity-0 scale-0"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-400 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-0"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link
                                    to="/"
                                    className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-md font-medium"
                                    onClick={() => setIsOpen(!isOpen)}>
                                    Home
                                </Link>
                                <Link
                                    to="/project"
                                    className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-md font-medium"
                                    onClick={() => setIsOpen(!isOpen)}>
                                    Projects
                                </Link>
                                <Link
                                    to="/myCv"
                                    className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-md font-medium"
                                    onClick={() => setIsOpen(!isOpen)}>
                                    My CV
                                </Link>
                                <Link
                                    to="/about"
                                    className="text-white hover:bg-gray-700  block px-3 py-2 rounded-md text-md font-medium"
                                    onClick={() => setIsOpen(!isOpen)}>
                                    About
                                </Link>
                                <Link
                                    to="/contact"
                                    className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-md font-medium"
                                    onClick={() => setIsOpen(!isOpen)}>
                                    Contact Me
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </>
    )
}

export default Navbar 
