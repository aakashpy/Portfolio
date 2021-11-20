import React from 'react'
const Contributors = () => {
    return (
        <>
            <div className="text-white text-4xl text-center mt-4">
                Contributors to this project
            </div>
            <section className="text-white body-font">
                <div className="px-5 py-12 mx-auto">
                    <div className="flex flex-wrap -m-2 justify-center md:h-96">
                        <div className="lg:w-1/4 lg:mb-0 mb-6 p-4  bg-gray-500 rounded-lg mr-2 ml-1 relative">
                            <div className="h-full text-center">
                                <img alt="Aakash" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={require('../Components/Images/CONTRIBUTORS/Aakash.jpg').default} />
                                <p className="text-3xl">Aakash Ghole</p>
                                <p className="leading-relaxed">3rd Year Computer Science Student at Atharva College of Engineering, Mumbai Unversity</p>

                                <p className="text-white mb-3 mt-3">Full stack Web Developer,GUI Developer and Android Developer</p>
                                <div className="flex justify-center md:absolute md:bottom-1 md:inset-x-0">
                                    <a href="https://github.com/aakashpy" target="_blank" rel="noreferrer" className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                            src={require('../Components/Images/github.png').default} alt="github" />
                                    </a>
                                    <a href="https://www.instagram.com/aakashg_03/" target="_blank" rel="noreferrer" className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                            src={require('../Components/Images/insta.png').default} alt="insta" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/aakash-ghole-350332218/" target="_blank" rel="noreferrer" className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                            src={require('../Components/Images/linkdin.png').default} alt="linkdin" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/4 lg:mb-0 mb-6 p-4 bg-gray-500 rounded-lg mr-1 ml-1 relative">
                            <div className="h-full text-center">
                                <img alt="Sneha" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={require('../Components/Images/CONTRIBUTORS/Sneha.jpg').default} />
                                <p className="text-3xl">Sneha Dhumal</p>
                                <p className="leading-relaxed">3rd Year Computer Science Student at Atharva College of Engineering, Mumbai Unversity</p>

                                <p className="text-white mb-3 mt-3">Full stack Web Developer and UI designer</p>
                                <div className="flex justify-center md:absolute md:bottom-1 md:inset-x-0">
                                    <a href="https://github.com/SnehaDhumal1508" target="_blank" rel="noreferrer" className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                            src={require('../Components/Images/github.png').default} alt="github" />
                                    </a>
                                    <a href="https://www.instagram.com/snehadhumal_15/" target="_blank" rel="noreferrer" className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                            src={require('../Components/Images/insta.png').default} alt="insta" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/sneha-dhumal/" target="_blank" rel="noreferrer" className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                            src={require('../Components/Images/linkdin.png').default} alt="linkdin" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/4 lg:mb-0 mb-6 p-4 bg-gray-500 rounded-lg mr-1 ml-2 relative">
                            <div className="h-full text-center">
                                <img alt="Dhairya" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={require('../Components/Images/CONTRIBUTORS/Dhairya.jpg').default} />
                                <p className="text-3xl">Dhairya Honrao</p>
                                <p className="leading-relaxed">3rd Year Computer Science Student at Atharva College of Engineering, Mumbai Unversity</p>
                                <p className="text-white mb-3 mt-3">IOT specialist and UI designer</p>
                                <div className="flex justify-center md:absolute md:bottom-1 md:inset-x-0">
                                    <a href="https://github.com/DhairyaHonrao" target="_blank" rel="noreferrer" className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                            src={require('../Components/Images/github.png').default} alt="github" />
                                    </a>
                                    <a href="https://www.instagram.com/dhairya_honrao/" target="_blank" rel="noreferrer" className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                            src={require('../Components/Images/insta.png').default} alt="insta" />
                                    </a>
                                    {/* <a href="https://www.linkedin.com/in/sneha-dhumal/" target="_blank" rel="noreferrer"className="text-white">
                                        <img className="w-12 h-12 mb-8 ml-2 mr-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" 
                                        src={require('../Images/linkdin.png').default} alt="linkdin"/>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contributors
