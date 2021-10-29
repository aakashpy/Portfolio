import React from 'react'
import { Link } from 'react-router-dom'
import hero_image from './Images/hero_image.jpg'

const Projects = (props) => {
    return (
        <>
            <div className="bg-gradient-to-r from-blue-900 via-black to-blue-900 h-auto">
            {props.navbar}
                <div className="relative ">
                    <img className="opacity-90 md:h-image md:w-full" src={hero_image} alt="heroImage"/>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                   text-3xl font-semibold text-center text-white
                   md:text-6xl">
                        Check out all of my projects done so far
                    </div>
                </div>
                <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto p-4">
                        <div className="h-full bg-gray-100 bg-opacity-75  mx-1 px-4 pt-4 pb-10 rounded-lg overflow-hidden text-center relative">
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">BTRE Real Estate Website</h1>
                            <p className="leading-relaxed mb-3">Developed an Real Estate Website with the help of Django Framework</p>
                            <div className="absolute inset-x-0 bottom-0">
                            <Link to="/project/btre_real_estate" className="text-white inline-flex items-center border-2 p-2 rounded-lg
                                bg-gradient-to-r from-blue-500 via-black to-blue-500 hover:from-black hover:via-blue-500 hover:to-black">See Details
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                            </div>
                        </div>
                        <div className=" h-full bg-gray-100 bg-opacity-75  mx-1 px-4 pt-4 pb-10 rounded-lg overflow-hidden text-center relative">
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">SHOT Mobile Store</h1>
                            <p className="leading-relaxed mb-3">Developed an E-Commerce Website with the help of HTML, CSS & PHP</p>
                            <div className="absolute inset-x-0 bottom-0">
                            <Link to="/project/shot_mobile_store" className="text-white inline-flex items-center border-2 p-2 rounded-lg
                                bg-gradient-to-r from-blue-500 via-black to-blue-500 hover:from-black hover:via-blue-500 hover:to-black">See Details
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                            </div>
                        </div>
                        <div className=" h-full bg-gray-100 bg-opacity-75  mx-1 px-4 pt-4 pb-10 rounded-lg overflow-hidden text-center relative">
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Sparkx Bank</h1>
                            <p className="leading-relaxed mb-3">Developed a small bank website with MERN stack framework</p>
                            <div className="absolute inset-x-0 bottom-0">
                            <Link to="/project/sparkx_bank" className="text-white inline-flex items-center border-2 p-2 rounded-lg
                                bg-gradient-to-r from-blue-500 via-black to-blue-500 hover:from-black hover:via-blue-500 hover:to-black">See Details
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                            </div>
                        </div>
                        <div className="h-full bg-gray-100 bg-opacity-75  mx-1 px-4 pt-4 pb-10 rounded-lg overflow-hidden text-center relative">
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Payment Integration</h1>
                            <p className="leading-relaxed mb-3">Developed a small donation website with MERN stack and 3rd party api Razor-Pay</p>
                            <div className="absolute inset-x-0 bottom-0">
                            <Link to="/project/payment_integration" className="text-white inline-flex items-center border-2 p-2 rounded-lg
                                bg-gradient-to-r from-blue-500 via-black to-blue-500 hover:from-black hover:via-blue-500 hover:to-black">See Details
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                            </div>
                        </div>
                        <div className="h-full bg-gray-100 bg-opacity-75  mx-1 px-4 pt-4 pb-10 rounded-lg overflow-hidden text-center relative">
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Simple Zomato Landing Page</h1>
                            <p className="leading-relaxed mb-3">Developed a simple Zomato Clone Landing page with MERN stack framework</p>
                            <div className="absolute inset-x-0 bottom-0">
                            <Link to="/project/zomato" className="text-white inline-flex items-center border-2 p-2 rounded-lg
                                bg-gradient-to-r from-blue-500 via-black to-blue-500 hover:from-black hover:via-blue-500 hover:to-black">See Details
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                            </div>
                        </div>
                        <div className="h-full bg-gray-100 bg-opacity-75  mx-1 px-4 pt-4 pb-10 rounded-lg overflow-hidden text-center relative">
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Task Website</h1>
                            <p className="leading-relaxed mb-3">Developed a simple task reminder webiste using HTML, CSS & JS</p>
                            <div className="absolute inset-x-0 bottom-0">
                            <Link to="/project/tasky" className="text-white inline-flex items-center border-2 p-2 rounded-lg
                                bg-gradient-to-r from-blue-500 via-black to-blue-500 hover:from-black hover:via-blue-500 hover:to-black">See Details
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                            </div>
                        </div>
                        <div className="h-full bg-gray-100 bg-opacity-75  mx-1 px-4 pt-4 pb-10 rounded-lg overflow-hidden text-center relative">
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Landing Page for Bio.fm</h1>
                            <p className="leading-relaxed mb-3">Developed beautiful landing page for user on Bio.fm website using MERN stack</p>
                            <div className="absolute inset-x-0 bottom-0">
                            <Link to="/project/bio_fm" className="text-white inline-flex items-center border-2 p-2 rounded-lg
                                bg-gradient-to-r from-blue-500 via-black to-blue-500 hover:from-black hover:via-blue-500 hover:to-black">See Details
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                            </div>
                        </div>
                        <div className="h-full bg-gray-100 bg-opacity-75  mx-1 px-4 pt-4 pb-10 rounded-lg overflow-hidden text-center relative">
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Restaurant Billing System</h1>
                            <p className="leading-relaxed mb-3">Developed a GUI application of restaurant billing system with QT-Designer and Python</p>
                            <div className="absolute inset-x-0 bottom-0">
                            <Link to="/project/billing" className="text-white inline-flex items-center border-2 p-2 rounded-lg
                                bg-gradient-to-r from-blue-500 via-black to-blue-500 hover:from-black hover:via-blue-500 hover:to-black">See Details
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                            </div>
                        </div>
                        <div className="h-full bg-gray-100 bg-opacity-75  mx-1 px-4 pt-4 pb-10 rounded-lg overflow-hidden text-center relative">
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Machine Learning GUI</h1>
                            <p className="leading-relaxed mb-3">Developed a GUI application for Machine Learning with QT-Designer and Python</p>
                            <div className="absolute inset-x-0 bottom-0">
                            <Link to="/project/ml" className="text-white inline-flex items-center border-2 p-2 rounded-lg
                                bg-gradient-to-r from-blue-500 via-black to-blue-500 hover:from-black hover:via-blue-500 hover:to-black">See Details
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                            </div>
                        </div>
                        <div className="h-full bg-gray-100 bg-opacity-75  mx-1 px-4 pt-4 pb-10 rounded-lg overflow-hidden text-center relative">
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">My Portfolio</h1>
                            <p className="leading-relaxed mb-3">Developed my portfolio website with help of MERN stack framework</p>
                            <div className="absolute inset-x-0 bottom-0">
                            <Link to="/project/portfolio" className="text-white inline-flex items-center border-2 p-2 rounded-lg
                                bg-gradient-to-r from-blue-500 via-black to-blue-500 hover:from-black hover:via-blue-500 hover:to-black">See Details
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                            </div>
                        </div>
                </div>
                <div className="mx-auto text-center text-white text-base pb-3">
                    More projects will be uploaded soon...
                </div>
            </div>
        </>
    )
}

export default Projects