import React from 'react'

const MyCV = (props) => {

    return (
        <div className="text-white bg-gradient-to-r from-blue-900 via-black to-blue-900 h-auto">
            {props.navbar}
            <div className="mt-4 pb-4 grid grid-cols-12">
                <div className="col-start-3 col-end-11 bg-gray-300 text-black">
                    <div className="grid grid-rows-1 grid-flow-col h-8">
                        <div class="col-span-2 bg-black rounded-br-lg"></div>
                        <div class="col-span-6"></div>
                    </div>
                    <div className="grid grid-cols-12 bg-color-gray-100">
                        <div className="col-start-1 col-end-4 pl-2 pr-2 bg-gray-700 text-white rounded-lg m-1">
                            <img src={require('./Images/Profilepic.jpg').default}
                                alt="profile" className="h-48 rounded border-black border-2 m-auto mt-4" />
                            <div className="text-white text-center text-4xl font-semibold pt-4">
                                Aakash Ghole
                            </div>
                            <div className="mt-12">
                                <div className="text-2xl font-semibold">
                                    CONTACT ME
                                </div>
                                <div className="bg-gray-500 rounded-md mt-2 mb-2 p-2">
                                    <p className="text-md font-semibold">Address:</p>
                                    <hr />
                                    <p className="text-sm">177 Great Poland Street,
                                        London, UK
                                    </p>
                                    <p className="text-md font-semibold pt-2">Contact:</p>
                                    <hr />
                                    <p className="text-sm">+91 9999999999
                                    </p>
                                    <p className="text-md font-semibold pt-2">Email:</p>
                                    <hr />
                                    <p className="text-sm">gholeaakash03@gmail.com
                                    </p>
                                    <p className="text-md font-semibold pt-2">My Website:</p>
                                    <hr />
                                    <p className="text-sm">https://aakashgportfolio.herokuapp.com
                                    </p>
                                </div>
                            </div>
                            <div className="mt-12">
                                <div className="text-2xl font-semibold">
                                    FOLLOW ME
                                </div>
                                <div className="bg-gray-500 rounded-md mt-2 mb-2 p-2">
                                    <p className="text-md font-semibold">Instagram:</p>
                                    <hr />
                                    <p className="text-sm">https://www.instagram.com/aakashg_03/
                                    </p>
                                    <p className="text-md font-semibold pt-2">Linkdin:</p>
                                    <hr />
                                    <p className="text-sm">https://www.linkedin.com/in/aakash-ghole-350332218/
                                    </p>
                                </div>
                            </div>
                            <div className="mt-12 mb-4">
                                <div className="text-2xl font-semibold">
                                    LANGUAGES
                                </div>
                                <div className="bg-gray-500 rounded-md mt-2 mb-2 p-2">
                                    <p className="text-md font-semibold">English: B1</p>
                                    <hr />
                                    <p className="text-md font-semibold pt-2">Hindi: C2</p>
                                    <hr />
                                    <p className="text-md font-semibold pt-2">Marathi: C2</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-start-4 col-span-9 pl-4 pr-2 bg-gray-700 text-white rounded-lg m-1">
                            <div className="text-2xl font-semibold mt-2 bg-gray-500 rounded-t-lg p-1">
                                SUMMARY
                            </div>
                            <hr />
                            <div className="text-md text-center pt-2 bg-gray-500 rounded-b-lg p-1">
                                <p>
                                    I am Full Stack Web Developer, experienced with all stages of developement cycle of web projects. Well versed
                                    with numerous programming languages including html, css ,php, python, sql, javascript. I also develope
                                    standalone GUI using python.
                                </p>
                            </div>
                            <div className="text-2xl font-semibold mt-10 bg-gray-500 rounded-t-lg p-1">
                                SKILLS HIGHLIGHTS
                            </div>
                            <hr />
                            <div className="grid grid-cols-3 pt-4 bg-gray-500 rounded-b-lg p-1">
                                <div className="border-2 rounded-lg ml-1 mr-1 p-1">
                                    <div className="text-xl">SOFT SKILLS</div>
                                    <div>
                                        <li>Project Management</li>
                                        <li>Creativity</li>
                                        <li>Communication</li>
                                        <li>Time management</li>
                                        <li>Team Work</li>
                                    </div>
                                </div>
                                <div className="border-2 rounded-lg ml-1 mr-1 p-1">
                                    <div className="text-xl">HARD SKILLS</div>
                                    <div>
                                        <li>Frameworks</li>
                                        <li>Git</li>
                                        <li>Debugging</li>
                                        <li>Software Development</li>
                                        <li>Problem Solving</li>
                                    </div>
                                </div>
                                <div className="border-2 rounded-lg ml-1 mr-1 p-1">
                                    <div className="text-xl">PROGRAMMING LANGUAGES</div>
                                    <div>
                                        <li>HTML, CSS, PHP, SQL</li>
                                        <li>PYTHON</li>
                                        <li>C</li>
                                        <li>C++</li>
                                        <li>JS</li>
                                        <li>DJANGO</li>
                                        <li>MERN Stack</li>
                                        <li>JAVA</li>
                                    </div>
                                </div>
                            </div>
                            <div className="text-2xl font-semibold mt-10 bg-gray-500 rounded-t-lg p-1">
                                EXPERIENCE
                            </div>
                            <hr />
                            <div className="grid grid-rows-3 grid-flow-col pt-4 bg-gray-500 rounded-b-lg p-1">
                                <div className="row-span-3">
                                    <div className="text-lg font-semibold">ShapeAi</div>
                                    <div className="text-lg font-semibold">10/7/21 - 10/10/21</div>
                                </div>
                                <div className="row-span-3 col-span-2 pl-12 pr-3">
                                    <p>Worked as an Intern as a Full Stack Web Developer. My responsibilties were to create both frontend and
                                        backend of the website and deploy the website on any cloud platforms. Developed projects like Task Management,
                                        Book API and Book My Show clone.
                                    </p>
                                    <p>
                                        Worked with Senior Developers to manage large, complex design for projects
                                    </p>
                                </div>
                            </div>
                            <div className="text-2xl font-semibold mt-10 bg-gray-500 rounded-t-lg p-1">
                                EDUCATION
                            </div>
                            <hr />
                            <div class="grid grid-flow-row grid-cols-5 grid-rows-3 gap-4 bg-gray-500 rounded-b-lg p-1">
                                <div className="row-span-3 col-span-2">
                                    <div className="text-lg font-semibold">Atharva College of Engineering</div>
                                    <div className="text-lg font-semibold">2019 - 2023</div>
                                </div>
                                <div className="row-span-3 col-span-3">
                                    <p className="text-lg font-semibold">Bachelors of Engineering</p>
                                    <p>Currently in 3rd Year of Computer Engineering</p>
                                    <p>Mumbai University</p>
                                </div>
                                <div className="row-span-3 col-span-2">
                                    <div className="text-lg font-semibold">Nirmala College of Science and Commerce</div>
                                    <div className="text-lg font-semibold">2017 - 2019</div>
                                </div>
                                <div className="row-span-3 col-span-3">
                                    <p className="text-lg font-semibold">Higher Secondary Certificate</p>
                                    <p>Passed out 12th board exams with 78% in Science stream</p>
                                    <p>Mumbai University</p>
                                </div>
                                <div className="row-span-3 col-span-2">
                                    <div className="text-lg font-semibold">Ryan International School Goregaon</div>
                                    <div className="text-lg font-semibold">2007 - 2017</div>
                                </div>
                                <div className="row-span-3 col-span-3">
                                    <p className="text-lg font-semibold">Indian Certificate of Secondary Education</p>
                                    <p>Passed out 10th board exams with 88% in Science stream</p>
                                    <p>Delhi University</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-rows-1 grid-flow-col h-8">
                        <div class="col-span-2"></div>
                        <div class="col-span-6 bg-black rounded-tl-lg ml-1"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCV
