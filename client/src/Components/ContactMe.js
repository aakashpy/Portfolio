import React from 'react'
import insta from './Images/insta.png'
import linkdin from './Images/linkdin.png'

const ContactMe = (props) => {
    return (
        <>
            <div className="bg-gradient-to-r from-blue-900 via-black to-blue-900 h-auto md:h-screen">
                {props.navbar}
                <section className="text-white body-font relative">
                    <div className="container px-5 py-5 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-4xl text-6xl font-medium title-font mb-4 text-white">Contact Me</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl">I will get in touch with you soon...</p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label for="name" className="leading-7 text-md text-white">Name</label>
                                        <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label for="email" className="leading-7 text-md text-white">Email</label>
                                        <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label for="message" className="leading-7 text-md text-white">Message</label>
                                        <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button className="text-white rounded-lg md:h-auto md:w-28 border-2 border-double text-center text-xl
                                    flex justify-center m-auto px-5 py-3 bg-gradient-to-r from-blue-500 via-black to-blue-500
                                    hover:from-black hover:via-blue-500 hover:to-black focus:from-black focus:via-blue-500 focus:to-black">Submit</button>
                                </div>
                            </div>
                        </div>
                        <div className="text-white text-2xl text-center mt-6 md:mt-12">Follow me on other social media</div>
                        <div className="flex justify-center mt-4 mb-4 md:mt-2">
                            <div className="px-3 pt-3 pl-3 md:pt-7">
                                <a href="https://www.instagram.com/aakashg_03/"><img src={insta}
                                    alt="instagram"/></a>
                            </div>
                            <div className="px-3 pt-3 pl-3 md:pt-7">
                                <a href="https://www.linkedin.com/in/aakash-ghole-350332218/"><img src={linkdin}
                                    alt="linkdin"/></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ContactMe
